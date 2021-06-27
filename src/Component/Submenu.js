import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './Context'
import "../App.css"
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,  
    page: {page,links},
  } = useGlobalContext()
  const container = useRef(null)
  const [col,setCol]=useState('col-2')
  useEffect(() => {
    setCol('col-2');
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if(links.length===3)
    {
  setCol('col-3')
    }
    if(links.length>3)
    {
  setCol('col-4')
    }
  }, [location,page,links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}> 
       {links.map((link,index)=>{
         const {label,icon,url}=link;
         return(
           <a href={url} key={index}>
            {icon}
            {label}
           </a>
         )
       })}
        </div>
     </aside>
  )
}

export default Submenu