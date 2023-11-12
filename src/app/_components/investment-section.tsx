import { Check } from 'lucide-react';
import Enrollment from './enrollment';
import PreEnrollment from './pre-enrollment';

function InvestmentSection() {
  return (
    <section
      id='investment'
      className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Investimento
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Faça o melhor investimento da sua carreira. Veja os benefícios e
          vantagens de ser um aluno do curso Full-stack Next.js 14.
        </p>
      </div>

      <div className='grid w-full border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>O que está incluído</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Aulas gravadas para assistir
              quando quiser
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Aulas ao vivo
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> 15 dias de garantia
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Acesso ao código fonte do
              projeto
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Grupo exclusivo no WhatsApp
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Suporte via WhatsApp
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div className='space-y-2'>
            <h4 className='font-bold'>
              12x
              <br />
              R$<span className='text-6xl font-bold text-primary'>97,61</span>
            </h4>
            <h4 className='font-bold text-xl'>ou R$ 978,00 à vista</h4>
          </div>
          <PreEnrollment />
          {/* <Enrollment /> */}
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
