'use client';
import { track } from '@vercel/analytics';
import InputMask from 'react-input-mask';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Confetti from 'react-dom-confetti';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { saveLead } from '../actions';

const formScheme = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve conter ao menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phoneNumber: z
    .string()
    .min(15, { message: 'Telefone não é válido.' })
    .refine(
      (value) => {
        // Aqui você pode colocar a lógica de validação desejada para o número de telefone
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(value);
      },
      { message: 'Número de telefone inválido' }
    ),
});

function PreEnrollment() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const [isCompleted, setCompleted] = useState(false);

  const onSubmit = async (values: z.infer<typeof formScheme>) => {
    setCompleted(true);
    await saveLead({
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });
    track('pre-enrollment', { location: 'save' });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='default'
          size='lg'
          onClick={() => {
            track('pre-enrollment', { location: 'investment' });
          }}
          className='text-md bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
        >
          Lista de espera
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w[425px]'>
        <Confetti
          active={isCompleted}
          config={{
            spread: 90,
            elementCount: 200,
          }}
        />
        {isCompleted ? (
          <>
            <DialogHeader>
              <DialogTitle>Parabéns! 🎉</DialogTitle>
              <DialogDescription>
                Suas informações foram enviadas para lista de espera. Aguarde
                que entraremos em contato.
              </DialogDescription>
            </DialogHeader>
            <DialogClose>
              <Button
                variant='outline'
                onClick={() => {
                  setCompleted(false);
                  form.reset();
                }}
              >
                Fechar
              </Button>
            </DialogClose>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Entrar para lista de espera</DialogTitle>
              <DialogDescription>
                Informe aqui seu email para ser notificado quando abrirá uma
                nova turma para o curso The Next Dev - Full-stack Next.js 14.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder='Nome...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder='Seu melhor e-mail...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <InputMask
                          className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                          mask='(99) 99999-9999'
                          placeholder='(00) 00000-0000'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Enviar</Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PreEnrollment;
