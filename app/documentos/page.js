import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Pare de perder documento — Copiloto Jurídico',
  description:
    'Documento perdido é sintoma de processo que não existe. Os 6 processos do Escritório Processual organizam pesquisa, petição, contrato, prazo, risco e honorários. Pagamento único de R$27.',
};

export default function DocumentosPage({ searchParams }) {
  const copy = getCopy('documentos');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} area={searchParams?.area} />;
}
