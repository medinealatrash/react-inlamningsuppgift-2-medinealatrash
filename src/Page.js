import React from 'react'

export default function Page(props) {
    function comeBack() {
        props.comeBack(props.comeBack);
    }
    return (
        <div className='Page' >
             <button className="btn" onClick={comeBack} > <i className="fas fa-arrow-left"></i> </button>
           <h1 > {props.myListObj.title}  </h1> 
           <h3 >{props.myListObj.description} </h3>
           <ul>
           {
              props.myListObj.targets.map(item=>{
               return  <li key={item.code} >{item.title} </li>
              })
           } 
           </ul>
            
        </div>
    )
}
