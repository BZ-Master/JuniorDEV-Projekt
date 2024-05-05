import Aktivnost from "./Aktivnost";
import '../App.css'

function Aktivnosti({ aktivnosti, funkcija }: any) {
    return (
        <div id='aktivnosti'>
            {aktivnosti.map((el: any) => (
                <Aktivnost key={el.id} props={el} funkcija={funkcija} />
            ))}
        </div>
    )
}

export default Aktivnosti