import { MdOutlineWorkOutline } from "react-icons/md";
import styled from "styled-components";

const Logo=()=>{
    
    return(
       <StyleLogo>
        <MdOutlineWorkOutline />
        <a href="/">rmt<b><i>DEV</i></b></a>
       </StyleLogo>
    )
}
export default Logo
const StyleLogo=styled.div`
display: flex;
align-items: center;
margin-right: 2rem;
a{
    margin-left: .2rem;
    text-decoration: none;
    color: aliceblue;
}
  
`

