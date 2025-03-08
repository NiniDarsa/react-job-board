import { useEffect, useState } from "react"

const useDebounce=(searchText:string)=>{
    const [debouncedSearchText, setDeboundedSearchText]=useState("")
     //debounced searchText
 useEffect(()=>{
    const timer=setTimeout(()=>{
       setDeboundedSearchText(searchText)
    },400)
  
    return ()=>{
      clearTimeout(timer)
    }
   },[searchText])

   return debouncedSearchText
}
export default useDebounce