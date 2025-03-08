import styled from "styled-components"
import { IoMdTime } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import BookmarkIcon from "./BookmarkIcon";
import usefetchItem from "../hooks/usefetchItem";
import { useParams } from "react-router-dom";


const Information=()=>{
//get current id on click EACH LIST ITEM  
const {id:currentId}=useParams()
//get data for each id
const {jobItem, isLoading}=usefetchItem(Number(currentId))

    return(
        <StyleInfo>
       {isLoading&&<div className="loading">Loading....</div>}

       {jobItem&&!isLoading&&
         <div className="whole-information">
            <div className="header">
              <img  src={jobItem.coverImgURL}/>
               <p className="apply">APPLY</p>
               <p className="short-heading">{jobItem.badgeLetters}</p>
               <span className="titleContainer">
                  <h1>{jobItem.title}</h1>
                  <p><i>{jobItem.company}</i></p>
               </span>
            </div>

            <div className="main_content">
              <div className="about">
                <p >{jobItem.daysAgo}d</p>
                <BookmarkIcon id={jobItem.id}/>
                <p>{jobItem.description}</p>
              </div>

             <div className="job-description">
                <div>
                   <span> <IoMdTime /></span>
                    <p>{jobItem.duration}</p>
                </div>

                <div>
                   <span> <FaRegMoneyBillAlt /></span>
                    <p>{jobItem.salary}</p>
                </div>

                <div>
                   <span> <CiLocationOn /></span>
                    <p>{jobItem.location}</p>
                </div>
            </div>

            <div className="qualifications">
                <div>
                    <h2>Qualifications</h2>
                    <p>Other qualifications may apply</p>
                </div>
                <ul>
                   {jobItem.qualifications.map((qualification:string)=>{
                    return <li key={qualification}>{qualification}</li>
                   })}
                </ul>
            </div>

            <div className="reviews">
                <div>
                    <h2>Company Reviews</h2>
                    <p>Resent things people are saying</p>
                </div>

                <ul>
                {jobItem.reviews.map((review:string)=>{
                    return <li key={review}>{review}</li>
                   })}
                </ul>

            </div>
            <p className="url"><i>{jobItem.companyURL}</i></p>
        </div>
         </div>
}
        </StyleInfo>
    )
}
export default Information

const StyleInfo=styled.div`
    flex:5;
    display: flex;
    flex-direction: column;
    h2{
        color: #292828;
    }
  .loading{
      margin: auto;
   }

.whole-information{
    display: flex;
    flex-direction: column;
    height: 100%;
   
   .header{
    flex:1;
    color: aliceblue;
    position: relative;
    padding: 1rem;
    
    img{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media only screen and (max-width: 650px) {
        height: 150%;
      }   
    }

    .titleContainer{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-10%);
        
        @media only screen and (max-width: 1300px) {
        font-size: .4rem;
        }
    }
   .apply{
        position: absolute;
        top:.4rem;
        right: .4rem;
        background-color: #3a84c4;
        padding: 0.2rem;
    }

   .short-heading{
    position: absolute;
    left: 2rem;
    bottom: -10%;
    background-color: #ffb700;
    color: black;
    font-weight: 800;
    padding: 1rem .6rem;

    @media only screen and (max-width: 1000px) {
       top:0;
       bottom: 0;
       left: 0;
        }
    }
   }

 .main_content{
    flex:4;

    .about{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: .8rem;
        p{
            padding-right: .5rem;
            padding-left: .5rem;
        }
    }

    .job-description{
        display: flex;
        justify-content: space-evenly;
        div{
            display: flex;
            align-items: center;
            span{
                width: 1.2rem;
                height: 1.2rem;
                background-color: #dad7d7ab;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: .1rem;
            }
        }
    }

    .qualifications,.reviews{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        div{
            flex: 1;
            margin-left: .5rem;
        }
        ul{
            flex: 2;
            display: flex;
            padding-left: 2rem;
            list-style-type: none;
            flex-wrap: wrap;
            li{
              margin-right: .2rem;
              margin-top: .4rem;
              background-color: #dad7d7ab;
              padding: .1rem .4rem;
            }
        }
    }

    .reviews{
        ul{
            li{
                background-color: transparent;
                position: relative;
            
                &::before{
                    content:'"';
                    font-size: 2.2rem;
                    color: #82818155;
                    position: absolute;
                    top:-50%;
                    left: 0; 
                }
            }
        }
    }
   }
   }
   .url{
    padding: 2rem;
    text-align: end;
   }
   @media only screen and (max-width: 400px) {
       overflow-y: scroll;
    }
`
