// src/app/[lang]/(landing)/layout.tsx
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import { getDictionary } from "@/lib/dictionaries";
import React from 'react';

interface Props {
  children: React.ReactNode,
  params: { lang: string }
}

const LandingLayout = async ({ children, params }: Props) => {
  const lang = params.lang as "en" | "es"
  const dict = await getDictionary(lang)
  return (
    <>
      <Navbar dictionary={dict.navbar}/>
      <main className="mx-auto w-full z-40 relative">
        {children}
      </main>
      <Footer dictionary={dict.footer}/>
    </>
  );
};

export default LandingLayout;