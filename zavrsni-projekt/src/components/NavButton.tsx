const stilovi = {
    buttonSytle: {
        backgroundColor: "rgba(0, 0, 255, 0.6)",
        border: "black solid 1px",
        margin: "10px",
        padding: "25px",
        width: "125px",
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