import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  // Monorepo: raíz de trazado = directorio del frontend (evita warning de múltiples lockfiles)
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
