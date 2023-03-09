import { useState } from 'react'
import ChatBox from './components/Main/Chat/ChatBox'
import ChatHistory from './components/Main/Chat/ChatHistory'
import './App.css'
import './HeaderFooter.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const apiKey = import.meta.env.VITE_OPEN_AI_KEY
  console.log(apiKey)
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const styles = {
    headerOuter: {
      minHeight: `${6 * vh}px`
    },
    header: {
    },
    footerOuter: {
      minHeight: `${6 * vh}px`
    },
    footer: {
    },
    main: {
      minHeight: `${88 * vh}px`
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
      <header style={styles.headerOuter}>
        <span>
          <Header style={styles.header} />
        </span>
      </header>
      <main style={styles.main}>
        <div className='container' style={styles.mainContainer}>
          <div className='row' style={styles.mainRow}>
            <ChatHistory history={history} />
            <ChatBox history={history} setHistory={setHistory} />
          </div>
        </div>
      </main>
      <footer style={styles.footerOuter}>
        <span>
          <Footer style={styles.footer} />

        </span>
      </footer>
    </div>
  )
}

export default App
