import { useState } from 'react';

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
        
        <><AddUserSubmit onAddUser={addUserHandler} ></AddUserSubmit><UsersList users={usersList}></UsersList></>
       
       
    )
};

export default Content;