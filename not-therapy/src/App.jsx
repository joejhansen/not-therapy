import { useState } from 'react'
import ChatBox from './components/Main/Chat/ChatBox'
import ChatHistory from './components/Main/Chat/ChatHistory'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const styles = {
    header: {
      minHeight: '6vh'
    },
    footer: {
      minHeight: '6vh'
    },
    main: {
      minHeight: '88vh'
    },
    mainContainer: {
      minHeight: 'inherit'
    },
    mainRow: {
      minHeight: 'inherit'
    }
  }
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
  let [history, setHistory] = useState([])

  return (
    <div className="App">
      <header style={styles.header}>
        <Header />
      </header>
      <main style={styles.main}>
        <div className='container' style={styles.mainContainer}>
          <div className='row' style={styles.mainRow}>
            <ChatHistory history={history} />
            <ChatBox history={history} setHistory={setHistory} />
          </div>
        </div>
      </main>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
