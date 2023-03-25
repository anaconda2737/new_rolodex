import React, { useEffect, useState } from 'react'



function SideEffect() {
  const[count,setCount]=useState(0)
const[name,setName] = useState('')

useEffect(()=>{
    console.log("update")
},[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        <button onClick={()=> setCount(count+1)}> Click {count}</button>
    </div>
  )
}

export default SideEffect