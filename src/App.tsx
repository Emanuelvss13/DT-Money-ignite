import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Transaction } from "./pages/Transaction";
import { TransactionContextProvider } from "./context/TransactionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
      <TransactionContextProvider>
        <Transaction /> 
      </TransactionContextProvider>
    </ThemeProvider>
  )
}