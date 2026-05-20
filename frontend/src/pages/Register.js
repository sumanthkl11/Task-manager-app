import {useState} from "react";
import axios from "react";


function Register(){

    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const handleRegister  = async (e) => {
        e.preventDefault();

        try{
            const reponse = await axios.post(
                "http://localhost:8080/register",
                {
                    name , 
                    email ,
                    password
                }
            );
            alert(Response.data);
        }catch(error){
            alert(error.response.data);
        }
    };

    return(
        <div>
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    />

                    <input
                    type = "email"
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
                    <br></br>

                    <button type = "submit">
                        Register 
                        </button>       
            </form>
         </div>
    );
}

export default Register;