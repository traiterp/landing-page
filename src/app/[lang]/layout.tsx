// src/app/[lang]/layout.tsx
import "@/styles/globals.css";
import { cn } from "@/lib";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
  params: { lang: 'en' | 'es' }; // Tipado estricto para lang
}

export default async function RootLayout({ // <-- Asegúrate de que este layout sea async
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
          base.variable,
          heading.variable,
          subheading.variable,
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
      </body>
    </html>
  );
}