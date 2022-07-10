import {SessionProvider} from 'next-auth/react'
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="min-h-screen bg-yellow-400">
      <header className="">
        {/* <SessionProvider session={session}>
          <div>
            <App {...pageProps}></App>            
          </div>
        </SessionProvider> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}       
        <Home></Home>
      </header>  
    </div>
  )
}

export default App
