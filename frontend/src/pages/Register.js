import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../api";

import "../styles/Auth.css";

function Register() {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/register", {
                name,
                email,
                password
            });

            alert(response.data);

            navigate("/");

        } catch (error) {

            alert(error.response?.data || "Registration Failed");
        }
    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Smart Task Tracker</h1>

                <h2>Register</h2>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        Register
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </div>

        </div>
    );
}

export default Register;