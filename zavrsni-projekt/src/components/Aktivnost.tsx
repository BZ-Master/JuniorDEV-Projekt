import { useContext, useState } from 'react'
import AdminContext from '../kontekst'
import '../App.css'

const stilovi = {
    divStyle: {
        border: "1px black solid",
        borderRadius: "5px",
        backgroundColor: "aliceblue"
    },

    buttonStyle: {
        backgroundColor: "red",
        border: "1px black solid"
    }
}

function Aktivnost({ props, funkcija }: any) {
    const admin = useContext(AdminContext)
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='aktivnost' style={stilovi.divStyle}>
                <h4>{props.ime}</h4>
                <p>{props.datum} {props.vrijeme} {props.grad}</p>
                <button style={{ backgroundColor: "blue", marginRight: "3px", border: "1px black solid" }} onClick={() => { setShowModal(true) }}>Prikaži</button>
                {(admin == "admin") && (
                    <>
                        <button style={stilovi.buttonStyle} onClick={funkcija}>Obriši</button>
                    </>
                )}
                <br />
                <br />
            </div>

            {showModal && (<div className="modal display-block">
                <section className="modal-main">
                    <div className='mainModalContent'>
                        <h3>{props.ime}</h3>
                        <h4>{props.udruga}</h4>
                        <p>{props.grad}</p>
                        <p>{props.datum}</p>
                        <p>{props.vrijeme}</p>
                        <p>{props.opis}</p>
                        <h5>Sudionici:</h5>
                        <div className='sudionici'>
                            {props.sudionici.map((el: any) => (
                                <p key={el.ime}>{el.ime}</p>
                            ))}
                        </div>
                    </div>
                    <button style={{ backgroundColor: "green", marginRight: "3px" }}>Prijavi se</button>
                    <button style={{backgroundColor: "blue"}} onClick={() => {
                        setShowModal(false)
                    }}>Zatvori</button>
                </section>
            </div>)}
        </>
    )

}

export default Aktivnost