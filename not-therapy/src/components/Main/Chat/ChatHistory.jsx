import { useState } from "react"
import Entry from './Entry'

function ChatHistory({ history }) {
    return (
        <div className='row'>
            <div className='col'>
                {history
                    ? history.map((entry, index)=>{
                        return(
                            <Entry entry={entry} key={index}/>
                        )
                    })
                    : <>fuck off</>}
            </div>
        </div>
    )
}

export default ChatHistory