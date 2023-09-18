'use client'
import React, { useEffect } from 'react'
import WhatsappMsg from './WhatsappMsg'

export default function Logo () {
  useEffect(() => {
    window['$']('.navbar').sticky({ topSpacing: 0 })
  }, [])
  return (
    <a className='navbar-brand' href={WhatsappMsg}>
      <i className='bi-car-front' />
      <span> Transitar</span>
    </a>
  )
}
