import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./global.css";
import Main from './components/main/index'
import Agendados from './components/agendados/index'
import Horarios from './components/horarios/index'

const App = () => {
    // const data = localStorage.getItem("transaction")
    // const [transactionList, setTransactionList] = useState(data ? JSON.parse(data) : [])

    // useEffect(() => {

    // }, [transactionList])

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