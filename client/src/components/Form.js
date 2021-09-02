import React from "react";

import { Field, reduxForm } from 'redux-form'
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
      <input {...input}    placeholder={label} type={type} />
        {touched &&
          ((error && <div className="errormessage">{error}</div>) ||
            (warning && <span>{warning}</span>) )}
      </div>
    </div>
  )
  const requiredtitle = value => (value || typeof value === 'number' ? undefined : 'You must enter a title');
  const requireddescription = value => (value || typeof value === 'number' ? undefined : 'You must enter a description')
const submit =(val)=>{
    console.log(val);
  }
let ReduxForm = props => {

     
  const { handleSubmit, pristine, reset, submitting  } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
       <div>
           
        <label>Enter Title</label>
        <div>
          <Field
            name="firstName"
            component={renderField}
            type="text"
            validate={requiredtitle}
           
          />
        </div>
      </div>
      <div>
        <label>Enter Description</label>
        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            placeholder="Last Name"
            validate={requireddescription}
          
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ReduxForm)

export default ReduxForm