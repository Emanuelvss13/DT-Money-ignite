import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionStatusContainer, TransactionTypeButton } from './style';
import { ArrowCircleDown, ArrowCircleUp, ArrowFatUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <X size={32} />
          </CloseButton>

          <Dialog.Title>Nova Transação</Dialog.Title>

          <form action="">
            <input type="text" placeholder='Descrição' required/>
            <input type="text" placeholder='Preço' required/>
            <input type="text" placeholder='Categoria' required/>

            <TransactionStatusContainer>
              <TransactionTypeButton type='button' variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
              </TransactionTypeButton>

              <TransactionTypeButton type='button' variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </TransactionTypeButton>
            </TransactionStatusContainer>

            <button type="submit">Cadastrar</button>
          </form>

        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}