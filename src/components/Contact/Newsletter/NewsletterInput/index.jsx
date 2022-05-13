import './NewsletterInput.css'
import direita from '/direita.png'
import esquerda from '/esquerda.png'

    function InputComponent (props){

        function teste(){ 
            const input = document.querySelector("#inputNewsletter").value;
            if (input.length > 0){
                alert("Thanks for your subscription");
            }
        
            else alert("Please, enter your email adress for more recipes")
            console.log(input); 
        }
            return (
                <div className="outsideContainer">
                    <img className= 'direitaImage' src={direita} />
                    <img className= 'esquerdaImage' src={esquerda} />
                    <div className="titleContainer">
                    <h1>Deliciousness to your inbox</h1>
                    </div>
                    <div className="textContainer">
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                
                    <input id='inputNewsletter' className= "inputContainer" type="text" placeholder={props.texto} />
                    <div className="containerButton">
                    <button className="submit_button" onClick = {teste}>Submit</button>
                    
                    </div>
                </div>
        );
    }
    export default InputComponent;
