import React,{useState,useEffect} from 'react'
import axios from "axios";

function ApiCall() {
    // const[posts, setPost] = useState([])

    const[post,setOnepost] = useState({})
    const [id,setId] = useState(1)
    const[idfromButtonClick,setidfromButtonClick] = useState(1)

    const Click = ()=>{
        setidfromButtonClick(id)
    }


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
        .then( res =>{

            console.log(res)
            // setPost(res.data)
            setOnepost(res.data)

        })
        .catch(err =>{
            console.log(err)
        })

        

        
    },[idfromButtonClick])




  return (
    <div>

        <input type="text" value={id} onChange={e=>setId(e.target.value)} />

        {post.title}
        <button type="button" onClick={Click}> Fetch data</button>

        {/* {posts.map(item=><li key={item.id}>

            {item.title}


        </li>)} */}

    </div>
  )
}

export default ApiCall