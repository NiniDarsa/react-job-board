import { FaSortAmountDown } from "react-icons/fa";
import styled from "styled-components";
import useJobsListContext from "../hooks/useJobsListContext";


const Nav=()=>{
    const {length,handleSort,sortBy}=useJobsListContext()
    return(
        <StyleNav>
            <span><b>{length}</b> results</span>
            <div>
                <FaSortAmountDown />
                <button onClick={()=>handleSort("relevant")}className={`btn ${sortBy==="relevant"?"active":""}`}>relevant</button>
                <button onClick={()=>handleSort("resent")}className={`btn ${sortBy==="resent"?"active":""}`}>resent</button>
            </div>
        </StyleNav>
    )
}
export default Nav

const StyleNav=styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .6rem;
    border-bottom: 1px solid #a3a1a1;
    span{
        flex: 1;  
    }
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
    }
    .btn{
        border: none;
        padding: .2rem;
        background-color: transparent;
        cursor: pointer;
        z-index: 10;
      &:first-of-type{
        border-radius: .2rem;
     }
    }
    .active{
        background-color: #dad7d7ab;
    }
`