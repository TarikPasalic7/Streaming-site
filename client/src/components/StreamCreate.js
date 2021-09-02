import React from "react";

import { Field, reduxForm } from 'redux-form';
import Form from './Form'

let StreamCreate = props => {

    const submit =(val)=>{
        console.log(val);
      }
  const { handleSubmit, pristine, reset, submitting  } = props
  return (
   <div>
       <h1>Create a stream</h1>
       <Form/>
   </div>
  )
}



export default StreamCreate