 import {useEffect, useState} from 'react'
 import "./Count.css"

 
const Count = () => {

  let [count,setCount] = useState(0)

  const increment =()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    setCount(count-1)
  }
  const reset =()=>{
    setCount(0)
  }

  const sayHello=()=>{
    console.log("Hello")
  }

  useEffect(()=>{
    sayHello()
  },[count])

  return (
    <div className='main-container'>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <div className='btn-container'> 
        <button className='btn-1'onClick={()=> decrement()}>-</button>
        <button className='btn-2'onClick={()=> increment()}>+</button>
        <button className='btn-3'onClick={()=> reset()}>Reset</button>
      </div> 

    </div>
  )

}

 
 
 export default Count