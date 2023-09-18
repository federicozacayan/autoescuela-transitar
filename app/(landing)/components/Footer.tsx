'use client'
import React from 'react'
import WhatsappMsg from './WhatsappMsg'
import { dominio, urlRoot } from './Dominio'

export default function Footer () {
  const link = (sufix) =>{
    location.href = WhatsappMsg + sufix
    // console.log("hola")
  }
  return (
    <footer className='site-footer section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-12 mb-4 pb-2'>
            <a className='navbar-brand mb-2' href={WhatsappMsg}>
              <i className='bi-car-front' />
              <span> Transitar</span>
            </a>
          </div>
          <div className='col-lg-3 col-md-4 col-6'>
            <h6 className='site-footer-title mb-3'>Links utiles</h6>
            <ul className='site-footer-links'>
              <li className='site-footer-link-item'>
                <a
                  href='https://www.argentina.gob.ar/seguridadvial'
                  className='site-footer-link'
                >
                  Seguridad Vial
                </a>
              </li>
              {/* <li className='site-footer-link-item'>
                <a
                  href='https://www.gba.gob.ar/seguridadvial'
                  className='site-footer-link'
                >
                  Provincia de Buenos Aires
                </a>
              </li> */}
              <li className='site-footer-link-item'>
                <a
                  href='https://www.argentina.gob.ar/servicio/mi-primera-licencia'
                  className='site-footer-link'
                >
                  Mi primera licencia
                </a>
              </li>
              {/* <li className='site-footer-link-item'>
                <a href='#' className='site-footer-link'>
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
          <div className='col-lg-3 col-md-4 col-6 mb-4 mb-lg-0'>
            <h6 className='site-footer-title mb-3'>Contaco</h6>
            <p className='text-white d-flex mb-1'>
              <a href={WhatsappMsg} className='site-footer-link'>
                11 6737-2034
              </a>
            </p>
            <p className='text-white d-flex'>
              <a href='mailto:info.transitar@gmail.com' className='site-footer-link'>
              info.transitar@gmail.com
              </a>
            </p>
          </div>
          <div className='col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto'>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Ver Horarios
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <button className='dropdown-item'  onClick={()=>link(" Los dias lunes.")} type='button'>
                    Lunes
                  </button>
                </li>
                <li>
                  <button className='dropdown-item'  onClick={()=>link(" Los dias martes.")} type='button'>
                    Martes
                  </button>
                </li>
                <li>
                  <button className='dropdown-item'  onClick={()=>link(" Los dias miercoles.")} type='button'>
                    Miercoles
                  </button>
                </li>
                <li>
                  <button className='dropdown-item'  onClick={()=>link(" Los dias jueves.")} type='button'>
                    Jueves
                  </button>
                </li>
                <li>
                  <button className='dropdown-item'  onClick={()=>link(" Los dias viernes.")} type='button'>
                    Viernes
                  </button>
                </li>
              </ul>
            </div>
            <p className='copyright-text mt-lg-5 mt-4'>
              Copyright © 2023 
              <br />
              <a href={urlRoot}>www.{dominio}</a>
              {/* 
              <br />
              Design:{' '}
              <a rel='nofollow' href='www.transitar.com' target='_blank'>
              www.transitar.com
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
