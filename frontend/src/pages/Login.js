import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Auth.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   

    const handleLogin = async (e) => {

    e.preventDefault();

     console.log(email);
    console.log(password);
    

     if (!email || !password) {

        alert("Please fill all fields");

        return;
    }

    try {

        const response = await API.post(
            "/login",
            {
                email,
                password
            }
        );

        if (
    response.data === "Invalid Password" ||
    response.data === "User not found"
) {

    alert(response.data);

} else {

    alert("Login Successful");
    localStorage.setItem("token" , response.data);
    navigate("/dashboard");

    console.log("JWT Token:", response.data);
}

    } catch (error) {

        console.log(error);

        alert("Invalid Credentials");
    }
};

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="main-title">
                    Smart Task Tracker
                </h1>

                <h2 className="sub-title">
                    Login
                </h2>

                <form onSubmit = {handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="auth-input"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="auth-input"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />

                    <button className="auth-button">
                        Login
                    </button>

                </form>

                <p className="bottom-text">

                    Don't have an account?

                    <Link to = "/register">
                    Register
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;