import React,{useState} from 'react'
import FormCss from "./Form.module.css"

const Form = () => {
  const [user,setUser]=useState("dev")
  const [pass,setPass]=useState("123")

  function handlSubmit(e){
    e.preventDefault()
  }
// function handleUserName(e){
//   console.log(e.target.value)
// }
// function handlePass(e){
//   console.log(e.target.value)
// }

  return (
    <div className={FormCss.main}>
        <div className={FormCss.form}>
<h1 className="text-center">Form </h1>
      <form onSubmit={handlSubmit}>
<label>UserName</label>
<input type="text" className="form-control" value={user}
onChange={(e)=>{setUser(e.currentTarget.value)}}
/>
<label>Password</label>
<input type="text" className="form-control"  value={pass}
onChange={(e)=>{setPass(e.target.value)}}
/>
<button type="submit" className="form-control btn btn-danger mt-4">Submit</button>

      </form>

        </div>
      
    </div>
  )
}

export default Form
