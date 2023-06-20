'use client'
import Image from 'next/image'
import AboutImage from './about.jpg'
import { Icon } from '@iconify/react'

const AboutUs = ({ data }) => {
  // console.log(data)

  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='row gx-5'>
          <div className='col-lg-5 mb-5 mb-lg-0' style={{ minHeight: '500px' }}>
            <div className='position-relative h-100'>
              <Image
                src={data.image}
                alt='About Us'
                fill
                style={{ objectFit: 'cover' }}
                className='position-absolute w-100 h-100 rounded'
              />
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='mb-4'>
              <h5 className='d-inline-block text-primary text-uppercase border-bottom border-5'>{data.subtitle}</h5>
              <h1 className='display-4'>{data.title} </h1>
            </div>
            <p>{data.text}</p>
            <div className='row g-3 pt-3'>
              {data.icons.map((element, index) => (
                <div key={index} className='col-sm-3 col-6'>
                  <div className='bg-light text-center rounded-circle py-4'>
                    <Icon icon={element.icon} style={{ fontSize: '45px' }} className='text-primary mb-3' />
                    <h6 className='mb-0'>
                      {element.text}
                      <small className='d-block text-primary'>{element.subtitle}</small>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
