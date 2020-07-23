// insert user stuff here so
import React from 'react'

export default function User(props) {
    const { details } = props

    if (!details){
        return <h2>Loading...</h2>
    }

    return (
        <div className = 'user-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            
        </div>
    )
}