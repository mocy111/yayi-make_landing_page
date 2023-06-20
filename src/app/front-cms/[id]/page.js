import React from 'react'
import Topbar from '../../landingPageComponents/Topbar/Topbar'
import Hero from '../../landingPageComponents/Hero'
import Header from '../../landingPageComponents/NavBar'
import AboutUs from '../../landingPageComponents/AboutUs'
import Services from '../../landingPageComponents/Services'
import Team from '../../landingPageComponents/Team'
import Testimonial from '../../landingPageComponents/Testimonial'
import Footer from '../../landingPageComponents/Footer'
import Appointment from '../../landingPageComponents/Appointment'
async function getData() {
  const res = await fetch('http://localhost:3000/front-cms/api',
  { cache:  'no-store' }
  // {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }
  );
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function Page() {
  const data = await getData()
  const newData = data.data[0];
  // console.log(newData);

  return (
    <>
       <Topbar data={newData.topbar} />
       <Header data={newData.header} />
      <Hero data={newData.hero} />
      <AboutUs data={newData.about} />
      <Services data={newData.service} />
      {/* <Team /> */}
      <Appointment />
      <Testimonial data={newData.testimonial} />
      <Footer data={newData.footer} />
    </>
  )
}

