import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Transaction } from "./pages/Transaction";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
      <Transaction /> 
    </ThemeProvider>
  )
}