import React, { useState } from 'react';

import "./InputComponent.css";

function InputComponent(props) {

	const [enteredName, setEnteredName] = useState("");


	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	}

	const submiteHandler = (event) => {
		event.preventDefault();

 		const expenseData = {
			name: enteredName,
		};
		props.onSalvarDados(expenseData);
		console.log("name " + expenseData)
	
	}
	return (
		<form onSubmit={submiteHandler}>
			<h6>{props.title}</h6>
			<input
				className="inputContainer"
				type={props.type}
				value={enteredName}
				onChange={nameChangeHandler}
				placeholder={props.placeholder}
				name={props.nome}
			/>
			
		</form>
	);
}

export default InputComponent;
