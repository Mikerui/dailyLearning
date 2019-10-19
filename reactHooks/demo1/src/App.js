import React,{useState} from 'react';

function Example(){
  const [count,setCount] = useState(5)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+5  )}}>click me</button>
    </div>
  )
}

export default Example