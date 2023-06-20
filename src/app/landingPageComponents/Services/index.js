'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Services = ({ data }) => {
  // console.log(data)

  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='text-center mx-auto mb-5' style={{ maxWidth: '500px' }}>
          <h5 className='d-inline-block text-primary text-uppercase border-bottom border-5'>{data.subtitle} </h5>
          <h1 className='display-5'>{data.text}</h1>
        </div>
        <div className='row g-5'>
          {data.services.map((service, index) => (
            <div key={index} className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center'>
                <div className='service-icon mb-4'>
                  <Icon icon={service.icon} style={{ fontSize: '30px' }} className='text-white' />
                </div>
                <h4 className='mb-3'>{service.name}</h4>
                <p className='m-0'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
