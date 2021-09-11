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

let ReduxForm = props => {

     
  const { handleSubmit, pristine, reset, submitting  } = props
  return (
    <form className="submitform" onSubmit={handleSubmit}>
        
       
       <div className="forminput" >
       <label   className="field">Enter Title</label>
       
        <Field
            name="title"
            component={renderField}
            type="text"
            validate={requiredtitle}
            className="field"
           
          />
       
       
        
      </div>
      <div>
      
      
        <div className="forminput">
        <label  className="field2">Enter Description</label>
          <Field
            name="description"
            component={renderField}
            type="text"
            placeholder="Last Name"
            validate={requireddescription}
          
          />
        </div>
      </div>
     
     
      <div>
        <button type="submit" className="btnsub" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" className="btnsub" disabled={pristine || submitting} onClick={reset}>
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