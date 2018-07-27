import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Criando componente para evitar repetição */}
            <Link to="/">
                <i className="fa fa-home"></i> início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> usuários
            </Link>
        </nav>
    </aside>