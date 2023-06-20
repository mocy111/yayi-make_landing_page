"use client"

import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const HeroForm = ({heroData,handleChange}) => {

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
          value={heroData.content.title}
          onChange={event => handleChange('content.title', event.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Sous titre' 
          value={heroData.content.subtitle}
          onChange={event => handleChange('content.subtitle', event.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Bouton 1' 
          value={heroData.content.button1.text}
          onChange={event => handleChange('content.button1.text', event.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Bouton 2' 
          value={heroData.content.button2.text}
          onChange={event => handleChange('content.button2.text', event.target.value)}
        />
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Url image ' 
          value={heroData.image.src}
          onChange={event => handleChange('image.src', event.target.value)}
        />
      </Grid>
                  
              </Grid>


              </>

  )
}

export default HeroForm