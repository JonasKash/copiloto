import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Copiloto Jurídico — 6 agentes de IA para o seu escritório',
  description:
    'Pesquisa de jurisprudência, redação de petições, revisão de contratos, controle de prazos, jurimetria e cálculo de honorários. Pagamento único de R$27.',
};

export default function SeisAgentesPage({ searchParams }) {
  const copy = getCopy('default');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} area={searchParams?.area} />;
}
