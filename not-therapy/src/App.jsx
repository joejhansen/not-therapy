import { useState } from 'react'
import ChatBox from './components/Main/Chat/ChatBox'
import ChatHistory from './components/Main/Chat/ChatHistory'
import './App.css'

function App() {
  
  const example = [
    {
      isUser: true,
      date: 1678146947110,
      content: 'test1',
    },
    {
      isUser: false,
      date: 1678146956310,
      content: 'test2',
    },
    {
      isUser: true,
      date: 1678146998646,
      content: 'test3',
    },
  ]
  let [history, setHistory] = useState(example)

  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
          <ChatHistory history={history} />
          <ChatBox history={history} setHistory={setHistory} />
        </div>
      </div>
    </div>
  )
}

export default App
