import React, {useState} from 'react'

const Personcard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
    }

    return (
        <form onSubmit = {createUser}>
            <div>
                <div>
                    First Name:
                    <input type='text' onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div>
                    Last Name:
                    <input type='text' onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div>
                    Email: 
                    <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    Password:
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    Confirm Password:
                    <input type='password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="Submit"></input>
                <div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {'*'.repeat(password.length)}</p>
                    <p>Confirm Password: {'*'.repeat(confirmPassword.length)}</p>
                </div>
            </div>
        </form>
    )
}

export default Personcard;