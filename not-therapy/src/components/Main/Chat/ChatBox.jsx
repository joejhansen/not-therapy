import { useState } from "react"

function ChatBox({ history, setHistory }) {
    let [newEntry, setNewEntry] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const newEntry = {
            isUser: true,
            date: Date.now(),
            content: formJson.content,
        }
        console.log(history)
        if (history.length >= 25) {
            setHistory(history.shift())
            setHistory([...history, newEntry])
        }
        setHistory([...history, newEntry])
        form.reset()
        return null
    }
    return (
        <div className='col-12 d-flex justify-content-center'>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    name="content"
                    placeholder="What's on your mind?"
                    rows={1}
                    cols={60}
                    autoComplete="off"
                    onChange={e => setNewEntry(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ChatBox