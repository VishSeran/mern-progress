import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import HomePage from './HomePage'


function App() {
  const [count, setCount] = useState(0)
  const [logIn, setLogIn] = useState(false);

  const login = () => setLogIn(true);
  const logout = () => setLogIn(false);

  return (
    <>
      <div>
        {logIn ? (
          <div>
            <HomePage />
            <LogoutButton logout={logout} />
          </div>

        ) : (
          <div>
              <h1>please click to login</h1>
              <LoginButton login = {login}/>
          </div>
          )
        }
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
