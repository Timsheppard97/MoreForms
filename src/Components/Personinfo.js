import React from 'react'


const Personinfo = (props) => {
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Password:</p>
            <p>Confirm Password:</p>
        </div>
    )
}

export default Personinfo;