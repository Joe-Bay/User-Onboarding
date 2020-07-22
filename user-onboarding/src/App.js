import React, { useState, useEffect } from 'react';
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'
import formchema from './formSchema'
import User from './User'

import './App.css';
import formSchema from './formSchema';

const inititalFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false, // checkbox 
}

const inititalFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}
const initialUser = []
const initialButtonDisable = true

function App() {

  const [users, setUsers] = useState(initialUser) // array of user objects
  const [formValues, setFormValues] = useState(inititalFormValues) // object
  const [formErrors, setFormErrors] = useState(inititalFormErrors) // object
  const [disableButton, setDisableButton] = useState(initialButtonDisable) // boolean


  const getUsers = () => {

    axios.get("https://reqres.in/api/users") // this is getting the users from the API 
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(`the error is ${err} you kind sir`)
    })
  }

  const postNewUser = newUser => { // posting the new user to the API
    axios.post('https://reqres.in/api/users', newUser)
    .then(response => {
      setUsers([response.data, ...users]) // response is the new created user values, while also spreading across the old ones to not override them
      setFormValues(inititalFormValues)
    })
    .then(err => {
      console.log(`the error was ${err}`)
    })
  }

  const inputChange = (name, value) => { // this is where we can run the validation checks
    // ima do this part later
  }


  const checkboxChange = (name, isChecked) => { // this is one is kind of confusing, but basically tracks if the checkbox is checked while spreading the values to not ruin them
    setFormValues({
      ...formValues,
      terms:{
        ...formValues.terms,
        [name]: isChecked,
      }
    })
  }

const submit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: Object.keys(formValues.terms).filter(trm => formValues.terms[trm]), // dont truly understand this part. Please further inspect when given an opportunity
  }
// officially posting the new user by using the helper function
  postNewUser(newUser)
}


// handing the side effects, study this when given a chance 
useEffect(() => {
  getUsers()
}, []) 

useEffect(() => { // this sets the disable button to work to change when form values change
  formSchema.isValid(formValues).then(valid =>{
    setDisableButton(!valid)
  })
}, [formValues])



  return (
    <div className="App">
      <Form // giving all the props that form needs
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disableButton}
      errors={formErrors}
      />

      {
        users.map(user => {
          return (
          <User key={user.id} details={user} />
          )
        
        })
      }
    </div>
  );
}

export default App;
