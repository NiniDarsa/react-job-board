import styled from "styled-components"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import useJobsListContext from "../hooks/useJobsListContext";


const Page=()=>{
    const {currentPage,handlePage,length,numberOfPages}=useJobsListContext()
 return(
    <StylePages>
        {currentPage>1&&<button onClick={()=>handlePage("backward")}>< IoIosArrowRoundBack />{currentPage-1}</button>}
        {length>0&&numberOfPages>currentPage&&<button onClick={()=>handlePage("forward")} className="right">{currentPage+1}<IoIosArrowRoundForward /></button>}
    </StylePages>

 )
}
export default Page
const StylePages=styled.div`
    position: absolute;
    bottom: 2%;
    width: 100%;
    padding: .4rem;
    display: flex;
    justify-content: space-between;
   
    button{
        border:1px solid gray;
        background-color: #E5DFDF;
        border-radius: 1rem;
        padding: 0rem .8rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        @media only screen and (max-width: 800px) {
            padding: 0.1rem;
            font-size: .7rem;
        }

        svg{
            margin:0rem .2rem;
        }
    }
    .right {
       margin-left: auto;
      }

`