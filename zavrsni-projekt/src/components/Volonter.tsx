import { useContext } from 'react'
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

function Volonter(props: any) {
    const admin = useContext(AdminContext)
    return (
        <div style={stilovi.divStyle} className='volonter'>
            <h4>{props.ime}</h4>
            <p>{props.kontakt}</p>
            <p>{props.grad}</p>
            {(admin == "admin") && (
                <>
                    <button style={stilovi.buttonStyle} onClick={props.funkcija}>Obriši</button>
                    <br />
                    <br />
                </>
            )}
        </div>
    )
}

export default Volonter