import React,{useState,useEffect} from 'react'
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {app} from "../Components/Firebase"
import './Login.css'

const auth = getAuth(app);


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    const createuser = (e) =>{
          e.preventDefault()
            createUserWithEmailAndPassword(auth,email,password).then(value => alert("success"));
            //here we passing the email and password and it creates the new user in our firebase account
            //  and this function of createuserwithemailandpassword returns the promise and it will 
            //  response back and we are printing it..

        }
    
       
    

  return (
    <div>
      <div className="login">
        <h4>Login</h4>
        <form >
        <label className='label'>Email</label>
            
          <div className="text_area">
            <input
              className="text_input"
              value={email} 
              type="email" onChange={(e)=>setEmail(e.target.value)}
              placeholder='Enter your email'/>
          </div>

          <label className='label'>Password</label>
            
            <div className="text_area">
             <input
              className="text_input"
              value={password} 
              type="password" 
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder='Enter your password'/>
            </div>

          <button onClick={createuser}
             type="submit"
            className="btn"
          >Login</button>
        </form>
        <a className="link" href="/signup">Sign Up</a>
      </div>


    </div>
  )

}

export default Login
