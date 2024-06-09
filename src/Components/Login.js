import React,{useState,useEffect} from 'react'
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {app} from "../Components/Firebase"
import './Login.css'

const auth = getAuth(app);


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    const createuser = () =>
        {
            createUserWithEmailAndPassword(auth,email,password).then(value => alert("success"));
        }
    
        useEffect(()=>{
          onAuthStateChanged(auth,(user)=>{
    console.log(user)
          })
        },[])
    

  return (
    <div>
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"
              value={email} onChange={(e)=>setEmail(e.target.value)} 

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"
              onChange={(e)=>setPassword(e.target.value)} 

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"
            onClick={createuser}
          />
        </form>
        <a className="link" href="/signup">Sign Up</a>
      </div>


    </div>
  )
}

export default Login
