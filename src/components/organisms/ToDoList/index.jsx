import { useState } from "react";
import './ToDoList.scss'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { Card } from 'react-bootstrap';
import undone from '/assets/undone.png'
import horizontalbar from '/assets/horizontalbar.png'


function ToDo({ toDo, index, ToggleTodo, handleClick }) {
 /*  var doneStyle = {
    color: 'black'
  } */
    return (
      
      <>
      <div
        className="TodoList">
          <div>
          <button className="TodoList__btn" 
          onClick={
            () => ToggleTodo(index)
            }>

            <img src={undone} 
            onClick={handleClick} 
            style = {{background: toDo.isDone ? "black" : " ", borderRadius: toDo.isDone ? "64px" : ""  }}

            alt="" />
            </button>
          {/* <button className="TodoList__btn--remove" variant="outline-danger" onClick={() => removeToDo(index)}>✕</button> */}
        </div>
        
        <span className="TodoList__items" style={{textDecoration: toDo.isDone ? "line-through" : ""}}>{toDo.text}</span>
        
      </div>
      </>
    );
  }
  
  // function FormTodo({ addToDo }) {
  //   const [value, setValue] = useState("");
  
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (!value) return;
  //     addToDo(value);
  //     setValue("");
  //   };
  
  //   return (
  //     <Form onSubmit={handleSubmit}> 
  //     <Form.Group>
  //       <Form.Label><b>Add Todo</b></Form.Label>
  //       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
  //     </Form.Group>
  //     <Button variant="primary mb-3" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  //   );
  // }      <-------------- TALVEZ O ERRO AQUI SEJA A EXPORTAÇAO PRA RECIPES PAGE

  
function ToDoList(){
    const [toDo, setToDo] = useState([{
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    },
    {
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    },
    {
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    },
    {
      text: "Lorem ipsum dolor sit amet",
      isDone: false
    },
    {
      text: "Lorem ipsum dolor sit amet",
      isDone: false
    }]);

    const ToggleTodo = index =>{

      const newTodos = [...toDo];
      
      newTodos[index].isDone = !newTodos[index].isDone
      
      setToDo(newTodos);
      
      }

      const [isDone, setIsDone] = useState(false);
      const handleClick = () => {
        setIsDone(true);
      }


    return (
        
        <div>
        <h2 className="TodoList__title"> Ingredients </h2>
        <h2 className="TodoList__title--subtitle"> For main dish </h2>
        
        {toDo.map((toDo, index) => (
          <Card>
            <Card.Body>
              <ToDo
              key={index}
              index={index}
              toDo={toDo}
              ToggleTodo={ToggleTodo}
              />
              <img className="TodoList__horizontalBar" src={horizontalbar} alt="" />
              
            </Card.Body>
          </Card>
          
        ))}
        <h2 className="TodoList__title--subtitle"> For the Sauce </h2>
        {toDo.map((toDo, index) => (
          <Card>
            <Card.Body>
              <ToDo
              key={index}
              index={index}
              toDo={toDo}
              ToggleTodo={ToggleTodo}
              />
              <img className="TodoList__horizontalBar" src={horizontalbar} alt="" />
            </Card.Body>
          </Card>
          
        ))}
      </div>
    
    )
    
}

export default ToDoList;