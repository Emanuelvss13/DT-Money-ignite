import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z  from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function SearchForm() {
  
  const  {register, handleSubmit, formState: { isSubmitting }} = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })
  
  function handleSearchForm(data: SearchFormType){
    console.log(data);
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