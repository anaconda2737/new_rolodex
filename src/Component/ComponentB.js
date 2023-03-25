import React,{useContext} from 'react'
import ComponentA from './ComponentA'
import { UserContext,ChannelContext } from '../App'


function ComponentB() {
   const context = useContext(UserContext)
   const Channel = useContext(ChannelContext)
  return (
    <div>
        {context} - {Channel}
    </div>
  )
}

export default ComponentB