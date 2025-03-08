import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import styled from "styled-components";
import useBookMarkContext from "../hooks/useBookMarkContext";


const BookMarks=()=>{
    const {handleBookMarkOpen}=useBookMarkContext()
    const {isOpen}=useBookMarkContext()
    return(
       <StyleBookMarks className="BookMarks" onClick={handleBookMarkOpen}>
        <p>bookmarks</p>
        {isOpen?<FaCircleArrowUp />:<FaCircleArrowDown />}
       </StyleBookMarks>
    )
}
export default BookMarks

const StyleBookMarks=styled.div`
display: flex;
align-items: center;
margin-left: 2rem;
cursor: pointer;
p{
    margin-right: .2rem;
}
  
`