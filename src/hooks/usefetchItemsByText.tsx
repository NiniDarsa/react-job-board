import { Tlist } from "../types"
import { useQuery } from "@tanstack/react-query";

const usefetchItemsByText=(debouncedSearchText:string)=>{
  
  const fetchData=async(debouncedSearchText:string):Promise<Tlist[]>=>{ 
    return typeof debouncedSearchText === undefined
     ? Promise.reject(new Error('Invalid id')):
     fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${debouncedSearchText}`)
     .then(res=> res.json()).then((data)=>data.jobItems)
   }

  const{data,isLoading}=useQuery({
    queryKey:["jobItems",debouncedSearchText],
    // queryFn:debouncedSearchText?()=>{return fetchData(debouncedSearchText)}:undefined,
    queryFn:()=>{return fetchData(debouncedSearchText)},
    enabled:!!debouncedSearchText,
    staleTime: 1000*60*60,
   
  })

  const jobItems=data||[]
  return {jobItems, isLoading}
}
export default usefetchItemsByText