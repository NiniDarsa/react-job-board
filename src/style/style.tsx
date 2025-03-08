import styled from "styled-components";

export const StyleBtn=styled.button`
    background-color: transparent;
    border: none;
    &:before {
       content: "";
       display: block;
       position: absolute;
       background-color: transparent;
       cursor: pointer;
       width: 2rem;
       height: 2rem;
        }
   `