import InputComponent from "../input-component/InputComponent";
function Formulario() {
	var algo = '';
  
	const salvarDados = (entrouDados) => {
    const dados = {
      ...entrouDados,
      id: Math.random().toString(),
    };
		algo = dados.name;
    console.log(dados.name);
		
  };

  function teste() {
 /*     if (algo.length > 0) {
      alert("Dados enviados");
    } else alert("Existe campos incompletos");  */
		console.log("funcao " + algo);
  }

  return (
    <div>
      <InputComponent
        onSalvarDados={salvarDados}
        type="text"
        placeholder="Enter your name..."
        title="NAME"
				name="nome"
      />
      <InputComponent
        onSalvarDados={salvarDados}
        type="email"
        placeholder="Your email address..."
        title="EMAIL ADDRESS"
				name="email"
      />
      <button onClick={teste}>Submite</button>
    </div>
  );
}

export default Formulario;
