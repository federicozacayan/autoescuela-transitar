import React from 'react'
import Logo from './Logo'
import Links from './links/Links'

export default function Nav() {

  return (
    <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Logo />
          <div className='d-lg-none ms-auto me-4'>
            <a href='#top' className='navbar-icon bi-person smoothscroll' />
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <Links />
            {/* <div className='d-none d-lg-block'>
              <a href='#top' className='navbar-icon bi-person smoothscroll' />
            </div> */}
          </div>
        </div>
      </nav>
  )
}
