import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Copiloto Jurídico — 6 processos do Escritório Processual',
  description:
    'Pesquisa, petição, contrato, prazo, risco e honorários, implantados como processo, não como tarefa manual. Pagamento único de R$27.',
};

export default function SeisAgentesPage({ searchParams }) {
  const copy = getCopy('default');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} area={searchParams?.area} />;
}
