import React from "react";

//Stateless functional component: does not contain any state.
//Class gives extra functionality not needed for this example.
//Syntax shortened only returns 1 argument, 1 element. 
const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type = "text" name = "city" placeholder = "City...."/>
        <input type = "text" name = "country" placeholder = "Country...."/>
        <button>Get Weather</button>
    </form>
)

export default Form;