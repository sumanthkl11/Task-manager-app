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

        try {

            const response = await API.post("/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data || "Login Failed");
        }
    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Smart Task Tracker</h1>

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p> 
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>

        </div>
    );
}

export default Login;