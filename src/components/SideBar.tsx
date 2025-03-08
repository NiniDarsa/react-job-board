import styled from "styled-components"
import Nav from "./Nav"
import List from "./List"
import Page from "./Page"
import useJobsListContext from "../hooks/useJobsListContext"


const SideBar=()=>{
     const {SliceData,isLoading}=useJobsListContext()
    return(
        <StyleSideBar>
           <Nav/>
           <List data={SliceData} isLoading={isLoading}/>
           <Page/>
        </StyleSideBar>
    )
}
export default SideBar

const StyleSideBar=styled.div`
    background-color: aliceblue;
    flex: 2;
    position: relative;
`