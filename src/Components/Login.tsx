import React from "react";

const Login = () => {
    const handleFormSubmit = (e: React.MouseEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Submitted")
    }
    return <div className="login-form">
        <form onSubmit={handleFormSubmit}>
            <p>Username: </p>
            <input type="text" placeholder="Enter Name"/>
            <p>Password: </p>
            <input type="password" name="password" id="user-password" placeholder="Enter Password"/>
            <button type="submit">Login</button>
        </form>
    </div>
}

export default Login;
