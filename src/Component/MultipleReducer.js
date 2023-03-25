import React,{useReducer} from 'react'

const initialState = 0;

   const reducer = (state,action)=>{

    switch(action){

        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        case 'Reset':
            return initialState        

    }

 }
function MultipleReducer() {
const[count, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
        <div>Count {count}</div>
    </div>
  )
}

export default MultipleReducer