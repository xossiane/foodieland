import './InputComponent.css'
function InputComponent(props){
	

	function teste(){
		const input = document.querySelector(".inputContainer").value;
		if(input.length > 0){
			alert("DADOS ENVIADOS");
		}
		else alert("Existe campos incompletos")
		console.log(input);
	}
	return(
		<div>
			<h1>Input</h1>
			<input className="inputContainer" id='teste' type="text" placeholder={props.placeholder}/>
			<button onClick={teste}>Submite</button>
		</div>
	);
}

export default InputComponent;