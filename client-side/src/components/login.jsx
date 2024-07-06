import React from 'react'
import Form from "./Form"
import Button from './Button'
import { useState } from 'react'
const Login = () => {
  let [isLogin,setLogin]=useState(true);
  let content;

  const handleClick=()=>{
    setLogin((previous)=>!previous);
  }

  if(isLogin){
    content= <div className='flex h-[calc(100vh-8rem)]  justify-center items-center'>
      <div className='h-64 w-1/2 flex flex-col justify-center'>
      <Form formName="login" inputArr={[{type:"text", name:"username", placeholder:"Enter Username"},
        {type:"password", name:"password", placeholder:"Enter Password"}]} 
        btnName="Login" />
        <label className='text-center'>OR</label>
        <button onClick={handleClick}>signup instead</button>
      </div>
        
    </div>
  }
  else{

    content= <div className='flex h-[calc(100vh-8rem)]  justify-center items-center'>
      <div className='h-64 w-1/2 flex flex-col justify-center'>
      <Form formName="signup" inputArr={
        [
        {type:"text", name:"name", placeholder:"Enter name"},
        {type:"text", name:"username", placeholder:"Enter Username"},
        {type:"password", name:"password", placeholder:"Enter Password"}
      ]} 
        btnName="signup" />
        <label className='text-center'>OR</label>
        <button onClick={handleClick}>login instead</button>
      </div>
        
    </div>

  }

  return (
    <>{content}</>
   
  )
}

export default Login