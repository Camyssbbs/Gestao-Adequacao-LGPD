import React from 'react'
import '../index.css'
import scanIcon from '../assets/scan.png';
import gesticon from '../assets/gestão.png';
import iaicon from '../assets/ia.png'
import requisicon from '../assets/registro.png'
import relaticon from '../assets/relatorios.png'
import integicon from '../assets/integração.png'

export default function Funcionalidades() {
    return (
        <section className="funcionalidades">
            <h2 className="func-title">Tudo o que sua empresa precisa.</h2>
            <div className="func-grid">
                <div className="func-card">
                    <img src={scanIcon} alt="Scanner" />
                    <p>Scanner automático de dados sensíveis</p>
                </div>
                <div className="func-card">
                    <img src={gesticon} alt="Consentimento" />
                    <p>Gestão de consentimento</p>
                </div>
                <div className="func-card">
                    <img src={iaicon} alt="IA riscos" />
                    <p>IA para avaliação de riscos</p>
                </div>
                <div className="func-card">
                    <img src={requisicon} alt="Requisições" />
                    <p>Registro de requisições (titular)</p>
                </div>
                <div className="func-card">
                    <img src={relaticon} alt="Relatórios ANPD" />
                    <p>Geração de relatórios para ANPD</p>
                </div>
                <div className="func-card">
                    <img src={integicon} alt="Integrações" />
                    <p>Integrações com ERPs/CRMs</p>
                </div>
            </div>
        </section>
    )
}
