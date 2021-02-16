import React from 'react';
import UserDataService from "../services/UserService";
import {useState} from 'react'
import { useHistory } from "react-router-dom";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login, setLogin] = useState(false);
const history = useHistory()

const loginReporter = () => {
    var data = { 
      email: email,
      password:password
    };
    console.log(data);
    
    UserDataService.login(data)
      .then(response => {
        console.log(response)
        if(response)
            {
              localStorage.setItem('login',JSON.stringify({login:true,token:response.token,email:response.data.email}))
              history.push('/')
              alert("Login success");       
                }
           else
                {
                  alert("Not success");
            }
      })
      .catch(e => {
        console.log(e);
      });
    
      setLogin({login:true})
    };
    return (
        <div>
            <input type="email" name="email" onChange={(event)=>setEmail({email:event.target.value})}/><br/>
            <input type="password" name="password" onChange={(event)=>setPassword({password:event.target.value})}/><br/>               
            <button onClick={()=>{loginReporter()}}>Login</button>
           
        </div>
    );
};

export default Login;