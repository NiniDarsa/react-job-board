import styled from "styled-components"
import Search from "./Search"
import Head from "./Head"


const Header=()=>{
    return(
        <StyleHeader>
         <Head />
         <Search/>
        </StyleHeader>
    )
}
export default Header

const StyleHeader=styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  background-image: url("../public/backgroundImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media only screen and (max-width: 400px) {
     padding-bottom: 2rem;
    }
`