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

function Udruga(props: any) {
    const admin = useContext(AdminContext)
    return (
        <div style={stilovi.divStyle} className='udruga'>
            <h4>{props.ime}</h4>
            <p>{props.adresa}</p>
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

export default Udruga