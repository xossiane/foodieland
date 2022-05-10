import './input-component.css'
function InputComponent (props){
    

    function teste(){ 
        const input = document.querySelector(".inputContainer").value;
        if (input.length > 0){
            alert("Dados Enviados");
        }
    
        else alert("Existem campos não preenchidos")
        console.log(input); 
    }
    return (
        <div>
            <h1>Input</h1>
            <input className= "inputContainer" type="text" placeholder={props.texto} />
            <button onClick = {teste}>Submit!</button>
        </div>
    );
}
export default InputComponent;