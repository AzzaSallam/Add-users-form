import React , {useState} from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList , setUsersList] = useState([]);

  const addUserHandler= (uName , uAge)=>{
    setUsersList((prevUsers)=>{
      return [...prevUsers , {name:uName , age:uAge , id:Math.random().toString()}];
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
