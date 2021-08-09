import React from "react";

const Form = (props) => (
	<form className="form-container" onSubmit={props.getWeather}>
		<input
			className="city-container"
			styles="color: #fff"
			type="text"
			name="city"
            placeholder="Enter city name"
            autoComplete="off"
            autoSave="off"
            autoFocus="true"
		/>
		<input
			className="country-container"
			type="text"
			name="country"
			defaultValue="INdia"
            placeholder="Enter country name"
            autoComplete="off"
            autoSave="off"
		/>
		<button>Find</button>
	</form>
);

export default Form;
