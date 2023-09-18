import React from 'react'
import Link from './Link'

export default function Links () {
  return (
    <ul className='navbar-nav ms-lg-5 me-lg-auto'>
      <Link />
      <li className='nav-item'>
        <a className='nav-link click-scroll' href='#section_2'>
          Horarios
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link click-scroll' href='#section_3'>
          Proceso
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link click-scroll' href='#section_4'>
        Preguntas Frequestes
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link click-scroll' href='#section_5'>
          Contacto
        </a>
      </li>
      {/* <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='navbarLightDropdownMenuLink'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Pages
        </a>
        <ul
          className='dropdown-menu dropdown-menu-light'
          aria-labelledby='navbarLightDropdownMenuLink'
        >
          <li>
            <a className='dropdown-item' href='topics-listing.html'>
              Topics Listing
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='contact.html'>
              Contact Form
            </a>
          </li>
        </ul>
      </li> */}
    </ul>
  )
}
