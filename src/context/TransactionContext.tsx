import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionContextProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({children}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string){
    const response = await api.get("transactions", {
      params: {
        q: query
      }
    })


    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}