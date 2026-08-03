import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Responda clientes mais rápido — Copiloto Jurídico',
  description:
    'O atraso na resposta ao cliente vem do trabalho manual acumulado. 6 agentes de IA tiram pesquisa, petição, contrato, prazo, risco e honorários do seu caminho. Pagamento único de R$27.',
};

export default function AtendimentoPage({ searchParams }) {
  const copy = getCopy('atendimento');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} />;
}
