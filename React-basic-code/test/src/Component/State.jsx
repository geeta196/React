import "./State.css";
import React, { useState } from 'react'

const State = () => {

    const[value,setValue]=useState("Hello Geeta Taskar")
const[user,setUser]=useState({firstName:"devanshu",lastName:"kumavat"})
    // let user="In React"
    // function handleChange(){
    //     user="Manny"
    //     console.log("Manny")
    // }
    function handlevalue(){
        setValue("Hello World")

       // document.body.style.backgroundColor = "lightblue";
    }
    function handleUpdate(){
      setUser({...user,firstName:"kizie"})

    }
  return (
    <div>
      <h1>State in React</h1>
      <h2>{value} </h2>
      <p>, state is a built-in object that is used to store information about a component that can change over time.
When the state changes, React automatically re-renders the component to reflect the updated data in the UI.</p>
<button onClick={handlevalue} >Click To Change Value</button>
<h1>FirstName:-{user.firstName} Lastname:-{user.lastName}</h1>
<button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default State
