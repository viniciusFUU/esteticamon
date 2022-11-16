import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./global.css";
// import Header from './components/header/index'
// import Marcacao from './components/marcacao/index'
import Main from './components/main/index'
import Agendados from './components/agendados/index'

const App = () => {
    return(
        <div>
            {/* <Header />
            <Marcacao />      */}
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/agendados" element={<Agendados/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App