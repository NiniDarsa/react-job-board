import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import styled from "styled-components"
import useBookMarkContext from "../hooks/useBookMarkContext";
import { StyleBtn } from "../style/style";



type BookmarkIconProps={
    id:number 
}

const BookmarkIcon=({id}:BookmarkIconProps)=>{
   const{ bookMarkIds, handleBookMarkIds}=useBookMarkContext()
  
   return( <StyleButton onClick={(e)=>handleBookMarkIds(e,id)}>
      {bookMarkIds&&bookMarkIds.includes(id)?<IoMdBookmark />:<CiBookmark />}
    </StyleButton> )
}
export default BookmarkIcon

const StyleButton=styled(StyleBtn)``
