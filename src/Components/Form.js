import React, {useState} from 'react';
import classes from './Form.module.css';
import Button from './Button';
import Card from './Card';
import Errormodal from './Errormodal';

function Form(props){

  let [uname,setUname]=useState('');
  let [age,setAge]=useState('');
  let [error,setError]=useState();

  function onforumsubmit(event){
        event.preventDefault();

        if(uname.trim().length===0 || age.trim().length===0){
            setError({title:'something went wrong', message:'please try again'});
            return;
        }
        if(+age<0){
            setError({title:'Invalid age encountered', message:'age should be > 0'});
            return;
        }
        const valuesread={
            id:Math.floor(Math.random()*40),
            ageread:age,
            nameread:uname,
            
        };
        // console.log(valuesread);
        props.onAddUser(valuesread);
        setUname('');
        setAge('');
  }
  function enteredname(event){
      setUname(event.target.value);
  }
  function enteredage(event){
      setAge(event.target.value);
  }
  function event(){
      setError(null);
  }

    return(
        <div>
            {error && <Errormodal title={error.title} message={error.message} confirm={event}></Errormodal>}
            <Card className={classes.input}>
            <form onSubmit={onforumsubmit}>
                    <label>Username </label>
                    <input onChange={enteredname} value={uname} type='text'></input>
                    <label>Age(years) </label>
                    <input onChange={enteredage} value={age} type='number' ></input>
                    <Button type='submit'>Add User</Button>
            </form>
            </Card>
        </div>


    );

}

export default Form;