import React,{useState,useEffect} from 'react';

function Hook6() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

    useEffect(()=>{
        console.log('Updating Document title')
        // document.title = `You Clicked ${count}`
    });

    
  return (
    <div>
        <input type = "text" value={name} onChange={event=>setName(event.target.value)}/>
        <button onClick={()=>setCount(count+1)}> Count {count} </button>

    </div>
  )
}

export default Hook6