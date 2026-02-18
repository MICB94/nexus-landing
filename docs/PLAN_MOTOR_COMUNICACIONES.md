# Plan: Motor de Comunicaciones Nexus

**Documento de planificación** — No implementado. Guardado para ejecución futura.

---

## 1. Visión y objetivo

### Problema actual
- Cada cliente requeriría una app propia en Meta Developers para WhatsApp, Messenger e Instagram.
- Implica: registro, verificación, tokens y permisos por cliente.
- Complejidad operativa alta y difícil de escalar.

### Solución propuesta
Un **motor de comunicaciones centralizado** que:
- Use **una sola app** en Meta for Developers.
- Gestione mensajería (WhatsApp, Messenger, IG DMs) y publicaciones de marketing (IG, FB).
- Enrute todo por **tenant** (org_id): cada cliente conecta sus canales una vez y el motor hace el resto.

---

## 2. Arquitectura general

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        MOTOR DE COMUNICACIONES                            │
│  (Servicio único, una app Meta, lógica de routing por tenant)             │
└─────────────────────────────────────────────────────────────────────────┘
         │                    │                    │                    │
         ▼                    ▼                    ▼                    ▼
   ┌──────────┐        ┌──────────┐        ┌──────────┐        ┌──────────┐
   │ WhatsApp │        │ Messenger│        │ Instagram│        │ Marketing │
   │   API    │        │   API    │        │   DMs    │        │ Publishing│
   └──────────┘        └──────────┘        └──────────┘        └──────────┘
         │                    │                    │                    │
         └────────────────────┴────────────────────┴────────────────────┘
                                          │
                                          ▼
                              ┌───────────────────────┐
                              │   Meta for Developers │
                              │   (Una sola app)      │
                              └───────────────────────┘
```

### Flujo de mensajes entrantes
```
[Usuario escribe por WhatsApp/IG/Messenger]
         │
         ▼
[Meta envía webhook al motor]
         │
         ▼
[Motor identifica tenant: page_id, phone_number_id, etc.]
         │
         ▼
[Motor envía mensaje a la instancia del cliente correspondiente]
```

### Flujo de mensajes salientes
```
[Instancia del cliente A quiere enviar mensaje]
         │
         ▼
[Cliente llama API del motor: POST /send { tenant_id, channel, to, body }]
         │
         ▼
[Motor busca tokens del tenant, llama a Meta/WhatsApp API]
```

---

## 3. Componentes del motor

### 3.1 Base de datos (por tenant)

| Tabla / Entidad | Campos principales | Uso |
|-----------------|---------------------|-----|
| `tenant_channels` | tenant_id, channel (whatsapp\|messenger\|instagram), access_token (cifrado), page_id, phone_number_id, ig_account_id, expires_at, connected_at | Tokens y IDs por canal |
| `tenant_oauth_state` | state (uuid), tenant_id, channel, created_at | Estado temporal para OAuth callback |
| `outbound_queue` | tenant_id, channel, to, body, status, scheduled_at, sent_at | Cola de mensajes salientes (opcional, para retries) |
| `inbound_log` | tenant_id, channel, from, body, received_at, forwarded | Log de mensajes entrantes (auditoría) |

### 3.2 API del motor

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/oauth/start` | GET | Redirige a Meta OAuth. Query: `tenant_id`, `channel` |
| `/oauth/callback` | GET | Recibe code de Meta, intercambia por token, guarda, redirige a dashboard |
| `/webhooks/meta` | POST | Recibe webhooks de Meta (mensajes entrantes) |
| `/send` | POST | Envía mensaje. Body: `tenant_id`, `channel`, `to`, `body` |
| `/publish` | POST | Publica contenido. Body: `tenant_id`, `channel`, `content` (imagen, texto, etc.) |
| `/channels/status` | GET | Devuelve estado de canales conectados por tenant |

### 3.3 Servicios internos

- **RoutingService**: Dado un webhook, identifica tenant y reenvía a la instancia correcta.
- **TokenService**: Obtiene, almacena y refresca tokens. Nunca expone tokens crudos a las instancias.
- **SendService**: Envía mensajes usando los tokens del tenant.
- **PublishService**: Publica contenido en IG/FB usando los tokens del tenant.

---

## 4. Canales soportados

### 4.1 Mensajería

| Canal | API | Permisos Meta | Notas |
|-------|-----|---------------|-------|
| WhatsApp | WhatsApp Cloud API | `whatsapp_business_messaging` | Un número por negocio; verificación en Meta Business Suite |
| Messenger | Facebook Graph API | `pages_messaging` | Una Page por negocio; OAuth estándar |
| Instagram DMs | Instagram Messaging API | `instagram_manage_messages` | IG Business vinculada a Page; OAuth estándar |

### 4.2 Publicaciones (marketing)

| Canal | API | Permisos Meta | Notas |
|-------|-----|---------------|-------|
| Instagram | Content Publishing API | `instagram_content_publish` | Posts, stories, reels |
| Facebook | Pages API | `pages_manage_posts` | Posts en Page |

---

## 5. Obtención de tokens (OAuth)

### 5.1 Flujo por tenant

1. **Cliente** entra a su dashboard Nexus → Configuración → Canales.
2. Pulsa **"Conectar Instagram"** (o Facebook, según canal).
3. **Motor** redirige a:
   ```
   https://www.facebook.com/v18.0/dialog/oauth?
     client_id={APP_ID}
     &redirect_uri={MOTOR_URL}/oauth/callback
     &scope=instagram_manage_messages,instagram_content_publish,pages_manage_posts
     &state=tenant:{tenant_id}:channel:instagram
   ```
4. Usuario inicia sesión en Meta y acepta permisos.
5. Meta redirige a `{MOTOR_URL}/oauth/callback?code=xxx&state=...`
6. **Motor**:
   - Parsea `state` → obtiene `tenant_id`, `channel`
   - POST a Meta para intercambiar `code` por access token
   - Opcional: convierte a long-lived token (60 días)
   - Obtiene `page_id`, `instagram_business_account_id`
   - Guarda en `tenant_channels` (token cifrado)
   - Redirige al cliente a su dashboard con mensaje "Instagram conectado"

### 5.2 Almacenamiento seguro

- Tokens cifrados en reposo (AES-256 o similar).
- Nunca se exponen a las instancias de los clientes.
- Solo el motor los usa para llamar a las APIs de Meta.

### 5.3 Renovación de tokens

- Tokens de larga duración: renovar antes de `expires_at`.
- Job periódico que detecta tokens próximos a expirar y los refresca.
- Si no es posible refrescar, notificar al cliente para reconectar.

---

## 6. WhatsApp: consideraciones especiales

- **WhatsApp Cloud API**: El token suele ser de la app, no por negocio.
- Cada negocio puede tener su **número de teléfono** verificado.
- Flujo: añadir número en Meta Business Suite → verificación (SMS, voz) → número asociado al tenant.
- El motor enruta por `phone_number_id` en los webhooks.

---

## 7. Fases de implementación sugeridas

### Fase 1: Fundación (4–6 semanas)
- [ ] Crear repositorio/servicio del motor.
- [ ] Configurar app en Meta for Developers.
- [ ] Implementar OAuth: start + callback para Instagram y Facebook.
- [ ] Tabla `tenant_channels` y TokenService.
- [ ] Endpoint `/channels/status` para ver estado de conexión.

### Fase 2: Mensajería entrante (2–3 semanas)
- [ ] Webhook `/webhooks/meta` para Messenger e Instagram.
- [ ] RoutingService: identificar tenant por page_id / ig_account_id.
- [ ] Integración con instancias: enviar mensajes entrantes a cada cliente (webhook interno o cola).

### Fase 3: Mensajería saliente (2–3 semanas)
- [ ] Endpoint `/send` para Messenger e Instagram.
- [ ] SendService: usar tokens del tenant para enviar.
- [ ] UI en dashboard del cliente: "Enviar mensaje" (o integrado en su CRM).

### Fase 4: WhatsApp (3–4 semanas)
- [ ] Configurar WhatsApp Cloud API en la app Meta.
- [ ] Flujo de verificación de números por tenant.
- [ ] Webhook y envío para WhatsApp.

### Fase 5: Publicaciones de marketing (3–4 semanas)
- [ ] Endpoint `/publish` para IG y FB.
- [ ] PublishService: posts, stories, reels.
- [ ] Opcional: cola de programación (publicar a las X hora).

### Fase 6: Robustez y operación (continuo)
- [ ] Renovación automática de tokens.
- [ ] Logs, métricas, alertas.
- [ ] Rate limiting y manejo de errores de Meta.

---

## 8. Consideraciones técnicas

| Aspecto | Recomendación |
|---------|---------------|
| **Lenguaje** | Node.js (Express/Fastify) o Python (FastAPI) — consistente con el resto del stack |
| **Base de datos** | PostgreSQL (ya usan Supabase) o añadir tabla en proyecto existente |
| **Despliegue** | Render, Railway o similar — mismo ecosistema que nexus-landing |
| **Secrets** | Meta App ID, App Secret, Verify Token en variables de entorno |
| **Webhooks** | Meta exige HTTPS; verificación con `hub.verify_token` |

---

## 9. Seguridad y cumplimiento

- [ ] Tokens cifrados en BD.
- [ ] HTTPS obligatorio.
- [ ] Rate limiting por tenant.
- [ ] Logs de auditoría (quién envió qué, cuándo).
- [ ] Política de retención de mensajes (GDPR, etc.).
- [ ] Documentar en términos de uso que los mensajes pasan por el motor.

---

## 10. Referencias

- [Meta for Developers](https://developers.facebook.com/)
- [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [Instagram Messaging API](https://developers.facebook.com/docs/messenger-platform/instagram)
- [Instagram Content Publishing](https://developers.facebook.com/docs/instagram-api/guides/content-publishing)

---

*Documento creado: febrero 2026. Revisar antes de implementar.*
