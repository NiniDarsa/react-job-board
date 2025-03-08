import { useEffect, useRef } from "react"

const useHandleClickOutside=(setIsOpen:React.Dispatch<React.SetStateAction<boolean>>)=>{
      const containerRef=useRef<HTMLDivElement>(null)
        useEffect(()=>{
          const handleClick=(e: MouseEvent | TouchEvent)=>{ 
                if(containerRef.current && !containerRef.current.contains(e.target as Node)){
                      setIsOpen(false)
                   }}
            // if(e.target instanceof HTMLDivElement&&
            //       !containerRef.current?.contains(e.target)){
            //       setIsOpen(false)
            //    }}
          document.addEventListener("click", handleClick)
          return ()=>{
           document.removeEventListener("click", handleClick)
          }
          },[])
          return containerRef
          
}
export default useHandleClickOutside