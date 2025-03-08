import styled from "styled-components"
import List from "./List"
import useBookMarkContext from "../hooks/useBookMarkContext"
import usefetchItemsById from "../hooks/usefetchItemsById"
import { forwardRef } from "react"


const BookMarkContainer=forwardRef<HTMLDivElement>(function BookMarkContainer(_,ref){
 const {jobItemsById,isLoading}=usefetchItemsById()
 const {isOpen}=useBookMarkContext()

 return(
    <StyleContainer>
     {isOpen&&<div ref={ref} className="container_bookMark">
        <List data={jobItemsById} isLoading={isLoading}/>
      </div>
    }
    </StyleContainer>
 )
})
export default BookMarkContainer

const StyleContainer=styled.div`
.container_bookMark{
    position: absolute;
    top:23%;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;
    height: 52%;
    z-index: 2;
    background-color: aliceblue;
    overflow-y: scroll;
    overflow-x: hidden;
    
    transition: all .2 ease;
    @media only screen and (max-width: 400px) {
     width: 100%;
     height: 100%;
    }
} 

    
`