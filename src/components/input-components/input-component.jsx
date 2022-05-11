import './input-component.css'
import '../outsideContainer/outsideContainer.css'
import '../outsideContainer/carregarImagem'


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
                <div className="outsideContainer">
                    <carregarImagem />
                    <div className="titleContainer">
                    <h1>Deliciousness to your inbox</h1>
                    </div>
                    <div className="textContainer">
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <input className= "inputContainer" type="text" placeholder={props.texto} />
                    <div className="containerButton">
                    <button className="submit_button" onClick = {teste}>Submit</button>
                    </div>
                </div>
        );
    }
    export default InputComponent;
