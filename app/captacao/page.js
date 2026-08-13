import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cresça sem virar caos — Copiloto Jurídico',
  description:
    'Captar mais cliente sem organizar antes só aumenta a fila de espera. Os 6 processos do Escritório Processual preparam a operação pra aguentar o crescimento. Pagamento único de R$27.',
};

export default function CaptacaoPage({ searchParams }) {
  const copy = getCopy('captacao');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} area={searchParams?.area} />;
}
