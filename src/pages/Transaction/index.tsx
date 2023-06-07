import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { Pricehighlight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionContext } from "../../context/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transaction(){
  
  const {transactions} = useContext(TransactionContext)
  
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
                {transaction.type === "outcome" && "- "}
                {priceFormatter.format(transaction.price)}
                </Pricehighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}