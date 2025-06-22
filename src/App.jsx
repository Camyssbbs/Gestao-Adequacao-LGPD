import React from 'react'
import Header from './components/Header'
import Funcionalidades from './sections/Funcionalidades'
import Hero from './sections/Hero'
import Seguranca from './sections/segurança'
import Beneficios from './sections/Beneficios'


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Funcionalidades />
        <Seguranca />
        <Beneficios />
      </main>
    </>
  )
}
