import { useState, useEffect } from 'react'
import './App.css'
import NavButton from './components/NavButton'
import AdminContext from './kontekst'
import axios from 'axios'
import Aktivnosti from './components/Aktivnosti'
import Volonteri from './components/Volonteri'
import Udruge from './components/Udruge'

function App() {
  const [showInfo, setShowInfo] = useState(true)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  const [showTab4, setShowTab4] = useState(false)
  const [admin, setAdmin] = useState("user")
  const [aktivnosti, setAktivnosti] = useState([])
  const [volonteri, setVolonteri] = useState([])
  const [udruge, setUdruge] = useState([])
  const [novaAktivnost, setNovaAktivnost] = useState(false)
  const [noviVolonter, setNoviVolonter] = useState(false)
  const [novaUdruga, setNovaUdruga] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3000/aktivnosti")
      .then(res => setAktivnosti(res.data))

    axios
      .get("http://localhost:3000/volonteri/")
      .then(res => setVolonteri(res.data))

    axios
      .get("http://localhost:3000/udruge/")
      .then(res => setUdruge(res.data))
  }, [])

  function obrisi(e: any) {
    let potvrda = confirm(`Želite li izbrisati odabranu aktivnost/volontera/udrugu?`)
    if (potvrda) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
      
  }

  function adminToggle() {
    setAdmin(admin == "admin" ? "user" : "admin")
  }

  function obradiAktivnost(objekt: any) {
    return {
      "ime": objekt.ime,
      "datum": objekt.datum,
      "vrijeme": objekt.vrijeme,
      "grad": objekt.grad,
      "udruga": objekt.udruga,
      "opis": objekt.opis,
      "sudionici": objekt.sudionici,
      "id": objekt.id
    }
  }

  function obradiVolontera(objekt: any) {
    return {
      "ime": objekt.ime,
      "kontakt": objekt.kontakt,
      "grad": objekt.grad
    }
  }

  function obradiUdrugu(objekt: any) {
    return {
      "ime": objekt.ime,
      "adresa": objekt.adresa,
      "grad": objekt.grad,
      "id": objekt.id
    }
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
            <AdminContext.Provider value={admin}>
              <Aktivnosti aktivnosti={aktivnosti} funkcija={obrisi} />
            </AdminContext.Provider>
            <button style={{ backgroundColor: "green", margin: "5px", border: "1px black solid" }} onClick={() => {
              setNovaAktivnost(true)
            }}>(+)</button>
          </div>

          {novaAktivnost && (
            <div className="modal display-block">
              <section className="modal-main">
                <div className='mainModalContent' id='novaAktivnost'>
                  <h3 style={{ color: "black" }}>Nova aktivnost</h3>
                  <form>
                    <label htmlFor='imeAktivnosti'>Naziv: </label>
                    <input name='imeAktivnosti' required id='imeAktivnosti'></input><br /><br />
                    <label htmlFor='datumAktivnosti'>Datum: </label>
                    <input name='datumAktivnosti' required id='datumAktivnosti'></input><br /><br />
                    <label htmlFor='vrijemeAktivnosti'>Vrijeme: </label>
                    <input name='vrijemeAktivnosti' required id='vrijemeAktivnosti'></input><br /><br />
                    <label htmlFor='gradAktivnosti'>Grad: </label>
                    <input name='gradAktivnosti' required id='gradAktivnosti'></input><br /><br />
                    <label htmlFor='udrugaAktivnosti'>Udruga: </label>
                    <input name='udrugaAktivnosti' required id='udrugaAktivnosti'></input><br /><br />
                    <label htmlFor='opisAktivnosti'>Opis: </label>
                    <input name='opisAktivnosti' className='opis' required id='opisAktivnosti'></input><br /><br />
                  </form>
                </div>
                <button style={{ backgroundColor: "green", marginRight: "3px" }} onClick={() => {
                  let obj = {
                    ime: document.getElementById("imeAktivnosti").value,
                    datum: document.getElementById("datumAktivnosti").value,
                    vrijeme: document.getElementById("vrijemeAktivnosti").value,
                    grad: document.getElementById("gradAktivnosti").value,
                    udruga: document.getElementById("udrugaAktivnosti").value,
                    opis: document.getElementById("opisAktivnosti").value,
                    sudionici: [],
                    id: Math.floor(Math.random() * (10 ** 10))
                  }
                  axios.post("http://localhost:3000/aktivnosti", obradiAktivnost(obj))
                }}>Stvori</button>
                <button style={{ backgroundColor: "blue" }} onClick={() => {
                  setNovaAktivnost(false)
                }}>Zatvori</button>
              </section>
            </div>)}
          <br />
        </>
      )}

      {showTab3 && (
        <>
          <div className='container main'>
            <h1>Volonteri</h1>
            <AdminContext.Provider value={admin}>
              <Volonteri volonteri={volonteri} funkcija={obrisi} />
            </AdminContext.Provider>
            <button style={{ backgroundColor: "green", margin: "5px", border: "1px black solid" }} onClick={() => {
              setNoviVolonter(true)
            }}>(+)</button>
          </div>

          {noviVolonter && (
            <div className="modal display-block">
              <section className="modal-main">
                <div className='mainModalContent' id='noviVolonter'>
                  <h3 style={{ color: "black" }}>Novi volonter</h3>
                  <form>
                    <label htmlFor='imeVolontera'>Ime i prezime: </label>
                    <input name='imeVolontera' required id='imeVolontera'></input><br /><br />
                    <label htmlFor='kontaktVolontera'>Kontakt: </label>
                    <input name='kontaktVolontera' required id='kontaktVolontera'></input><br /><br />
                    <label htmlFor='gradVolontera'>Grad: </label>
                    <input name='gradVolontera' required id='gradVolontera'></input><br /><br />
                  </form>
                </div>
                <button style={{ backgroundColor: "green", marginRight: "3px" }} onClick={() => {
                  let obj = {
                    ime: document.getElementById("imeVolontera").value,
                    kontakt: document.getElementById("kontaktVolontera").value,
                    grad: document.getElementById("gradVolontera").value,
                    id: Math.floor(Math.random() * (10 ** 10))
                  }
                  axios.post("http://localhost:3000/volonteri", obradiVolontera(obj))
                }}>Stvori</button>
                <button style={{ backgroundColor: "blue" }} onClick={() => {
                  setNoviVolonter(false)
                }}>Zatvori</button>
              </section>
            </div>)}
          <br />
        </>
      )}

      {showTab4 && (
        <>
          <div className='container main'>
            <h1>Udruge</h1>
            <AdminContext.Provider value={admin}>
              <Udruge udruge={udruge} funkcija={obrisi} />
            </AdminContext.Provider>
            <button style={{ backgroundColor: "green", margin: "5px", border: "1px black solid" }} onClick={() => {
              setNovaUdruga(true)
            }}>(+)</button>
          </div>
          {novaUdruga && (
            <div className="modal display-block">
              <section className="modal-main">
                <div className='mainModalContent' id='novaUdruga'>
                  <h3 style={{ color: "black" }}>Nova udruga</h3>
                  <form>
                    <label htmlFor='imeUdruge'>Naziv: </label>
                    <input name='imeUdruge' required id='imeUdruge'></input><br /><br />
                    <label htmlFor='adresaUdruge'>Adresa: </label>
                    <input name='adresaUdruge' required id='adresaUdruge'></input><br /><br />
                    <label htmlFor='gradUdruge'>Grad: </label>
                    <input name='gradUdruge' required id='gradUdruge'></input><br /><br />
                  </form>
                </div>
                <button style={{ backgroundColor: "green", marginRight: "3px" }} onClick={() => {
                  let obj = {
                    ime: document.getElementById("imeUdruge").value,
                    adresa: document.getElementById("adresaUdruge").value,
                    grad: document.getElementById("gradUdruge").value,
                    id: Math.floor(Math.random() * (10 ** 10))
                  }
                  axios.post("http://localhost:3000/udruge", obradiUdrugu(obj))
                }}>Stvori</button>
                <button style={{ backgroundColor: "blue" }} onClick={() => {
                  setNovaUdruga(false)
                }}>Zatvori
                </button>
              </section>
            </div>)}
          <br/>
        </>)}

    <footer className='container' style={{ backgroundColor: "rgba(80, 80, 80, 0.5)" }}>
      <p>Izradio: Bartul Zavorović</p>
      <div>
        <a href="https://github.com/BZ-Master/JuniorDEV-projekt">GitHub</a>
        <a href="https://www.youtube.com/@digitalnadalmacija/featured">YouTube</a>
        <a href="https://www.instagram.com/digitalnadalmacija/">Instagram</a>
        <a href="https://www.facebook.com/ictzupanija/">Facebook</a>
      </div>
    </footer>
  </>)
}


export default App