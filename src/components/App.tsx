import styled from "styled-components"
import GlobalStyle from "../style/globalStyle"
import Header from "./Header"
import MainContent from "./MainContent"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {
  return (
    <StyleApp>
     <GlobalStyle/>
       <Header/>
       <MainContent />
       <ReactQueryDevtools initialIsOpen={false} />
    </StyleApp>
  )
}

export default App

const StyleApp=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`