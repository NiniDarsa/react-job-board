import styled from "styled-components"
import BookmarkIcon from "./BookmarkIcon";
import { Tlist } from "../types";
import { Link, useLocation } from "react-router-dom";

type ListProps={
    data:Tlist[]|[]
    isLoading:boolean
}

const List=({data,isLoading}:ListProps)=>{
   
//get current id on click EACH LIST ITEM  
const {pathname}=useLocation()
const currentId=pathname.slice(1)

    return(
        <StyleList>
            {isLoading&&<div className="loader"></div>}
            {data.length>0&&data.map((item)=>{
               return(<li key={item.id} className={`${+currentId===item.id?"active":""}`}>
                      <Link to={`/${item.id}`}>
                       <span><b>{item.badgeLetters}</b></span>
                       <div className="main-text">
                         <p>{item.title}</p>
                         <p>{item.company}</p>
                       </div>
                      <div>
                        <BookmarkIcon id={item.id}/>
                        <p>{item.daysAgo}d</p>
                      </div>
                      </Link>
                   </li>)
            })}
        </StyleList>
    )
}
export default List

const StyleList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    //spinner
    .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #797979;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top:20%;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

    //
    .active{
        background-color: #cfcccc4d;
    }
    .main-text{
        flex:1;
        padding-left: 1rem;
    }
    li{
        width: 100%;
        list-style-type: none;
        padding: 0.5rem;
        cursor: pointer;
        a{
        text-decoration: none;
        color: black;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
       } 
        span{
            background-color: #e5dfdf;
            padding: .7rem .5rem;
            border-radius: .2rem;
        }
       
       &:hover{
        background-color: #cfcccc4d;
       }
    }
    @media only screen and (max-width: 800px) { 
            font-size: .5rem;
            margin-bottom: 1rem;
     }
     @media only screen and (max-width: 400px) {
        font-size: .4rem;
        margin-bottom: 2rem;
    }
`
