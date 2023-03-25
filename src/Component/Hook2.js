import React,{useState} from 'react'

function Hook2() {
    const intitialCount = 0;
    const [count,setCount] = useState(intitialCount)

    const IncrementFive = ()=>{
        for(let i=0;i<5;i++)
        setCount(prevcount => prevcount+1)
    }


  return (
    <div>

        Count:{count}
        <button onClick={()=>setCount(prevcount=>prevcount+2)}>Increment</button>
        <button onClick={()=>setCount(prevcount=>prevcount-1)}>Decrement</button>
        <button onClick={()=>setCount(intitialCount)}>Reset</button>
        {/* <button onClick={()=>setCount(count+5)}> Increment by 5</button> */}
        <button onClick={IncrementFive}> Increment 5</button>

    </div>
  )
}

export default Hook2