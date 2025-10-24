import React,{useState} from 'react'

import FormCss from "./AnotheFrom.module.css";

const AnotherForm = () => {
  const[user,setUser]=useState({userName:"",userpassword:""})
 const [greet,setGreet]=useState("")

  function handleForm(e){
    e.preventDefault()
    setGreet(user.userName)
  }
  
  function handleChange(e){
   console.log(e.target.name)
   setUser({...user,[e.target.name]:e.target.value})
 
  }
  return (
    <div className={FormCss.main}>
        <div className={FormCss.form}>
<h1 className="text-center">{greet === "" ? "Form" : "hello " + greet}</h1>

          <form onSubmit={handleForm}>

      
<label>UserName</label>
<input type="text" className="form-control" 
name="userName"
value={user.userName}
onChange={handleChange}
/>
<label>Password</label>
<input type="text" className="form-control" 
name="userPassword" 
value={user.Password}
onChange={handleChange}

/>
<button type="submit" className="form-control btn btn-danger mt-4">Submit</button>

      </form>

        </div>
      
    </div>
  )
}

export default AnotherForm
