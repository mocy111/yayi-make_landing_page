'use client'
import React from 'react'
const Hero = ({ data }) => {
  // console.log(data)

  const imageStyle = {
    backgroundImage: `url(${data.image.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top right'
  }

  return (
    <div className='container-fluid bg-primary py-5 mb-5 hero-header' style={imageStyle}>
      <div className='container py-5'>
        <div className='row justify-content-start'>
          <div className='col-lg-8 text-center text-lg-start'>
            <h5
              className='d-inline-block text-primary text-uppercase border-bottom border-5'
              style={{ borderColor: 'rgba(256, 256, 256, .3) !important' }}
            >
              {data.content.subtitle}
            </h5>
            <h1 className='display-1 text-white mb-md-4'>{data.content.title}</h1>
            <div className='pt-2'>
              <a href={data.content.button1.href} className='btn btn-light rounded-pill py-md-3 px-md-5 mx-2'>
                {data.content.button1.text}
              </a>
              <a href={data.content.button2.href} className='btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2'>
                {data.content.button2.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
