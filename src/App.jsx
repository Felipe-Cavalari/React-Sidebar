import reactLogo from './assets/react.svg'
import {BiChevronRight, BiHomeAlt, BiBell, BiLogOut, BiSun, BiMoon} from 'react-icons/bi'
import { useState } from 'react'

import './App.css'


function App() {

const body = document.querySelector('body')
//const sidebar = body.querySelector('.sidebar')

const [sidebar, setSidebar] = useState('sidebar')
const [mode, setMode]  = useState('Dark Mode')

  return (
    
    <>
    
    <nav className={sidebar}>
        <header>
            <div className="image-text">
              <span className="image">
                <img src={reactLogo} alt="user-foto" />
              </span>

              <div className="text header-text">
                <span className="name">Felipe Cavalari</span>
                <div className="profession">Software Engineer</div>
              </div>

              <BiChevronRight className='toggle' onClick={() => {sidebar === 'sidebar' ? setSidebar('sidebar close') : setSidebar('sidebar')}}/>
            </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="">
                  <BiHomeAlt className='icon' />
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="">
                  <BiHomeAlt className='icon'/>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="">
                  <BiHomeAlt className='icon'/>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="">
                  <BiHomeAlt className='icon'/>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="">
                  <BiBell className='icon'/>
                  <span className="text nav-text">Notificações</span>
                </a>
              </li>

            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="">
                <BiLogOut className='icon'/>
                <span className="text nav-text">Sair</span>
              </a>
            </li>
            <li className='mode'>
              <div className="moon-sun">
                  <i><BiSun className='icon sun'/></i>
                  <i><BiMoon className='icon moon'/></i>
                </div>
                <span className="mode-text text">{mode}</span>

                <div className="toggle-switch" onClick={() => {
                  body.classList.toggle('dark')
                  mode === 'Dark Mode' ? setMode('Light Mode') : setMode('Dark Mode')
                }}>
                  <span className="switch"></span>
                </div>
            </li>
          </div>
        </div>
    </nav>

    <div className="pages">
        <h1>Dashboard</h1>
    </div>

    </>  
  )
}

export default App



