"use client"

import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const AboutForm = ({aboutData,handleChange}) => {
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
          value={aboutData.title}
          onChange={handleChange}
          name='title'
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Image'
          value={aboutData.image}
          onChange={handleChange}
          name='image'
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Texte'
          value={aboutData.text}
          onChange={handleChange}
          name='text'
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Texte'
          value={aboutData.subtitle}
          onChange={handleChange}
          name='subtitle'
        />
      </Grid>

      {aboutData.icons.map((icon, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <TextField
            sx={{ py: 2 }}
            fullWidth
            label="Texte"
            value={aboutData.icons[index]?.text || ""}
            onChange={handleChange}
            name={`icons-${index}-text`}
          />
          
          <TextField
            sx={{ py: 2 }}
            fullWidth
            label="Sous titre"
            value={aboutData.icons[index]?.subtitle || ""}
            onChange={handleChange}
            name={`icons-${index}-subtitle`}
          />

          <TextField
            fullWidth
            sx={{ py: 2 }}
            value={aboutData.icons[index]?.icon || ""}
            label="Icone"
            onChange={handleChange}
            name={`icons-${index}-icon`}
          />
  </Grid>
))}


                  
  </Grid>


  </>

  )
}

export default AboutForm