import React, { useState } from "react";
import "../style/login.css"

interface CredentialState {
    username: string;
    password: string;
}

const Login = () => {
    const [credential, setCredential] = useState<CredentialState>({
        username: "",
        password: ""
    });

    const handleCredential = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setCredential(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleFormSubmit = (e: React.MouseEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(credential);
        console.log("Submitted");
    }
    return (
        <div className="login-container">
            <form onSubmit={handleFormSubmit} className="login-form">
                <p>Username: </p>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="true"
                    placeholder="Enter Name"
                    value={credential.username}
                    onChange={handleCredential}
                />
                <p>Password: </p>
                <input
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="Enter Password"
                    value={credential.password}
                    onChange={handleCredential}
                />
                <br />
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
)}

export default Login;
