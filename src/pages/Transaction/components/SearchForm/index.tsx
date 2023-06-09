import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z  from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../../context/TransactionContext";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function SearchForm() {

  const { fetchTransaction } = useContext(TransactionContext)
  
  const  {register, handleSubmit, formState: { isSubmitting }} = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })
  
  async function handleSearchForm(data: SearchFormType){
    console.log(data.query);
    
    await fetchTransaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>

      <input 
        type="text" 
        placeholder="Busque por transações..."
        {...register("query")} 
      />

      <button 
        type="submit"
        disabled={isSubmitting}
      >
        <MagnifyingGlass/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}