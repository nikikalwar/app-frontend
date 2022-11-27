import {useState, useEffect} from "react";

export const SignIn=()=>{
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    return(
        <>
       <div className="container">
        <h1>Sign In Page</h1>
        <div className="login-wrapper">
            <input className="user-email" type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
            }}/>
            <input className="user-password" type="text" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
            }}/>
        </div>
       </div>
        </>
    )
}