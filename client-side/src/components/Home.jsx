import React from 'react'
import Form from './Form'

const Home = () => {
  return (
    <div className='flex h-[calc(100vh-8rem)] justify-center items-center'>
      <div className='h-40 w-1/2'>   
       <Form formName="addTask" inputArr={
        [
        {type:"text", name:"title", placeholder:"Enter Title"},
        {type:"text", name:"description", placeholder:"Enter description"}
      ]} 
        btnName="Add" /></div>
      
    </div>
  )
}

export default Home