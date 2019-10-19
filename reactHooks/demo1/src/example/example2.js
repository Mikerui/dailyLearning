import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Index(){
  return <h2> mike_ma</h2>
}
function List(){
  return <h2> List page</h2>
}



function Example1(){
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(`useEffect=>you click ${count} times`);
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+5  )}}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>        
          <li><Link to="/list">列表</Link></li>    
          <Route path="/" exact component={Index} />    
          <Route path="/list" component={List} />    
        </ul>
      </Router>
    </div>
  )
}
export default Example1
