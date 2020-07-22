import React, { useState } from 'react';
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'
import formchema from './formSchema'

import './App.css';

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

  const [user, setUser] = useState(initialUser) // array of user objects
  const [formValues, setFormValues] = useState(inititalFormValues) // object
  const [formErrors, setFormErrors] = useState(inititalFormErrors) // object
  const [disableButton, setDisableButton] = useState(initialButtonDisable) // boolean







  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
