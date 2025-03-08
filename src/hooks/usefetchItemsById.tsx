import { fetchData } from "../functions/fetchFunction"
import { TlistExpended } from "../types"
import useBookMarkContext from "./useBookMarkContext"
import { useQueries } from "@tanstack/react-query"


const usefetchItemsById=()=>{

    const{bookMarkIds}=useBookMarkContext()
  
    const combinedQueries = useQueries({
        queries: bookMarkIds.map((id) => ({
          queryKey: ['jobitem', id],
          // queryFn:id?()=>{return fetchData(id)}:undefined,
          queryFn:()=>{return fetchData(id)},
          enabled:Boolean(id),
          staleTime: 1000*60*60, 
          refetchOnWindowFocus: false 
        })),
       
        combine: (results) => {
            return {
            // data: results.map((result) => result.data).filter((item): item is TlistExpended=>item!==undefined),
            data: results.map((result) => result.data).filter((item)=>item!==undefined) as TlistExpended[],
            pending: results.some((result) => result.isLoading),
          }
        },
      })
    
    const jobItemsById=combinedQueries.data
    const isLoading=combinedQueries.pending
    return {jobItemsById,isLoading}
}
export default usefetchItemsById