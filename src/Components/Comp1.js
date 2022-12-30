
import React from "react";
const Comp1=(props)=>{
   
   //console.log(props.title);
    return(
        <div className="parent">
           
            <div className="movie-part">
            <h1>{props.title}</h1>
            <img className="image" src={props.image} alt="Poster"/>
            <h3>({props.year})</h3>
            </div>

           
        </div>
    );
}
export default Comp1;