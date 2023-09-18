import React from 'react'

export default function PreguntasFrecuentes () {
  return (
    <section className='faq-section section-padding' id='section_4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <h2 className='mb-4'>Preguntas frecuentes</h2>
          </div>
          <div className='clearfix' />
          <div className='col-lg-5 col-12'>
            <img
              src='images/faq_graphic.jpg'
              className='img-fluid'
              alt='FAQs'
            />
          </div>
          <div className='col-lg-6 col-12 m-auto'>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Necesito estudiar teoría antes de tomar las calses?
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    No es necesario estudiar la teoría para tomar las clases de
                    manejo.{' '}
                    <strong>
                      Pero es recomendable que estudies durante todo el proceso
                      de aprendizaje.
                    </strong>{' '}
                    Te daremos del material teórico para que puedas
                    estudiar.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Cuantas clases necesito para sacar la liciencia?
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Puedes tomar <strong>10 diez</strong> clases y luego ir a rendir el examen. Pero si quieres estar mas preparado puedes tomar mas clases.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Hay promociones especiales?
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Si, debes consultar por {' '}
                    <code>Whatsapp</code>, Todas las semanas hay diferentes promociones.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
