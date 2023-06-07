import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { Pricehighlight, TransactionsContainer, TransactionsTable } from "./style";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transaction(){
  
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransaction(){
    const response = await fetch("http://localhost:3333/transactions")

    const data = await response.json()

    setTransactions(data);
  }

  useEffect(() => {
    loadTransaction()
  }, [])
  
  return (
    <>
      <Header/>
      <Summary />

      <TransactionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions && transactions.map(transaction => (
              <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <Pricehighlight variant={transaction.type}>
                {transaction.price}
                </Pricehighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}