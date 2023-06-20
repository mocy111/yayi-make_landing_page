// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import CardActions from '@mui/material/CardActions'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from '../../../@core/components/icon'
import TopBarForm from '../../../@core/components/TopBarForm/TopBarForm'
import HeaderForm from '../../../@core/components/HeaderForm/HeaderForm'
import HeroForm from '../../../@core/components/Hero-form/HeroForm'
import AboutForm from '../../../@core/components/AboutForm/AboutForm'
import ServicesForm from '../../../@core/components/ServicesForm/ServicesForm'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsTabs = ({data}) => {
  // ** States
  const [value, setValue] = useState('personal-info')
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])
  const [topbarData, setTopbarData] = useState(data.topbar)
  const [headerData, setHeaderData] = useState(data.header)
  const [heroData, setHeroData] = useState(data.hero)
  const [aboutData, setAboutData] = useState(data.about)
  const [servicesData, setservicesData] = useState(data.service)
  console.log(data);

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  const handleChangeTopBar = (event) => {
    const { name, value } = event.target;
    const [section, index, field] = name.split('-');

    setTopbarData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section][index][field] = value;
      return updatedData;
    });
  };

  const handleChangeHeader = (event) => {
    const { name, value } = event.target;
    const [section, index, field] = name.split('-');

    setHeaderData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section][index][field] = value;
      return updatedData;
    });
  };


  const handleChangeHero = (property, value) => {
    const propertyPath = property.split('.');
    const updatedData = { ...heroData };

    let currentObject = updatedData;
    for (let i = 0; i < propertyPath.length - 1; i++) {
      const key = propertyPath[i];
      currentObject = currentObject[key];
    }

    const lastKey = propertyPath[propertyPath.length - 1];
    currentObject[lastKey] = value;

    setHeroData(updatedData);
  };

  const handleChangeAbout = (event) => {
    const { name, value } = event.target;
    const [section, index, field] = name.split('-');

    if (index && field) {
      setAboutData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section][index][field] = value;
      return updatedData;
    });
    }
    else {
      setAboutData((prevData) => {
        const updatedData = { ...prevData };
        updatedData[section] = value;
        return updatedData;
      });
    }
  };

  const handleChangeServices = (event) => {
    const { name, value } = event.target;
    const [section, index, field] = name.split('-');

    if (index && field) {
      setservicesData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section][index][field] = value;
      return updatedData;
    });
    }
    else {
      setservicesData((prevData) => {
        const updatedData = { ...prevData };
        updatedData[section] = value;
        return updatedData;
      });
    }
  };

  const handleTabsChange = (event, newValue) => {
    setValue(newValue)
  }


  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  const handleSubmit = async (e,property,itemData) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/front-cms/api', {
      method: 'PATCH',
      body: JSON.stringify({
        id:data._id,
        property,
        data:itemData
      }),
    })
    const result = await res.json()
console.log(result);
    // console.log(topbarData)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          variant='scrollable'
          scrollButtons={false}
          onChange={handleTabsChange}
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, '& .MuiTab-root': { py: 3.5 } }}
        >
          <Tab value='personal-info' label='topbar' />
          <Tab value='account-details' label='header' />
          <Tab value='social-links' label='hero' />
          <Tab value='about' label='about' />
          <Tab value='service' label='service' />
          <Tab value='testimonial' label='testimonial' />
          <Tab value='footer' label='footer' />
        </TabList>
        
          <CardContent>
          <TabPanel sx={{ p: 0 }} value='personal-info'>
            <form onSubmit={(e)=> handleSubmit(e,'topbar',topbarData)}>
                <TopBarForm topbarData={topbarData} handleChange={handleChangeTopBar} />
                <CardActions>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' >
                    Submit
                  </Button>
                  <Button type='reset' size='large' variant='outlined' color='secondary'>
                    Reset
                  </Button>
                </CardActions>
            </form>
          </TabPanel>

            <TabPanel sx={{ p: 0 }} value='account-details'>
              <form onSubmit={(e)=> handleSubmit(e,'header',headerData)}>
                  <HeaderForm headerData={headerData} handleChange={handleChangeHeader} />
                  <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' >
                      Submit
                    </Button>
                    <Button type='reset' size='large' variant='outlined' color='secondary'>
                      Reset
                    </Button>
                  </CardActions>
              </form>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='social-links'>
              <form onSubmit={(e)=> handleSubmit(e,'hero',heroData)}>
                    <HeroForm heroData={heroData} handleChange={handleChangeHero} />
                    <CardActions>
                      <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' >
                        Submit
                      </Button>
                      <Button type='reset' size='large' variant='outlined' color='secondary'>
                        Reset
                      </Button>
                    </CardActions>
                </form>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='about'>
              <form onSubmit={(e)=> handleSubmit(e,'about',aboutData)}>
                    <AboutForm aboutData={aboutData} handleChange={handleChangeAbout} />
                    <CardActions>
                      <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' >
                        Submit
                      </Button>
                      <Button type='reset' size='large' variant='outlined' color='secondary'>
                        Reset
                      </Button>
                    </CardActions>
               </form>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='service'>
              <form onSubmit={(e)=> handleSubmit(e,'service',servicesData)}>
                      <ServicesForm servicesData={servicesData} handleChange={handleChangeServices} />
                      <CardActions>
                        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                          Submit
                        </Button>
                        <Button type='reset' size='large' variant='outlined' color='secondary'>
                          Reset
                        </Button>
                      </CardActions>
                </form>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='testimonial'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Twitter' placeholder='https://twitter.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Facebook' placeholder='https://facebook.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Google+' placeholder='https://plus.google.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='LinkedIn' placeholder='https://linkedin.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Instagram' placeholder='https://instagram.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Quora' placeholder='https://quora.com/carterLeonard' />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='footer'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Twitter' placeholder='https://twitter.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Facebook' placeholder='https://facebook.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Google+' placeholder='https://plus.google.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='LinkedIn' placeholder='https://linkedin.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Instagram' placeholder='https://instagram.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Quora' placeholder='https://quora.com/carterLeonard' />
                </Grid>
              </Grid>
            </TabPanel>

          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          
       
      </TabContext>
    </Card>
  )
}

export default FormLayoutsTabs
