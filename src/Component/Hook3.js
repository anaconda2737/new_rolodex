import React,{useState} from 'react'

function Hook3() {

    const[name,setName]=useState({FirstName:' ',LastName:' '})


  return (
    <div>
        <form>
            <input type="text"  value={name.FirstName} onChange={e=>setName({...name, FirstName:e.target.value})}/>
            <input type="text"  value={name.LastName} onChange={e=>setName({...name,LastName:e.target.value})}/>
            <h2> Your First Name is - {name.FirstName}</h2>
            <h2> Your  Last Name is - {name.LastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>

    </div>
  )
}

export default Hook3