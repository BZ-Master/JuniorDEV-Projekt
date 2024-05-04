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

function Aktivnost(props: any) {
    const admin = useContext(AdminContext)
    return (
        <div style={stilovi.divStyle} className='aktivnost'>
            <h4>{props.naslov}</h4>
            <p>{props.opis}</p>
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

export default Aktivnost