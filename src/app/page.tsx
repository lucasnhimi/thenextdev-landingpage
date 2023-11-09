import Image from 'next/image';

import IntroSection from './_components/intro-section';
import AboutSection from './_components/about-section';
import FeatureSection from './_components/feature-section';
import InvestmentSection from './_components/investment-section';
import FaqSection from './_components/faq-section';

export default function Home() {
  return (
    <>
      <div className='fixed h-12 p-4 flex justify-center items-center group bg-gradient-to-r from-primary to-secondary w-full z-10'>
        <p className='text-white'>
          Utilize o cupom{' '}
          <span className='font-mono font-bold'>COMUNIDADETND</span> e ganhe 50%
          de desconto. Valor à vista de{' '}
          <span className='font-mono font-bold'>
            R$ 489,00 ou 12x de R$ 48,81
          </span>{' '}
          .
        </p>
      </div>
      <main className=''>
        <IntroSection />
        <AboutSection />
        <FeatureSection />
        <InvestmentSection />
        <FaqSection />
      </main>
    </>
  );
}
