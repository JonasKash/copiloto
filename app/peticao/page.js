import SalesPage from '@/components/SalesPage';
import { getCopy } from '@/content/copiloto';
import { personalizeSub } from '@/lib/personalize';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Petição pronta em minutos — Copiloto Jurídico',
  description:
    'Chega de começar cada petição do zero. O Redator de Petições monta a peça com memória do processo, mais 5 agentes pra pesquisa, contrato, prazo, risco e honorários. Pagamento único de R$27.',
};

export default function PeticaoPage({ searchParams }) {
  const copy = getCopy('peticao');
  const personalized = {
    ...copy,
    hero: { ...copy.hero, sub: personalizeSub(copy.hero.sub, searchParams) },
  };
  return <SalesPage copy={personalized} />;
}
