import { TlistExpended } from "../types"

export const fetchData=async(id:number):Promise<TlistExpended>=>{
    return typeof id === undefined
    ? Promise.reject(new Error('Invalid id')):
    fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data/${id}`)
    .then(res=> res.json()).then((data)=>data.jobItem)
      }
      
  