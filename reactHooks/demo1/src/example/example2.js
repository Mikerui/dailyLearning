import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Index(){
  useEffect(()=>{
    console.log('index');
  })
  return <h2> mike_ma</h2>
}
function List(){
  useEffect(()=>{
    // 进入
    console.log('list');
    // 解绑方法 离开这个页面才会触发
    return ()=>{
      console.log('list 解绑了');
    }
  },[])
  return <h2> List page</h2>
}



function Example2(){
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(`useEffect=>you click ${count} times`);
    return ()=>{
      console.log(444);
    }
    // 每次都解绑
  },[count])
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
export default Example2
