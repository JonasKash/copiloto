import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import FifteenRule from '@/components/FifteenRule';
import Niveis from '@/components/Niveis';
import AreaBlock from '@/components/AreaBlock';
import ImpostoInvisivel from '@/components/ImpostoInvisivel';
import CrescerVsTrabalhar from '@/components/CrescerVsTrabalhar';
import Metodo from '@/components/Metodo';
import Checklist from '@/components/Checklist';
import CopilotoIntro from '@/components/CopilotoIntro';
import Agents from '@/components/Agents';
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
      <Niveis />
      <AreaBlock area={area} />
      <ImpostoInvisivel />
      <CrescerVsTrabalhar />
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
