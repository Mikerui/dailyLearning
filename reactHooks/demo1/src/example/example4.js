import React, { useState,useReducer } from 'react'
// useReducer介绍和简单使用
function Example4(){
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+5  )}}>click me</button>   
    </div>
  )
}
export default Example4
