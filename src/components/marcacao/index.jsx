import React, {useState} from "react";
import './styles.css'

const Form = ({ handleAdd, transactionList, setTransactionList}) => {
    const [name, setName] = useState("")
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if(!name || !day || !hour){
            alert("Preencha corretamente.")
            return
        }

        const transaction ={
            id: generateID(),
            name: name,
            day: day,
            hour: hour,
        }

        handleAdd(transaction)

        setName('')
        setDay('')
        setHour('')

    }
    return(
        <div className="container">
            <label>Nome paciente:</label>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />

            <label>Dia</label>
            <input 
                type="date"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />

            <label>Hora</label>
            <input 
                type="time" 
                value={hour}
                onChange={(e) => setHour(e.target.value)}    
            />

            <button onClick={handleSave}>Agendar</button>
        </div>
    )
}

export default Form