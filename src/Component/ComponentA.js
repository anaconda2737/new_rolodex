import React from 'react'
import { UserContext,ChannelContext} from '../App'

function ComponentA() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user =>{
                    return(
                        <ChannelContext>
                            {
                                channel=>{
                                    return <div> User Context Value is {user}, Channel context value is {channel}</div>
                                }
                            }
                        </ChannelContext>
                    )
                     
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentA