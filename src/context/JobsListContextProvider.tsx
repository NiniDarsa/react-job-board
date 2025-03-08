import {createContext, useMemo, useState} from "react";
import useDebounce from "../hooks/useDebounce";

import { Tlist } from "../types";
import usefetchItemsByText from "../hooks/usefetchItemsByText";


type JobsListContextProviderProp={
    children:React.ReactNode
}

type TJobsListContext={
  jobItems:Tlist[]|[]
  SliceData:Tlist[]|[]
  length:number
  searchText:string
  sortBy:string
  currentPage:number
  numberOfPages:number
  isLoading:boolean
  handleSort:(sort:"relevant"|"resent")=>void
  handlePage:(direction:"backward"|"forward")=>void
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const JobsListContext=createContext<TJobsListContext|null>(null)

const JobsListContextProvider=({children}:JobsListContextProviderProp)=>{
    const [searchText, setSearchText]=useState("")
    const [currentPage,setCurrentPage]=useState(1)
    const [sortBy, setSortBy]=useState("relevant")

//change search
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchText(e.target.value)
  }

  //debounced searchText
const debouncedSearchText=useDebounce(searchText)

//fetch data when you're typing
const {jobItems,isLoading}=usefetchItemsByText(debouncedSearchText)


//handle Sort
const handleSort=(sort:"relevant"|"resent")=>{
    setSortBy(sort)
  }
  
  //change sorting
const SortingList=useMemo(()=>[...jobItems].sort((a,b)=>{
    if(sortBy==="relevant"){
      return b.relevanceScore-a.relevanceScore
    }else{
      return a.daysAgo-b.daysAgo
    }
  }),[jobItems,sortBy])
  
  //whole length
  const length=jobItems.length
  //number of pages
  const numberOfPages=length/7
  
  //page(back and forth)
  const handlePage=(direction:"backward"|"forward")=>{
    if(direction==="forward"){
      setCurrentPage((prev)=>prev+1)
    }else{
      setCurrentPage((prev)=>prev-1)
    }
  }
  
  //slice data to see only 7 items in a page
  const SliceData=useMemo(()=>SortingList.slice((currentPage-1)*7,currentPage*7),[SortingList,currentPage])

 return(<JobsListContext.Provider value={{
   handleChange,
   jobItems,
   isLoading,
   handlePage,
   SliceData,
   length,
   handleSort,
   searchText,
   sortBy,
   currentPage,
   numberOfPages
}}>{children}</JobsListContext.Provider>)
}
export default JobsListContextProvider

