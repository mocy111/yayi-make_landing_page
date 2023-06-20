"use client"
import React from 'react'
import Grid from '@mui/material/Grid'

import FormLayoutsTabs from '../views/forms/form-layouts/FormLayoutsTabs'
import DatePickerWrapper from '../@core/styles/libs/react-datepicker'


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

const page = async () => {

  const data = await getData()



  return (
    <DatePickerWrapper>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
        <FormLayoutsTabs data={data.data[0]} />
      </Grid>
    </DatePickerWrapper>
  )
}

export default page