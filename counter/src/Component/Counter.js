import React,{useState} from 'react';
function Counter(){
    const[count ,setCount]=useState(0)

    const increment = ()=>{
        setCount(count+1);
    }
    const decrement =()=>{
        
    setCount(count-1);
    

    }
    return(
        <div>
            <h1>Count program</h1>
            <button style={{color:"white" }} onClick={increment}>Increment </button>
           <h2>{count}</h2>
            <button onClick={decrement}>Decrement</button>
            </div>
    );
}
export default Counter;


