import {useQuery } from "@tanstack/react-query";
import { fetchData } from "../functions/fetchFunction";


const usefetchItem=(currentId:number|undefined)=>{
 
  const{data,isLoading}=useQuery({
  queryKey:["jobitem",currentId],
  queryFn:currentId?()=>{return fetchData(currentId)}:undefined,
  enabled:Boolean(currentId),
  staleTime: 1000*60*60,  
  refetchOnWindowFocus: false 
})

  const jobItem=data
  return {jobItem,isLoading} as const
}
export default usefetchItem