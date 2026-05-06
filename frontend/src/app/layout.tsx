import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";

export const metadata: Metadata = {
  title: "Bridge2Work - Inteligencia Laboral",
  description: "Conecta empresas, universidades y estudiantes mediante inteligencia de datos laborales.",
  keywords: "empleos, universidad, empresa, habilidades, carrera, México",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
