'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Footer = ({ data }) => {
  // console.log(data)

  return (
    <>
      <div className='container-fluid bg-dark text-light mt-5 py-5'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-3 col-md-6'>
              <h4 className='d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4'>
                Get In Touch
              </h4>
              <p className='mb-4'>
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor
              </p>
              <p className='mb-2'>
                <Icon icon='mdi:map-marker' className='text-primary me-3' />
                123 Street, New York, USA
              </p>
              <p className='mb-2'>
                <Icon icon='ph:envelope' className='text-primary me-3' />
                info@example.com
              </p>
              <p className='mb-0'>
                <Icon icon='ph:phone-bold' className='text-primary me-3' />
                +012 345 67890
              </p>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h4 className='d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4'>
                Quick Links
              </h4>
              <div className='d-flex flex-column justify-content-start'>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Home
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  About Us
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Our Services
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Meet The Team
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Latest Blog
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h4 className='d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4'>
                Popular Links
              </h4>
              <div className='d-flex flex-column justify-content-start'>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Home
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  About Us
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Our Services
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Meet The Team
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light mb-2' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Latest Blog
                </Link>
                <Link style={{ textDecoration: 'none' }} className='text-light' href='#'>
                  <Icon icon='fa:angle-right' className='me-2' />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h4 className='d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4'>
                Newsletter
              </h4>
              <form action=''>
                <div className='input-group'>
                  <input type='text' className='form-control p-3 border-0' placeholder='Your Email Address' />
                  <button className='btn btn-primary'>Sign Up</button>
                </div>
              </form>
              <h6 className='text-primary text-uppercase mt-4 mb-3'>Follow Us</h6>
              <div className='d-flex'>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='btn btn-lg btn-primary btn-lg-square rounded-circle me-2'
                  href='#'
                >
                  <Icon icon='bi:twitter' className='mb-2' style={{ fontSize: '25px' }} />
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='btn btn-lg btn-primary btn-lg-square rounded-circle me-2'
                  href='#'
                >
                  <Icon icon='gg:facebook' className='mb-2' style={{ fontSize: '25px' }} />
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='btn btn-lg btn-primary btn-lg-square rounded-circle me-2'
                  href='#'
                >
                  <Icon icon='ri:linkedin-fill' className='mb-2' style={{ fontSize: '25px' }} />
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='btn btn-lg btn-primary btn-lg-square rounded-circle'
                  href='#'
                >
                  <Icon icon='bi:instagram' className='mb-2' style={{ fontSize: '25px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-dark text-light border-top border-secondary py-4'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-md-6 text-center text-md-start'>
              <p className='mb-md-0'>
                &copy;{' '}
                <Link style={{ textDecoration: 'none' }} className='text-primary' href='#'>
                  YAYI MAKE
                </Link>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
