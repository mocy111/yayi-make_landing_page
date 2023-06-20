"use client"

import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const TopBarForm = ({topbarData,handleChange}) => {

// console.log(topbarData);

  return (
    <>    
    
    <Grid container spacing={5}>
      <Grid item xs={12} >
        <Typography >Information de contat</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Numéro de téléphone' 
          value={topbarData.contactInfo[0].text}
          name="contactInfo-0-text"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Adresse email"
          value={topbarData.contactInfo[1].text}
          onChange={handleChange}
          name="contactInfo-1-text"
        />
      </Grid>

      <Grid item xs={12} >
        <Typography >Lien de réseaux sociaux</Typography>
      </Grid>
      
        {
          topbarData.socialLinks.map((item,index) =>
          (
            <Grid item xs={12} sm={6} key={index} >
              <TextField
                fullWidth
                label={item.type}
                value={topbarData.socialLinks[index].href}
                onChange={handleChange}
                name={`socialLinks-${index}-href`}
              />
             </Grid>
          ))
        }
     
                
              </Grid>


              </>

  )
}

export default TopBarForm