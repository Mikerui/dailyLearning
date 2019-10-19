import React, { useState,useEffect } from 'react'
function Example1(){
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(`useEffect=>you click ${count} times`);
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+5  )}}>click me</button>
    </div>
  )
}
export default Example1
