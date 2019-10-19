import React, { useState,createContext,useContext   } from 'react'
// useContext 让父子组件传值更简单
const CountContext = createContext(0)

function Counter(){
  const count = useContext(CountContext)  //一句话就可以得到count
  return (<h2>{count}</h2>)
}

function Example3(){
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+5  )}}>click me</button>   
      <CountContext.Provider value={count}>
      </CountContext.Provider>  

      <CountContext.Provider value={count}>
    <Counter />
</CountContext.Provider>
    </div>
  )
}
export default Example3
