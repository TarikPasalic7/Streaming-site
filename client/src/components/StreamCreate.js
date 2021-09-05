import React from "react";
import axios from "axios"
import { Field, reduxForm } from 'redux-form';
import Form from './Form'
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
let StreamCreate = props => {
    const userId=useSelector(state=>state.user.userID);
     const history = useHistory()
    const submit =(val)=>{
       
        const temp={
            title:val.title,
            description:val.description,
            userID:userId
        }
        axios.post('http://localhost:3001/streams/new', temp)
          .then(function (response) {
            console.log(response);
            history.push("/");
          })
          .catch(function (error) {
            console.log(error);
          });
       
      }
  const { handleSubmit, pristine, reset, submitting  } = props
  return (
   <div>
       <h1>Create a stream</h1>
       <Form onSubmit={submit}/>
   </div>
  )
}



export default StreamCreate