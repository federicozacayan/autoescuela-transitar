import React from 'react'
import WhatsappMsg from '../WhatsappMsg'

export default function Promo () {
  return (
    <section className='featured-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-12 mb-4 mb-lg-0'>
            <div className='custom-block bg-white shadow-lg'>
              <a href={WhatsappMsg}>
                <div className='d-flex'>
                  <div>
                    <h5 className='mb-2'>Agendar clases</h5>
                    <p className='mb-0'>
                      Puedes agendar 10 clases para que puedas aprender a conducir.
                    </p>
                  </div>
                  {/* <span className='badge bg-finance rounded-pill ms-auto'>
                    10
                  </span> */}
                </div>
                <img
                  src='images/transitar/transitar-hombre-small.jpg'
                  className='custom-block-image img-fluid rounded-3'
                  alt=''
                />
              </a>
            </div>
          </div>
          <div className='col-lg-6 col-12'>
            <div className='custom-block custom-block-overlay'>
              <div className='d-flex flex-column h-100'>
                <img
                  src='images/transitar/transitar-small.jpg'
                  className='custom-block-image img-fluid'
                  alt=''
                />
                <div className='custom-block-overlay-text d-flex'>
                  <div>
                    <h5 className='text-white mb-2'>Clase de Prueba</h5>
                    <p className='text-white'>
                      La primera clase es gratis. Si no te gusta la clase te
                      deolvemos el dinero.
                      <div>
                        <b> Se requiere pago previo</b>
                      </div>
                    </p>
                    <a
                      href={WhatsappMsg}
                      className='btn custom-btn mt-2 mt-lg-3'
                    >
                      Agendar ahora
                    </a>
                  </div>
                  {/* <span className='badge bg-finance rounded-pill ms-auto'>
                    1
                  </span> */}
                </div>
                <div className='social-share d-flex'>
                  <p className='text-white me-4'>Comparte:</p>
                  <ul className='social-icon'>
                    <li className='social-icon-item'>
                      <a href={WhatsappMsg} className='social-icon-link bi-twitter' />
                    </li>
                    <li className='social-icon-item'>
                      <a href={WhatsappMsg} className='social-icon-link bi-facebook' />
                    </li>
                    {/* <li className='social-icon-item'>
                      <a href='#' className='social-icon-link bi-pinterest' />
                    </li> */}
                  </ul>
                  <a href={WhatsappMsg} className='custom-icon bi-bookmark ms-auto' />
                </div>
                <div className='section-overlay' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
