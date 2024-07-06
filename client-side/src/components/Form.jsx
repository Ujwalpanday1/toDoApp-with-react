//things to know 
// useState takes initial value as argument and return array with two element one the variable and another function 
//function also takes a callback and calback takes previous state as argument and return new state

import React, { useState } from 'react'
import Button from './Button'
import axios from 'axios'
const Form = ({formName,inputArr,btnName,btntype="submit"}) => {

  
  let initialState=inputArr.reduce((acc,input)=>{
    acc[input.name]="";
    return acc;
  },{});
  

  let [formData,setData]=useState(initialState);
  const changeHandler=(e)=>{
    setData((previousFormData)=>{
       let newObj={
        ...previousFormData,
      [e.target.name]:e.target.value
      }
      return newObj;

    })
  }
  const submitHandler=(e)=>{

    e.preventDefault(); 
    axios.post(`http://localhost:3000/${formName}`,formData).then((response)=>{
      if (response.status === 301 || response.status === 302) {
        console.log(window.Headers.location)
       
      } else {
        console.log(response.data);
        // Continue with handling the response data
      }

    }).catch((e)=>console.log(e))
    setData(initialState)
  }

          
  return (
             <form className='flex flex-col space-y-4' onSubmit={submitHandler}>
             {inputArr.map((input, index) => (
              <>
              <label>{input.name}:</label>
               <input
                 className='h-10 rounded-lg p-4 border border-black'
                 key={index}
                 type={input.type}
                 name={input.name}
                 placeholder={input.placeholder}
                 value={formData[input.name]}
                 
                 onChange={changeHandler}
               />  </>
             ))}
             <Button buttonName={btnName} buttontype={btntype}/>
           </form>
        )
}

export default Form