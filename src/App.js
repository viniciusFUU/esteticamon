import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./global.css";
import Main from './components/main/index'
import Agendados from './components/agendados/index'
import Horarios from './components/horarios/index'

const App = () => {
    const data = localStorage.getItem("transaction")
    const [transactionList, setTransactionList] = useState(data ? JSON.parse(data) : []
    )

    const [name, setName] = useState("")
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")

    useEffect(() => {
        const Name = transactionList.filter((item) => item.name).map((transaction) => String(transaction.name))
        const Day = transactionList.filter((item) => item.day).map((transaction) => Number(transaction.day))
        const Hour = transactionList.filter((item) => item.hour).map((transaction) => Number(transaction.hour))

        setName(`Nome: ${name}`)
        setDay(`Dia: ${day}`)
        setHour(`Hora: ${hour}`)
    }, [transactionList])

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionList, transaction]

        setTransactionList(newArrayTransactions)

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
    }

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/agendados" element={<Agendados/>}/>
                    <Route path="/horarios" element={<Horarios/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App