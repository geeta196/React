import React from 'react'
import TestCss from "./test.module.css"
//console.log(TestCss)
const {test,skill}=TestCss


const Test = () => {

  const cars=["Bmw","Hondas","MG","Tata","Suzuki"]
  return (
    <div>
      <h1 ClassName={TestCss.test}>Test com--- Geeta Taskar  </h1>
      <p className={TestCss.skill}>Hello Skillwalo</p>

      {
        cars.map((item,index)=>(
        <ul key={(index)}>
        <li>{item}</li>
      
      </ul>
        ))
      }
      
    </div>
  )
}

export default Test
