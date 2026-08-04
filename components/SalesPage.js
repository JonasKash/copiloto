import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import FifteenRule from '@/components/FifteenRule';
import Enemy from '@/components/Enemy';
import Metodo from '@/components/Metodo';
import Trifecta from '@/components/Trifecta';
import Agents from '@/components/Agents';
import Mentor from '@/components/Mentor';
import WhoFor from '@/components/WhoFor';
import Faq from '@/components/Faq';
import Pricing from '@/components/Pricing';
import FinalCta from '@/components/FinalCta';
import SecureStrip from '@/components/SecureStrip';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function SalesPage({ copy }) {
  return (
    <>
      <Nav />
      <Hero copy={copy} />
      <ProofBar />
      <FifteenRule />
      <Enemy copy={copy} />
      <Metodo />
      <Trifecta />
      <Agents />
      <Mentor />
      <WhoFor />
      <Faq />
      <Pricing />
      <FinalCta />
      <SecureStrip />
      <Footer />
      <ScrollReveal />
    </>
  );
}
