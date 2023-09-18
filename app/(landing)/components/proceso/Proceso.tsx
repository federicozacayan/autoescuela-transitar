import React from 'react'
import WhatsappMsg from '../WhatsappMsg'

export default function Proceso () {
  return (
    <section className='timeline-section section-padding' id='section_3'>
      <div className='section-overlay' />
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='text-white mb-4'>Proceso</h2>
          </div>
          <div className='col-lg-10 col-12 mx-auto'>
            <div className='timeline-container'>
              <ul
                className='vertical-scrollable-timeline'
                id='vertical-scrollable-timeline'
              >
                <div className='list-progress'>
                  <div className='inner' />
                </div>
                <li>
                  <h4 className='text-white mb-3'>
                    Agenda un horario en la semana
                  </h4>
                  <p className='text-white'>
                    La frecuencia de las clases es de 1 o 2 veces por semana.
                    Pero tambien puedes tomar una clases todos los dias.
                  </p>
                  <div className='icon-holder'>
                  <i className='bi-table' />
                  </div>
                </li>
                <li>
                  <h4 className='text-white mb-3'>
                    Realiza el pago de la clase
                  </h4>
                  <p className='text-white'>
                    Aceptamos Mercado Pago y otros medios de pago. Puedes pagar
                    con tarjeta de credito, debito o efectivo.
                  </p>
                  <div className='icon-holder'>
                    <i className='bi-credit-card' />
                  </div>
                </li>
                <li>
                  <h4 className='text-white mb-3'>Toma clases</h4>
                  <p className='text-white'>
                    Se te asignara un instructor que te acompañara en todo el
                    proceso de aprendizaje. Tendras a disposicion un auto con
                    doble comando para que puedas conducir acompañado de tu
                    instructor.
                  </p>
                  <div className='icon-holder'>
                    <i className='bi-car-front' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 text-center mt-5'>
            <p className='text-white'>
            ¿Queres saber más?
              <a href={WhatsappMsg} className='btn custom-btn custom-border-btn ms-3'>
                Contactanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
