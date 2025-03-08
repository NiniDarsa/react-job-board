import { useContext } from "react"
import { BookMarkContext } from "../context/BookMarkContextProvider"


const useBookMarkContext=()=>{
const context=useContext(BookMarkContext)
 if(!context){
  throw new Error("useBookMarkContext must be used within a BookMarkContextProvider")
 }
 return context
}
export default useBookMarkContext