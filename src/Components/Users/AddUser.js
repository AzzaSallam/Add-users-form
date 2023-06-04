import React , {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";


const AddUser = props =>{

    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge , setEnteredAge] = useState('');
    const [error , setError] = useState();

    const changeUsernameHandler = event =>{
        setEnteredUsername(event.target.value);
    }

    const changeAgeHandler = event =>{
        setEnteredAge(event.target.value);
    }

    const submitHandler= event=>{
        event.preventDefault();

        if(enteredUsername.trim().length ===0 ||enteredAge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty value).'
            });
            return;
        }

        if(+enteredAge <1){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (>0).'
            });
            return;
        }

        props.onAddUser(enteredUsername , enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = ()=>{
        setError(null);
    }


    return(
        <div> 
            {error &&<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.container}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">User name</label>
                    <input id="username" type="text" placeholder="User name" value={enteredUsername} onChange={changeUsernameHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" placeholder="Age in (Year)" value={enteredAge} onChange={changeAgeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>     
    );
}

export default AddUser;