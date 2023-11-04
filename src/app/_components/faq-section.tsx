import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FaqSection() {
  return (
    <section
      id='faq'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          FAQ
        </h2>
      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
            <AccordionContent className='text-left'>
              <p>
                Se estiver no período de matrículas abertas, basta clicar no
                botão <span className='font-bold'>Matricular</span> que você
                será redirecionado para uma página de compras da Hotmart. Feito
                isso, você poderá realizar as aulas através da própria
                plataforma da Hotmart.
              </p>
              <p>
                Caso o período de matrículas esteja encerrado, você poderá
                clicar no botão{' '}
                <span className='font-bold'>Lista de Espera</span> e preencher o
                formulário para ser avisado quando as matrículas forem
                reabertas.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Para quem é este curso?</AccordionTrigger>
            <AccordionContent className='text-left'>
              <p>
                Para quem possui conhecimentos básicos de HTML, CSS e JavaScript
              </p>
              <p>Para quem quer aprender desenvolver uma aplicação do zero</p>
              <p>
                Para quem quer estar atualizado com os conhecimentos que as
                grandes empresas procuram
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Por quanto tempo terei acesso ao curso?
            </AccordionTrigger>
            <AccordionContent className='text-left'>
              Você terá 1 ano após a data da compra.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>O Curso irá emitir certificado?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Sim. Você terá acesso ao certificado após concluir o curso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Como funciona o Suporte?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Você terá acesso exclusivo ao grupo do WhatsApp, onde eu irei
              tirar suas dúvidas por lá.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Matriculando no curso terei acesso imediato às aulas?
            </AccordionTrigger>
            <AccordionContent className='text-left'>
              As aulas gravadas serão disponibilizadas a partir do dia 04 de
              Dezembro de 2023.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-7'>
            <AccordionTrigger>Como funciona o reembolso?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Após 15 dias você poderá solicitar o reembolso de 100% do valor
              através da plataforma da Hotmart.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
