import Wrapper from "@/components/global/wrapper"
import Companies from "@/components/marketing/companies"
import CTA from "@/components/marketing/cta"
import Features from "@/components/marketing/features"
import Hero from "@/components/marketing/hero"
import Pricing from "@/components/marketing/pricing"
import { getDictionary } from "@/lib/dictionaries"
import { Metadata } from "next"

interface HomePageProps {
  params: { lang: string }
}

export const metadata: Metadata = {
    title: 'Noodle ERP',
    description: 'El ERP que tu PYME Necesita',
}

const HomePage = async ({ params }: HomePageProps) => {
  const lang = params.lang as "en" | "es"
  const dict = await getDictionary(lang)

  return (
    <Wrapper className="py-20 relative">
      <Hero dictionary={dict.hero} />
      <Companies dictionary={dict.companies} />
      <Features dictionary={dict.features} />
      <Pricing dictionary={dict.pricing} />
      <CTA dictionary={dict.cta} />
    </Wrapper>
  )
}

export default HomePage
