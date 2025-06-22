import React from 'react'
import '../index.css'

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <div>
                    <h1>COMPLIANCE INTELIGENTE<br />PARA SUA EMPRESA</h1>
                    <p>Plataforma Automatizada para LGPD com IA</p>
                    <button className="btn-demonst">Agende uma Demonstração</button>
                </div>
                <div>
                    <img className='img-hero' src="/hero.svg" alt="tecnologia" />
                </div>
            </div>
        </section>
    )
}
