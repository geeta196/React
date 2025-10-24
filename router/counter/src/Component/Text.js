import React,{useState} from "react";
import "./Light.css";
import images from "../asset/images.jpeg"
function Text(){
    const[name ,setName]=useState("geetu");

    const hide = ()=>{
        setName("");
        
        
    }
    const show=()=>{
        setName("geetu");

         }
    return(
       <div style={{textAlign:"center",marginTop:"50px"}} >
        <h1>Text Program</h1>
        <h1>Name {name}</h1>
        <button onClick={hide}>Hide</button>
        <div>
            <button onClick={show}>show</button>
        </div>
       </div>
           
           
    );
}
export default Text;

