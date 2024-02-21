import React from "react";
import "../style/login.css"

const Login = () => {
    const handleFormSubmit = (e: React.MouseEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Submitted")
    }
    return <div className="login-container">
        <form onSubmit={handleFormSubmit} className="login-form">
            <p>Username: </p>
            <input type="text" name="username" autoComplete="true" placeholder="Enter Name"/>
            <p>Password: </p>
            <input type="password" name="password" id="user-password" placeholder="Enter Password"/>
            <br />
            <button type="submit" id="login-button">Login</button>
        </form>
    </div>
}

export default Login;
