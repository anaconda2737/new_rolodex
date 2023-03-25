import React,{useReducer} from 'react'
 const initialstate = {
  firstCounter: 0
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'Increment':
      return {firstCounter: state.firstCounter+1}
    case 'Decrement':
      return {firstCounter: state.firstCounter-1}
    case 'Reset':
      return initialstate
     default:
      return state      
  }

}

function Reducer2() {
  
 const[count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>

      <div>Count {count.firstCounter}</div>
      <button onClick={dispatch({type:'Increment '})}>Increment</button>
      <button onClick={dispatch({type:'Decrement'})}>Decrement</button>
      <button onClick={dispatch({type:'Reset'})}>Reset</button>

    </div>
  )
}

export default Reducer2