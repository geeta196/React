import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    function handleIncrement(){
    setCount(count+1)
    }

    function handleDecrement(){
      if(count>0){
        setCount(count-1)
    }
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1 sryle={{color:count===5?"green":count===10?"red":"blue"}}>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
