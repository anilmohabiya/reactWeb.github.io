import React from 'react';

import { NavLink } from 'react-router-dom';
const Card =(props)=>{

    return(
        <>
    <div className="col-md-4 col-10 mx-auto">
    <div className="card" style={{width: '18rem'}}>
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
    <div className="card-body">
    <h5 className="card-title font font-weight-bold">{props.title}</h5>
    
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
    </div>            
        </>

        
    );
};
export default Card;