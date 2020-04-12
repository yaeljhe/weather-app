import React from "react";

//Stateless functional component: does not contain any state.
//Class gives extra functionality not needed for this example.
//Syntax shortened only returns 1 argument, 1 element. 
const Weather = props => (
	<div className="weather__info">
		{	
			props.city && props.country && <p className="weather__key"> Location: 
				<span className="weather__value"> { props.city }, { props.country }</span>
			</p> 
		}
		{ 	
			props.temperature && <p className="weather__key"> Temperature: 
				<span className="weather__value"> { props.temperature }	</span>
			</p> 
		}
		{ 	
			props.humidity && <p className="weather__key"> Humidity: 
				<span className="weather__value"> { props.humidity } </span>
			</p> 
		}
		{ 	
			props.description && <p className="weather__key"> Conditions: 
				<span className="weather__value"> { props.description } </span>
		</p> 
		}
		{ 
			props.error && <p className="weather__error">{ props.error }</p>  
		}
	</div>
);

// const Weather = props => (
//     //Renders City,Country,Temperature,Humidity & Description when information is retrevied is true. 
//     <div className = "weather_info">
//         {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
//         {props.temperature && < p>Temperature: {props.temperature}</p>}
//         {props.humidity && <p>Humidity: {props.humidity}</p>}
//         {props.description && <p>Conditions: {props.description}</p>}
//         {props.error && <p>{props.error}</p>}
//     </div>
// );

export default Weather;