

import { Box, Divider, Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import Delivery from "../Assets/delivery-image.png";
import { useMediaQuery } from 'react-responsive';
import CircleIcon from '@mui/icons-material/Circle';

export const ColaboradoresPage = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1000px)'
      // query: '(min-width: 1224px)'
    })
  
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>
    
    {
    isDesktopOrLaptop ? 

    <Box className='color-know-brick-page'>
        <Box className='colaboradores-page-interior'>
            
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    COLABORADORES.
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>

                    <ListItem>
                        <CircleIcon sx={{height: 40, width: 40}}/>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <Typography>Lorem ipsum dolor sit amet, conctetuer adipiscing
elit volutpat. Hendrerit in vulputat.</Typography>
                    </ListItem>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
            <Box height={30}/>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Delivery} alt=""/>
                    
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
            </Grid>

        </Box>
    </Box> : <div></div>
    }
    </>
  )
}
