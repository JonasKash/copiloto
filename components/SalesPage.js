import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import FifteenRule from '@/components/FifteenRule';
import AreaBlock from '@/components/AreaBlock';
import ImpostoInvisivel from '@/components/ImpostoInvisivel';
import Checklist from '@/components/Checklist';
import CopilotoIntro from '@/components/CopilotoIntro';
import Processos from '@/components/Processos';
import CompraReal from '@/components/CompraReal';
import Trifecta from '@/components/Trifecta';
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
      <AreaBlock area={area} />
      <ImpostoInvisivel />
      <Checklist />
      <CopilotoIntro />
      <Processos copy={copy} />
      <CompraReal />
      <Trifecta />
      <Mentor />
      <Pricing />
      <Faq />
      <FinalCta />
      <SecureStrip />
      <Footer />
      <ScrollReveal />
    </>
  );
}
