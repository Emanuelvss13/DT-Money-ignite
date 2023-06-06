import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { Pricehighlight, TransactionsContainer, TransactionsTable } from "./style";

export function Transaction(){
  return (
    <>
      <Header/>
      <Summary />

      <TransactionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <Pricehighlight variant="income">
                  R$ 12.000,00
                </Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Lanche</td>
              <td>
                <Pricehighlight variant="outcome">
                  -R$ 59,00
                </Pricehighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <Pricehighlight variant="outcome">
                  R$ 12.000,00
                </Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <Pricehighlight variant="income">
                  R$ 12.000,00
                </Pricehighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}