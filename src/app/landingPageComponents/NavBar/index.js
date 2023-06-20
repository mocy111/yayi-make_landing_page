'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'
const Header = ({ data }) => {
  // console.log(data)
  return (
    <div className='container-fluid sticky-top bg-white shadow-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0'>
          {
            <Link href={data.logo.href} className='navbar-brand'>
              <h1 className='m-0 text-uppercase text-primary'>
                <Icon icon={data.logo.icon} className='me-2' />
                {data.logo.text}
              </h1>
            </Link>
          }

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <div className='navbar-nav ms-auto py-0'>
              {data.links.map((link, index) =>
                !link.dropdown ? (
                  <Link key={index} href={link.href} className='nav-item nav-link '>
                    {link.text}
                  </Link>
                ) : (
                  <div key={index} className='nav-item dropdown'>
                    <Link href='#' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
                      {link.dropdown.title}
                    </Link>
                    <div className='dropdown-menu m-0'>
                      {link.dropdown.links.map((link, index) => (
                        <Link key={index} className='dropdown-item' href={link.href}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
