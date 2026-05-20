import { useState } from "react";
import axios from "react";

function Login(){

    const[name , setName] = useState("");
    const[password , setPassword] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post(
                "http://localhost:8080/login",
                {
            name,
            password
                }
           );
           alert(response.data);
    }catch(error){
        alert(error.response.data);
    }
};

    return (
        <div>
            <h2>Login</h2>


            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br></br>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>

                <button type = "submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;