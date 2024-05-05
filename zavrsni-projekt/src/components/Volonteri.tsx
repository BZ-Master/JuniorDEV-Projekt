import Volonter from './Volonter'
import '../App.css'

function Aktivnosti({ volonteri, funkcija }: any) {
    return (
        <div id='volonteri'>
            {volonteri.map((el: any) => (
                <Volonter key={el.id} props={el} funkcija={funkcija} />
            ))}
        </div>
    )
}

export default Aktivnosti