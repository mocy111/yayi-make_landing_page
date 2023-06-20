'use client'
import React, { Fragment } from 'react'
import { Icon } from '@iconify/react'

const Topbar = ({ data }) => {
  return (
    <div className='container-fluid py-2 border-bottom d-none d-lg-block'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 text-center text-lg-start mb-2 mb-lg-0'>
            <div className='d-inline-flex align-items-center'>
              {data.contactInfo.map((contactInfo, index) => (
                <Fragment key={index}>
                  <a className='text-decoration-none text-body pe-3' href={contactInfo.href}>
                    <Icon icon={contactInfo.icon} className='mx-2' />
                    {contactInfo.text}
                  </a>
                  {index <= 0 && <span className='text-body'>|</span>}
                </Fragment>
              ))}
            </div>
          </div>
          <div className='col-md-6 text-center text-lg-end'>
            <div className='d-inline-flex align-items-center'>
              {data.socialLinks.map((socialLink, index) => (
                <a target='_blanck' className='text-body' key={index} href={socialLink.href}>
                  <Icon icon={socialLink.icon} className='me-2' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar
