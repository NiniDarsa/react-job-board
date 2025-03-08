import styled from "styled-components"
import SideBar from "./SideBar"
import Information from "./Information"
import { Route, Routes } from "react-router-dom"
import Initial from "./Initial"



const MainContent=()=>{
    return(
        <StyleMain>
            <main>
                <SideBar/>
                <Routes>
                  <Route path="/" element={<Initial/>}/>
                  <Route path="/:id" element={<Information/>}/>
                </Routes>
            </main>
        </StyleMain>
    )
}
export default MainContent

const StyleMain=styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
    z-index: 10;
    
    main{
        width: 54%;
        height: 95%;
        background-color: #eae7e7;
        margin-top: -4%;
        display: flex;
        

@media only screen and (max-width: 1000px) {
    width: 80%;
 
}
@media only screen and (max-width: 550px) {
    width: 100%;
 
}
@media only screen and (max-width: 400px) {
        flex-direction: column;
        font-size: .4rem;
    }
 }   
`