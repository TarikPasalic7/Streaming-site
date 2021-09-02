import React from "react";
import axios from "axios"
import { Field, reduxForm } from 'redux-form';
import Form from './Form'

let StreamCreate = props => {

    const submit =(val)=>{
        axios.post('http://localhost:3001/streams/new', val)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(val);
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