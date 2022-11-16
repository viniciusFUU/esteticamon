import React from "react";
import './styles.css'

export default props => {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="header">
                    <a className="item" href="/" id="clinica">Marcação</a>
                </div>

                <div className="navbar-container">
                    <ul>
                        <li><a href="/agendados">Agendados</a></li>
                    </ul>
                    <ul>
                        <li><a href="#/Cadastro">Horários disponiveis</a></li>
                    </ul>                    
                </div>
            </div>
        </nav>
    )
}