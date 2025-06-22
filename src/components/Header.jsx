import React from 'react'
import '../index.css'

export default function Header() {
    return (
        <header>
            <div className="logo">LOGO</div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>

    )
}
