import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'IA que funciona de verdade — Copiloto Jurídico',
  description:
    'A maioria das tentativas de usar IA no escritório falha porque tenta automatizar antes de ter processo. Os 6 processos do Escritório Processual aplicam IA na ordem certa. Pagamento único de R$27.',
};

export default function IAPage({ searchParams }) {
  const copy = getCopy('ia');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} area={searchParams?.area} />;
}
