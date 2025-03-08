import styled from "styled-components"


const Initial=()=>{
   
  return(<StyleText className="text">
          <h2>What are you looking for?</h2>
          <p>Start searching...</p>
        </StyleText>
 
  )
}
export default Initial

const StyleText=styled.div`
    flex: 4;
    text-align: center;
    margin: auto; 
`