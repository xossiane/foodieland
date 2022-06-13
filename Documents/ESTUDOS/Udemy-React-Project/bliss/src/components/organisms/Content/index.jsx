import { useState } from 'react';
import MainContext from '../../atoms/AddUser'
import '../../../App.scss'
import AddUserSubmit from "../../molecules/AddUserSubmit";
import UsersList from '../../molecules/UsersList';



function Content (props){
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName,uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList,{name: uName, age: uAge}];
        }); //aqui vamos dar um update no state do UsersList

    }
  
    return(
        
        <><MainContext onAddUser={setUsersList} > <AddUserSubmit AddUser={addUserHandler} ></AddUserSubmit><UsersList users={usersList}></UsersList></MainContext></>
       
       
    )
};

export default Content;