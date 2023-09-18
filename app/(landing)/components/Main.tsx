import React from 'react'
import Nav from './Nav'
import Hero from './hero/Hero'
import Promo from './hero/Promo'
import Horarios from './horarios/Horarios'
import Proceso from './proceso/Proceso'
import PreguntasFrecuentes from './preguntasfrecuentes/PreguntasFrecuentes'
import Contacto from './contacto/Contacto'

export default function Main () {
  return (
    <main>
      <Nav />
      <Hero />
      <Promo />
      <Horarios />
      <Proceso />
      <PreguntasFrecuentes />
      <Contacto />
    </main>
  )
}
