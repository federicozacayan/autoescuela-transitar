import React from 'react'
import WhatsappMsg from '../WhatsappMsg'

export default function Contacto () {
  return (
    <section
      className='contact-section section-padding section-bg'
      id='section_5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-12 text-center'>
            <h2 className='mb-5'>Contaco</h2>
          </div>
          <div className='col-lg-5 col-12 mb-4 mb-lg-0'>
            <iframe
              className='google-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0730653290284!2d-58.37640392492931!3d-34.60231387295478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacce3457405%3A0xfc9bf66d7ab8c20f!2sSan%20Mart%C3%ADn%20483%2C%20C1004AAI%20CABA!5e0!3m2!1sen!2sar!4v1695047519958!5m2!1sen!2sar'
              width='100%'
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <div className='col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto'>
            <h4 className='mb-3'>Oficina</h4>
            <p>San Martín 483, Piso 7</p>
            <hr />
            {/* <p className='d-flex align-items-center mb-1'>
                <span className='me-2'>Phone</span>
                <a href='tel: +5491167372034' className='site-footer-link'>
                  11 6737-2034
                </a>
              </p> */}
            <p className='d-flex align-items-center'>
              <span className='me-2'>Email</span>
              <a
                href='mailto:info.transitar@gmail.com'
                className='site-footer-link'
              >
                info.transitar@gmail.com
              </a>
            </p>
          </div>
          {/* Oficina Virtual */}
          <div className='col-lg-3 col-md-6 col-12 mx-auto'>
            <h4 className='mb-3'>Oficina Virtual</h4>
            <p>Whatsapp Cuenta Empresa</p>
            <hr />
            <p className='d-flex align-items-center mb-1'>
              <span className='me-2'>Phone</span>
              <a href={WhatsappMsg} className='site-footer-link'>
                11 6737-2034
              </a>
            </p>
            {/* <p className='d-flex align-items-center'>
                <span className='me-2'>Email</span>
                <a href='mailto:info.transitar@gmail.com' className='site-footer-link'>
                  info.transitar@gmail.com
                </a>
              </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
