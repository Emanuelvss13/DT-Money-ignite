import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Transaction } from "../pages/Transaction";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}


interface TransactionContextProviderProps {
  children: ReactNode
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({children}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createTransaction = useCallback(async ({category, description, price, type}: CreateTransactionInput) => {
    const response = await api.post("transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date()
    })

    setTransactions((state) => [response.data, ...state])
  }, [])

  const fetchTransaction = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: 'createdAt',
        _order: "desc",
        q: query
      }
    })


    setTransactions(response.data);
  }, [])

  useEffect(() => {
    fetchTransaction()
  }, [fetchTransaction])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransaction,
        createTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}