import { useState } from 'react'
import './App.css'
import NavButton from './components/NavButton'

function App() {
  const [showInfo, setShowInfo] = useState(true)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  const [showTab4, setShowTab4] = useState(false)

  return (
    <>
      <div id='nav' className='container'>
        <NavButton natpis="Početna" funkcija={() => {
          setShowInfo(true)
          setShowTab2(false)
          setShowTab3(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Početna" funkcija={() => {
          setShowTab2(true)
          setShowInfo(false)
          setShowTab3(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Početna" funkcija={() => {
          setShowTab3(true)
          setShowInfo(false)
          setShowTab2(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Početna" funkcija={() => {
          setShowTab4(true)
          setShowInfo(false)
          setShowTab2(false)
          setShowTab3(false)
        }}></NavButton>
        <input type='checkbox' id='adminTrigger' />
        <label htmlFor='adminTrigger'>ADMIN</label>
      </div>
      <br />
      {showInfo && (
        <>
          <div className='container' id='info'>
            <h1>Aplikacija</h1>
            <p>Ova aplikacija je napravljena kao završni projekt za EDIT JuniorDEV ReactJS tečaj.</p>
          </div>
          <br />
        </>
      )}
      {showTab2 && (
        <>
          <div className='container'>
            <h1>TAB 2</h1>
          </div>
          <br />
        </>
      )}
      {showTab3 && (
        <>
          <div className='container'>
            <h1>TAB 3</h1>
          </div>
          <br />
        </>
      )}
      {showTab4 && (
        <>
          <div className='container'>
            <h1>TAB 4</h1>
          </div>
          <br />
        </>
      )}
      <footer className='container'>
        <p>Izradio: Bartul Zavorović</p>
        <div>
          <a href="https://github.com/BZ-Master/JuniorDEV-projekt">GitHub</a>
          <a href="https://www.youtube.com/@digitalnadalmacija/featured">YouTube</a>
          <a href="https://www.instagram.com/digitalnadalmacija/">Instagram</a>
          <a href="https://www.facebook.com/ictzupanija/">Facebook</a>
        </div>
      </footer>
    </>
  )
}

export default App