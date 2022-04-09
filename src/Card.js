import React from "react";
import { NavLink } from "react-router-dom";

const Card= (props)=>{
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card" style={{border: '0px'}}>
  <div className="card-body cardDesign">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Saint Louis University Web Technologies Team</p>
    <NavLink to="./Home" className="btn btn-primary">View</NavLink>
  </div>
</div>
</div>
                   
        </>
    );
};

export default Card;