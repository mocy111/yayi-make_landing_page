"use client"

import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const HeaderForm = ({headerData,handleChange}) => {

console.log(headerData);

  return (
    <>    
    
    <Grid container spacing={5}>
      <Grid item xs={12} >
        <Typography >Liens</Typography>
      </Grid>

      {
          headerData.links.map((item,index) =>
          (
            <Grid item xs={12} sm={6} key={index} >
              <TextField
                fullWidth
                // label={item.type}
                value={headerData.links[index].text}
                onChange={handleChange}
                name={`links-${index}-text`}
              />
             </Grid>
          ))
        }

      {/* <Grid item xs={12} sm={6}>
        <TextField 
          fullWidth
          label='Numéro de téléphone' 
          value={headerData.contactInfo[0].text}
          name="contactInfo-0-text"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Adresse email"
          value={headerData.contactInfo[1].text}
          onChange={handleChange}
          name="contactInfo-1-text"
        />
      </Grid> */}

      <Grid item xs={12} >
        <Typography >Lien de réseaux sociaux</Typography>
      </Grid>
      
        {/* {
          headerData.socialLinks.map((item,index) =>
          (
            <Grid item xs={12} sm={6} key={index} >
              <TextField
                fullWidth
                label={item.type}
                value={headerData.socialLinks[index].href}
                onChange={handleChange}
                name={`socialLinks-${index}-href`}
              />
             </Grid>
          ))
        } */}
     
                
              </Grid>


              </>

  )
}

export default HeaderForm