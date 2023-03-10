import { useState } from 'react'
import { FaRocket } from 'react-icons/fa';

import {Ant} from './Ant'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src="/vite.svg" className="logo" alt="Vite logo" /> */}
          <Ant className={'logo'}/>
        </a>
        <a href="https://reactjs.org" target="_blank">
          <FaRocket className='logo react' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
