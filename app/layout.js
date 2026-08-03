import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://copilotojuridico.com.br'),
  title: 'Copiloto Jurídico — 6 agentes de IA para o seu escritório',
  description:
    'Pesquisa de jurisprudência, redação de petições, revisão de contratos, controle de prazos, jurimetria e cálculo de honorários. Pagamento único de R$27, supervisionado pelo Dr. Wladmir Bonadio Filho (OAB/SP 398.640).',
  openGraph: {
    title: 'Copiloto Jurídico — 6 agentes de IA para o seu escritório',
    description:
      'O escritório que você monta sozinho, com 6 agentes de IA fazendo o trabalho repetitivo por você.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
