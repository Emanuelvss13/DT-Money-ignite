import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './style';
import { X } from 'phosphor-react';

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


            <button type="submit">Cadastrar</button>
          </form>

        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}