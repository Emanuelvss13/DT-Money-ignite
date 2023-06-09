import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionStatusContainer, TransactionTypeButton } from './style';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type newTransactionType = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {

  const {control, register, handleSubmit} = useForm<newTransactionType>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income',
    }
  })

  function handleCreateNewTransaction(data: newTransactionType ){
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <X size={32} />
          </CloseButton>

          <Dialog.Title>Nova Transação</Dialog.Title>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
              type="text" 
              placeholder='Descrição' 
              required
              {...register('description')}
              />

            <input 
              type="text" 
              placeholder='Preço' 
              required
              {...register('price', { valueAsNumber: true })}
              />

            <input 
              type="text" 
              placeholder='Categoria' 
              required
              {...register('category')}
              />

            <Controller
              control={control}
              name='type'
              render={({field}) => {
                return (
                  <TransactionStatusContainer onValueChange={field.onChange} value={field.value}>
                    <TransactionTypeButton type='button' variant="income" value="income">
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton type='button' variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionStatusContainer> 
                )
              }}
            />

            <button type="submit">Cadastrar</button>
          </form>

        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}