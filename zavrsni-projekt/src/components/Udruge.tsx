import Udruga from './Udruga'
import '../App.css'

function Udruge({ udruge, funkcija }: any) {
    return (
        <div id='udruge'>
            {udruge.map((el: any) => (
                <Udruga key={el.id} props={el} funkcija={funkcija} />
            ))}
        </div>
    )
}

export default Udruge