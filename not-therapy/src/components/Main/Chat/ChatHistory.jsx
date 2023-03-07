import { useState } from "react"
import Entry from './Entry'

function ChatHistory({ history }) {
    const styles = {
        ul: {
            listStyleType: 'none',
            padding: '0'
        }
    }

    return (
        <div className='col-12 d-flex align-items-end justify-content-center'>
            <ul style={styles.ul}>
                {history.length
                    ? history.map((entry, index) => {
                        return (
                            <Entry entry={entry} key={index} />
                        )
                    })
                    : <>fuck off</>}
            </ul>
        </div>
    )
}

export default ChatHistory