import React from 'react';
import {useState} from 'react'
import UserDataService from "../services/UserService"

const Signup = () => {

    const initialState={
        firstname:"",
        email:"",
        password:""
    }

    const [user,setUser]=useState(initialState);

    const handleInputChange=(event)=>{
        const { name,value }=event.target
      setUser({...user,[name]:value})
    }

    const saveUser=(event)=>{
    event.preventDefault()
    const data={
        firstname:user.firstname,
        email:user.email,
        password:user.password
    }
    console.log(data);

    UserDataService.create(data).then(response=>{
        setUser({
            firstname:response.firstname,
            email:response.email,
            password:response.password
        })
        console.log(response.data);
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        <div>
            <h1>Signup form</h1>
            <div>
                <label htmlFor="firstName">First NAme</label>
                <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange}></input>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} onChange={handleInputChange}></input>
                </div>
                <div>
                <label htmlFor="firstName">PAssword</label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange}></input>
                </div>
                <button onClick={saveUser} className="btn btn-success">
          Submit
        </button>
              

        </div>
    );
};

export default Signup;