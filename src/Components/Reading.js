import React from 'react';
import Card from './Card';
import classes from './Reading.module.css';

function Reading(props){


    return(
      <div>

      <Card className={classes.users}>
        <ul>

        {props.users.map(user => <li key={user.id}>{user.nameread} ({user.ageread} years old)</li>)}

        </ul>
     
     </Card>
     </div>
    
    );

}

export default Reading;

