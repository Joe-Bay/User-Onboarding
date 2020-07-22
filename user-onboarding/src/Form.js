// form info goes here
import React from 'react'

const Form = props => {
    const {values, submit, inputChange, checkboxChange, disabled, errors } = props

    const onSubmit = event => {
        event.preventDefault() // basically when we submit it doesnt default and then triggers our submit function via props
        submit()
    }

    const onCheckboxChange = event =>{ // when the target is changed run the function in APP
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const {name, value} = event.target
        inputChange(name, value)
    }

    return ( // create the form itself in JSX
        <form className = 'form container' onSubmit={onSubmit}>
            <div className = 'form group'>
                <h2>Add Users!</h2>
                <button>Submit</button>
    {/* this next bit, is how we will display errors to the user */}
                <div className="errors"> 
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className = 'form input section'>
                <h3>User Information</h3>
                <input 
                type='text'
                
                
                />
            </div>
        </form>
    )
}

export default Form