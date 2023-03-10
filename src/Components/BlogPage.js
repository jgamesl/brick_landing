

import { Box, Button, Divider, Grid, ListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import Delivery from "../Assets/delivery-image.png";
import { useMediaQuery } from 'react-responsive';
import CircleIcon from '@mui/icons-material/Circle';

export const BlogPage = () => {
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
        <Box className='blog-page-interior'>
            
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    BLOG.
                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={2}>

                    <Button variant="outlined" startIcon={<InstagramIcon />}>
                        Instagram.
                    </Button>
                </Grid>
            </Grid>
            <Box height={10}/>

            <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
            <Box height={10}/>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Delivery} alt=""/>
                    <ListItem>
                        
                    <Typography fontSize={60}>01.</Typography>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <Typography fontSize={10}>Lorem ipsum
                        Dolor sit amet dolor.</Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Delivery} alt=""/>
                    <ListItem>
                        
                    <Typography fontSize={60}>02.</Typography>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <Typography fontSize={10}>Lorem ipsum
                        Dolor sit amet dolor.</Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Delivery} alt=""/>
                    <ListItem>
                        
                    <Typography fontSize={60}>03.</Typography>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <Typography fontSize={10}>Lorem ipsum
                        Dolor sit amet dolor.</Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Delivery} alt=""/>
                    <ListItem>
                        
                    <Typography fontSize={60}>04.</Typography>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <Typography fontSize={10}>Lorem ipsum
                        Dolor sit amet dolor.</Typography>
                    </ListItem>
                </Grid>
            </Grid>

        </Box>
    </Box> : <div></div>
    }
    </>
  )
}
