import { useState } from "react"
import Entry from './Entry'

function ChatHistory({ history }) {
    const styles = {
        ul: {
            listStyleType: 'none',
            padding: '0',
            outline: 'dashed red',
            overflow: 'visible'
        },
        wrapper: {
            outline: 'dashed red',
        },
        fOff: {
            textAlign: 'center',
            padding: '0'
        }
    }

    return (
        <div className='col d-flex align-items-end justify-content-center' style={styles.wrapper}>
            <div className="col-xl-4 col-lg-6 col-m-8 col-sm-10 col-xs-12">
                <ul style={history.length ? styles.ul : styles.fOff}>
                    {history.length
                        ? history.map((entry, index) => {
                            return (
                                <Entry entry={entry} key={index} />
                            )
                        })
                        : <>fuck off</>}
                </ul>
            </div>
        </div>
    )
}

export default ChatHistory