import { useState } from 'react'
function ButtonSuscribe() {
    const [suscribe, setSuscribe] = useState(true)
    return (
        <button onClick={() => setSuscribe(!suscribe)}>
            {
                suscribe ? "Suscrito" : "No Suscrito"
            }
        </button>
    )
}

export default ButtonSuscribe