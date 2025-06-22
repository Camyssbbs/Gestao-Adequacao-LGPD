import '../index.css';
import marca from '../assets/marca.png';
import seguranca from '../assets/segurança.svg'; // Importando o SVG como imagem

export default function Beneficios() {
    const beneficios = [
        'Redução de multas e riscos legais',
        'Economia de tempo com automações',
        'Transparência com titulares de dados',
        'Diferencial competitivo para clientes',
    ];

    return (
        <section className="beneficios">
            <div className="beneficios-container">
                {/* Imagem na esquerda */}
                <div className="beneficios-left">
                    <img src={seguranca} alt="Beneficios" />
                </div>

                {/* Texto na direita */}
                <div className="beneficios-right">
                    <h2 className='beneficio-title2'>
                        <span className="beneficios-title">Benefícios</span> para sua Empresa.
                    </h2>
                    <ul className="beneficios-list">
                        {beneficios.map((item, index) => (
                            <li key={index} className="beneficio-item">
                                <img src={marca} alt="check" className="check-icon" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}
