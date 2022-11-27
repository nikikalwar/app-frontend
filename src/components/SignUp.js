import {useState, useEffect} from "react";
import axios from 'axios';


export const SignUp=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=()=>{
        let body={
            "name":name,
            "email":email,
            "password":password
        }
        postSignUp(body);
    }

    const postSignUp=async(body)=>{

      try{
        const signUp=await axios.post('http://localhost:3006/user-save',body);
      }catch(err){
        alert("Error processing your request. Please resubmit the form")
      }
      
    }
    return(
        <>
       <div className="container">
        <h1>SignUp page</h1>
        <div className="login-wrapper">
            <h3>Enter your Name</h3>
            <input className="user-name" type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
            }}/>
            <h3>Enter you email address</h3>
            <input className="user-email" type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
            }}/>
            <h3>Enter your password</h3>
              <input className="user-password" type="text" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
            }}/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
       </div>
        </>
    )
}