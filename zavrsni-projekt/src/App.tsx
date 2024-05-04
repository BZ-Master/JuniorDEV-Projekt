import { useState } from 'react'
import './App.css'
import NavButton from './components/NavButton'
import Aktivnost from './components/Aktivnost'
import AdminContext from './kontekst'
import Volonter from './components/Volonter'
import Udruga from './components/Udruga'

function App() {
  const [showInfo, setShowInfo] = useState(true)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  const [showTab4, setShowTab4] = useState(false)
  const [admin, setAdmin] = useState("user")

  function obrisi(e: any) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
  }

  function adminToggle() {
    setAdmin(admin == "admin" ? "user" : "admin")
  }

  return (
    <>
      <div id='nav' className='container' style={{ backgroundColor: "rgba(135, 206, 250, 0.6)" }}>
        <NavButton natpis="Početna" funkcija={() => {
          setShowInfo(true)
          setShowTab2(false)
          setShowTab3(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Aktivnosti" funkcija={() => {
          setShowTab2(true)
          setShowInfo(false)
          setShowTab3(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Volonteri" funkcija={() => {
          setShowTab3(true)
          setShowInfo(false)
          setShowTab2(false)
          setShowTab4(false)
        }}></NavButton>
        <NavButton natpis="Udruge" funkcija={() => {
          setShowTab4(true)
          setShowInfo(false)
          setShowTab2(false)
          setShowTab3(false)
        }}></NavButton>
        <input type='checkbox' id='adminTrigger' onChange={adminToggle} />
        <label htmlFor='adminTrigger'>ADMIN</label>
      </div>

      <br />

      {showInfo && (
        <>
          <div className='container main' id='info'>
            <h1>Aplikacija za volontiranje</h1>
            <p>Ova aplikacija olakšava pronalazak volonterskih aktivnosti, volontera i udruga. Aplikaciju je izradio Bartul Zavorović, maturant III. gimnazije, Split, kao završni projekt za EDIT JuniorDEV ReactJS tečaj.</p>
          </div>
          <br />
        </>
      )}

      {showTab2 && (
        <>
          <div className='container main'>
            <h1>Aktivnosti</h1>
            <div id='aktivnosti'>
              <AdminContext.Provider value={admin}>
                <Aktivnost naslov="Aktivnost 1" opis="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit hic dolor harum doloribus aspernatur at earum deserunt laboriosam, consectetur neque. Corporis deleniti non vitae in quo qui maxime quam?" funkcija={obrisi}></Aktivnost>
              </AdminContext.Provider>
              <br />
              <AdminContext.Provider value={admin}>
                <Aktivnost naslov="Aktivnost 2" opis="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit hic dolor harum doloribus aspernatur at earum deserunt laboriosam, consectetur neque. Corporis deleniti non vitae in quo qui maxime quam?" funkcija={obrisi}></Aktivnost>
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Aktivnost naslov="Aktivnost 3" opis="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit hic dolor harum doloribus aspernatur at earum deserunt laboriosam, consectetur neque. Corporis deleniti non vitae in quo qui maxime quam?" funkcija={obrisi}></Aktivnost>
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Aktivnost naslov="Aktivnost 4" opis="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit hic dolor harum doloribus aspernatur at earum deserunt laboriosam, consectetur neque. Corporis deleniti non vitae in quo qui maxime quam?" funkcija={obrisi}></Aktivnost>
              </AdminContext.Provider>
            </div>
          </div>
          <br />
        </>
      )}

      {showTab3 && (
        <>
          <div className='container main'>
            <h1>Volonteri</h1>
            <div id='volonteri'>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Volonter ime="Mate Matić" kontakt="matematic@gmail.com" grad="Solin" funkcija={obrisi} />
              </AdminContext.Provider>
            </div>
          </div>
          <br />
        </>
      )}

      {showTab4 && (
        <>
          <div className='container main'>
            <h1>Udruge</h1>
            <div id='udruge'>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
              <AdminContext.Provider value={admin}>
                <Udruga ime="Udruga volontera" adresa="Put volontera, 1" grad="Klis" funkcija={obrisi} />
              </AdminContext.Provider>
            </div>
          </div>
          <br />
        </>
      )}

      <footer className='container' style={{ backgroundColor: "rgba(80, 80, 80, 0.5)" }}>
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