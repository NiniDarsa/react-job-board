import { useContext } from "react"
import { JobsListContext } from "../context/JobsListContextProvider"



const useJobsListContext=()=>{
const context=useContext(JobsListContext)
 if(!context){
  throw new Error("useJobsListContext must be used within a JobsListContextProvider")
 }
 return context
}
export default useJobsListContext