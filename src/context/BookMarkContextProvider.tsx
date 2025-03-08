import {createContext,  useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type BookMarkContextProviderProp={
    children:React.ReactNode
}

type TBookMarkContext={
   bookMarkIds:number[]
   isOpen:boolean
   handleBookMarkIds:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number)=>void
   handleBookMarkOpen:(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
   setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const BookMarkContext=createContext<TBookMarkContext|null>(null)


const BookMarkContextProvider=({children}:BookMarkContextProviderProp)=>{
    const [bookMarkIds, setBookMarkIds]=useLocalStorage<number[]>("bookMarkIds",[])

    const [isOpen, setIsOpen]=useState(false)
    //handle bookmarkIDS
const handleBookMarkIds=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number)=>{
    e.stopPropagation()
    e.preventDefault()
    if(bookMarkIds.includes(id)){
        return setBookMarkIds(bookMarkIds.filter((item)=>{
          return item!==id
      })); 
    }else{
      return setBookMarkIds([...bookMarkIds,id])
    }
  }
//handle bookMarkOpen
const handleBookMarkOpen=(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
  e.stopPropagation()
  setIsOpen(!isOpen)
}

 return(<BookMarkContext.Provider value={{
    bookMarkIds,
    handleBookMarkIds,
    handleBookMarkOpen,
    isOpen,
    setIsOpen
   
}}>{children}</BookMarkContext.Provider>)
}
export default BookMarkContextProvider

