import React from "react";

//Stateless functional component: does not contain any state.
//Class gives extra functionality not needed for this example.
//Syntax shortened only returns 1 element. 
const Titles = () => (
    <div className= "titles_container">
        <h1 className = "title-container__title">Weather Forecast</h1>
        <p className = "title-container__subtitle" >Find out Temperature Conditions and More...</p>
    </div>
)
 
export default Titles;