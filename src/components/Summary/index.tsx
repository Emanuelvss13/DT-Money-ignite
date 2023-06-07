import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/UseSummary";

export function Summary(){

  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E"/>
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFFFFF"/>
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}