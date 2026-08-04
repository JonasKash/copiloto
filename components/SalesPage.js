import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import FifteenRule from '@/components/FifteenRule';
import Perfis from '@/components/Perfis';
import AreaBlock from '@/components/AreaBlock';
import Metodo from '@/components/Metodo';
import Checklist from '@/components/Checklist';
import CopilotoIntro from '@/components/CopilotoIntro';
import Trifecta from '@/components/Trifecta';
import Agents from '@/components/Agents';
import Mentor from '@/components/Mentor';
import Faq from '@/components/Faq';
import Pricing from '@/components/Pricing';
import FinalCta from '@/components/FinalCta';
import SecureStrip from '@/components/SecureStrip';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function SalesPage({ copy, area }) {
  return (
    <>
      <Nav />
      <Hero copy={copy} />
      <ProofBar />
      <FifteenRule />
      <Perfis />
      <AreaBlock area={area} />
      <Metodo />
      <Checklist />
      <CopilotoIntro />
      <Agents />
      <Trifecta />
      <Mentor />
      <Faq />
      <Pricing />
      <FinalCta />
      <SecureStrip />
      <Footer />
      <ScrollReveal />
    </>
  );
}
