"use client"

import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const ServicesForm = ({servicesData,handleChange}) => {
    // console.log(servicesData);
  return (
    <>
    
    <Grid container spacing={5}>
      <Grid item xs={12} >
        <Typography >Contenu</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Titre'
          value={servicesData.text}
          onChange={handleChange}
          name='text'
        />
      </Grid>

 

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Sous titre'
          value={servicesData.subtitle}
          onChange={handleChange}
          name='subtitle'
        />
      </Grid>

      <Grid item xs={12} >
        <Typography >Liste des services</Typography>
      </Grid>
      {servicesData.services.map((icon, index) => (
  <Grid item xs={12} sm={4} key={index}>
    <TextField
      fullWidth
      sx={{ py: 2 }}
      value={servicesData.services[index]?.name || ""}
      label="Nom"
      onChange={handleChange}
      name={`services-${index}-name`}
    />
    <TextField
      sx={{ py: 2 }}
      fullWidth
      label="Description"
      value={servicesData.services[index]?.description || ""}
      onChange={handleChange}
      name={`services-${index}-description`}
    />
    <TextField
      sx={{ py: 2 }}
      fullWidth
      label="Icone"
      value={servicesData.services[index]?.icon || ""}
      onChange={handleChange}
      name={`services-${index}-icon`}
    />
  </Grid>
))}


                  
  </Grid>


  </>

  )
}

export default ServicesForm