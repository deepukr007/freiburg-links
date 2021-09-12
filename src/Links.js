import React from 'react';

const Links = (props)=>{

    const reDirect = () => {
         window.location.href=props.link
    }
    return(
        <div className="card" key={props.name}>
    <button 
         onClick={reDirect}>   
        {props.name}
    </button>
    </div>
        );
}

export default Links;
