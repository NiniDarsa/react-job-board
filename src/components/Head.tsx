import styled from "styled-components"
import Logo from "./Logo"
import BookMarks from "./BookMarks"
import BookMarkContainer from "./BookMarkContainer"

import useHandleClickOutside from "../hooks/useHandleClickOutside"
import useBookMarkContext from "../hooks/useBookMarkContext"

const Head=()=>{
  //clicking outside to close bookmark container
  const{setIsOpen}=useBookMarkContext()
  const containerRef=useHandleClickOutside(setIsOpen)  
    return(
        <StyleHead>
           <Logo/>
           <p>|</p>
           <BookMarks/>
           <BookMarkContainer ref={containerRef}/>
        </StyleHead>
    )
}
export default Head

const StyleHead=styled.div`
  flex: 1;
  display: flex;
  font-size: 1rem;
  color: aliceblue;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px) {
       font-size: .5rem;
    }
`