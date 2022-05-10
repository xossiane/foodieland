import InputComponent from "../input-component/InputComponent";
function Formulario() {
	function teste(){

		const algo = document.getElementsByTagName("InputComponent").value;
		console.log(algo);
	/* 	if (props.title.length > 0) {
			alert("DADOS ENVIADOS");
		} else alert("Existe campos incompletos");
		 */
	}
	
	return (
		<div>
			<InputComponent placeholder="Enter your name..." title="NAME" />
			<InputComponent
				placeholder="Your email address..."
				title="EMAIL ADDRESS"
			/>
			<button onClick={teste}>Submite</button>
		</div>
	);
}

export default Formulario;
