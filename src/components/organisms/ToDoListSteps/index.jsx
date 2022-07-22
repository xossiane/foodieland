import { useState } from "react";
import '../ToDoList/ToDoList.scss'
import './ToDoListSteps.scss'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { Card } from 'react-bootstrap';
import image from '/assets/preparing.png'
import undone from '/assets/undone.png'
import horizontalbar from '/assets/horizontalbar.png'

function ToDoSteps({toDoSteps, index, ToggleTodo, handleClick}){
    return(
        <>
        <div className="ToDoSteps">
            <div>
                <button className="TodoList__btn"
                onClick={
                    () => ToggleTodo(index)
                    }>
        
                    <img src={undone} 
                    onClick={handleClick} 
                    style = {{background: toDoSteps.isDone ? "black" : " ", borderRadius: toDoSteps.isDone ? "64px" : ""  }}
        
                    alt="" />
                    </button>
            </div>
            <div className="TodoListSteps__content">
            <h2 className="TodoList__title--subtitle">{toDoSteps.title}</h2>
            <span className="TodoListSteps__items" style={{textDecoration: toDoSteps.isDone ? "line-through" : ""}}>{toDoSteps.text}</span>
            <img className="TodoListSteps__img" src={toDoSteps.img}></img>
            
            </div>
        </div>
        </>
    )
};

function ToDoListSteps(){
    const [toDoSteps, setToDoSteps] = useState([{
        title: "1. Lorem ipsum dolor sit amet",
        img: "/assets/preparing.png",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "2. Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "3. Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "4. Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "5. Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    }]);
    

    const ToggleTodo = index =>{

        const newTodosSteps = [...toDoSteps];
        
        newTodosSteps[index].isDone = !newTodosSteps[index].isDone
        
        setToDoSteps(newTodosSteps);
        
        }

        const [isDone, setIsDone] = useState(false);
        const handleClick = () => {
          setIsDone(true);
        }


        return (
            <div>
                <h2 className="TodoList__title"> Directions </h2>
                <h2 className="TodoList__title--subtitle"> For main dish </h2>
                {toDoSteps.map((toDoSteps, index) => (
          <Card>
            <Card.Body>
              <ToDoSteps
              key={index}
              index={index}
              img={toDoSteps}
              toDoSteps={toDoSteps}
              ToggleTodo={ToggleTodo}
              />
              <img className="TodoList__horizontalBar" src={horizontalbar} alt="" />
              
            </Card.Body>
          </Card>
          
        ))}
            </div>
        )
}

export default ToDoListSteps;