import React ,{useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Reading from './Components/Reading';

function App() {

  let [userList,setUserList]=useState([]);

  let [show,setShow]=useState(false);

  function addUserHandler(getdata){
      setShow(true);
       setUserList(function(prevUserList){
         return [...prevUserList,getdata];
       });
       console.log(getdata);
  }


  return (
    <div className="App">
      <Form onAddUser={addUserHandler}/>
     {show && <Reading users={userList} />}
    </div>
  );
}

export default App;
