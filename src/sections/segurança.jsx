import React from 'react'
import '../index.css'
import seguranca from '../assets/segurança.svg'

export default function Seguranca() {
    return (
        <section className="seguranca-section">
            <div className="seguranca-container">
                <div className="seguranca-left">
                    <h2><span className="seguranca-title">Segurança</span> em primeiro lugar</h2>
                    <div className="seguranca-grid">
                        <div className="seg-card">
                            <p>Criptografia de ponta a ponta</p>
                            <a href="#">Ver Detalhes</a>
                        </div>
                        <div className="seg-card">
                            <p>Histórico de auditoria completo</p>
                            <a href="#">Ver Detalhes</a>
                        </div>
                        <div className="seg-card">
                            <p>Backups automáticos e seguros</p>
                            <a href="#">Ver Detalhes</a>
                        </div>
                        <div className="seg-card">
                            <p>Certificações: ISO 27001, SOC2</p>
                            <a href="#">Ver Detalhes</a>
                        </div>
                        <div className="seg-card">
                            <p>Aderência LGPD, GDPR e CCPA</p>
                            <a href="#">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
                <div className="seguranca-right">
                    <img src={seguranca} alt="Segurança" />
                </div>
            </div>
        </section>
    )
}
