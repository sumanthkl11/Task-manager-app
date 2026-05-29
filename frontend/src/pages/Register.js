import "../styles/Auth.css";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;
    }

    try {

        const userData = {

            name,
            email,
            password
        };

        const response = await API.post(
            "/register",
            userData
        );

        console.log(response.data);

        alert("Registration Successful");
        navigate("/");

    } catch (error) {

        console.log(error);

        alert("Registration Failed");
    }
};

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="main-title">
                    Register Page
                </h1>

                <form onSubmit={handleSubmit}>

                    {/* Name */}

                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="auth-input"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    {/* Email */}

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="auth-input"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    {/* Password */}
                    
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="auth-input"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    {/* Confirm Password */}

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(
                                e.target.value
                            )
                        }
                        className={
                            confirmPassword.length > 0
                                ? password === confirmPassword
                                    ? "auth-input success"
                                    : "auth-input error"
                                : "auth-input"
                        }
                    />
                        

                      
                    {/* Validation Message */}

                    {
                        confirmPassword.length > 0 &&
                        password !== confirmPassword && (

                            <p className="error-text">
                                Password does not match
                            </p>
                        )
                    }

                    {
                        confirmPassword.length > 0 &&
                        password === confirmPassword && (

                            <p className="success-text">
                                Password matched
                            </p>
                        )
                    }

                    <button className="auth-button">
                        Register
                    </button>

                </form>

                <p className="bottom-text">

                    Already have an account?

                    <Link to="/">
                        Login
                    </Link>

                </p>
                

            </div>

        </div>
    );
}

export default Register;