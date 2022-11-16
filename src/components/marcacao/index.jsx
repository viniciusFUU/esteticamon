import React, {useState} from "react";
import './styles.css'

export default props => {
    const [marc, setMarc] = useState("")
    return(
        <div className="container">
            <label>Nome paciente:</label>
            <input type="text" />

            <label>Dia</label>
            <input type="date" />

            <label>Hora</label>
            <input type="time" id="txtHora" name="hora" />

            <button type="submit">Agendar</button>
        </div>
    )
}