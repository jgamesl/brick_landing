

import { Box, Button, Divider, Grid, ListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import Delivery from "../Assets/delivery-image.png";
import { useMediaQuery } from 'react-responsive';
import Desarrollo2 from "../Assets/fotos_test/desarrollo02.png";
import Desarrollo3 from "../Assets/fotos_test/desarrollo03.png";
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
                    <p className='blog-main-name'>BLOG.</p>
                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={2}>

                    <Button className='nav-bar-btn' variant="contained" sx={{color: '#ce7a23', borderColor: '#ce7a23',orderRadius: 8}} startIcon={<InstagramIcon />}>
                        Instagram.
                    </Button>
                </Grid> 
            </Grid>
            <Box height={10}/>

            <Divider sx={{ backgroundColor: '#ce7a23', borderBottomWidth: 1 }}/>
            <Box height={10}/>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Desarrollo2} alt=""/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={5}>
                                <p className='blog-number-main-name'>01.</p>
                            </Grid>
                            <Grid sx={{mt:'10px'}} item xs={7}>

                                <Typography color='#ce7a23' fontWeight={700}>23/23/1111.</Typography>
                                <p>En proceso.</p>
                            </Grid>
                        </Grid>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Desarrollo3} alt=""/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={5}>
                                <p className='blog-number-main-name'>02.</p>
                            </Grid>
                            <Grid sx={{mt:'10px'}} item xs={7}>

                                <Typography color='#ce7a23' fontWeight={700}>23/23/1111.</Typography>
                                <p>En proceso.</p>
                            </Grid>
                        </Grid>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Desarrollo2} alt=""/>
                    
                    <ListItem>
                        <Grid container>
                            <Grid item xs={5}>
                                <p className='blog-number-main-name'>03.</p>
                            </Grid>
                            <Grid sx={{mt:'10px'}} item xs={7}>

                                <Typography color='#ce7a23' fontWeight={700}>23/23/1111.</Typography>
                                <p>En proceso.</p>
                            </Grid>
                        </Grid>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <img className='blog-pic' src={Desarrollo2} alt=""/>
                    
                    <ListItem>
                        <Grid container>
                            <Grid item xs={5}>
                                <p className='blog-number-main-name'>04.</p>
                            </Grid>
                            <Grid sx={{mt:'10px'}} item xs={7}>

                                <Typography color='#ce7a23' fontWeight={700}>23/23/1111.</Typography>
                                <p>En proceso.</p>
                            </Grid>
                        </Grid>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                    </ListItem>
                </Grid>
            </Grid>

        </Box>
    </Box> : <div></div>
    }
    </>
  )
}
