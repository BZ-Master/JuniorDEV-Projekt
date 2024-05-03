const stilovi = {
    buttonSytle: {
        backgroundColor: "grey",
        border: "black solid 1px",
        margin: "10px",
        padding: "35px"
    }
}

function NavButton(props: any) {
    return (
        <>
            <button style={stilovi.buttonSytle} onClick={props.funkcija}>{props.natpis}</button>
        </>
    )
}

export default NavButton