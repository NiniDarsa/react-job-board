import { useEffect, useState } from "react"

const getFromStorage=<T,>(key:string,initial:T)=>{
    let data=localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }else if(typeof initial==="function"){
      return initial()
    }else{
        return initial
    }
}

const useLocalStorage=<T,>(key:string,initial:T):[T, React.Dispatch<React.SetStateAction<T>>]=>{
//    const [value,setValue]=useState(()=>{return JSON.parse(localStorage.getItem(key)||JSON.stringify(initial)) })  
  const[value,setValue]=useState(()=>{
        return getFromStorage(key,initial)
  })
   useEffect(()=>{
     localStorage.setItem(key,JSON.stringify(value))
   },[value,key])
   
   return [value,setValue] as const;
}
export default useLocalStorage