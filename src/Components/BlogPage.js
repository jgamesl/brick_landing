

import { Box, Button, Divider, Grid, ListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desarrollo2 from "../Assets/fotos_finales/HOME/01.png";
import Desarrollo3 from "../Assets/fotos_finales/HOME/01.png";
import CircleIcon from '@mui/icons-material/Circle';

export const BlogPage = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 924px)'
      // query: '(min-width: 1224px)'
    })
  
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait) and (max-width: 800px)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>

    {
        isTabletOrMobile 
            ?   <Box className='color-know-brick-page'>
                    <Box className='blog-page-interior-mobile'>
                        <Grid container spacing={2}>

                            <Grid item xs={6}>
                                <p className='blog-main-name'>PUBLICACIONES.</p>
                            </Grid>
                            <Grid item xs={6}>

                                <Button className='nav-bar-btn' variant="contained" sx={{color: '#ce7a23', borderColor: '#ce7a23',orderRadius: 8}} startIcon={<InstagramIcon />}>
                                    Instagram.
                                </Button>
                            </Grid> 
                        </Grid>
                        <Box height={20}/>

                        <Divider sx={{ backgroundColor: '#ce7a23', borderBottomWidth: 1 }}/>
                        <Box height={10}/>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img className='blog-pic-mobile' src={Desarrollo2} alt=""/>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <p className='blog-number-main-name'>01.</p>
                                        </Grid>
                                        <Grid sx={{mt:'10px'}} item xs={7}>

                                            <Typography color='#ce7a23' fontWeight={700}>23/23/1111.</Typography>
                                            <p>En proceso.</p>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{height:40}}/>
                                    {/* <Box sx={{width:4}}/> */}
                                </ListItem>
                                <Box height={20} />

                                <Grid item xs={12}>
                                    <img className='blog-pic-mobile' src={Desarrollo3} alt=""/>
                                    <ListItem>
                                        <Grid container>
                                            <Grid item xs={3}>
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
                                <Box height={20} />

                                <Grid item xs={12}>
                                    <img className='blog-pic-mobile' src={Desarrollo2} alt=""/>
                                    <ListItem>
                                        <Grid container>
                                            <Grid item xs={3}>
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
                                <Box height={20} />

                                <Grid item xs={12}>
                                    <img className='blog-pic-mobile' src={Desarrollo2} alt=""/>
                                    <ListItem>
                                        <Grid container>
                                            <Grid item xs={3}>
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
                        </Grid>
                    </Box>
                </Box>
            : <></>
    }
    
    {
    (isBigScreen || isDesktopOrLaptop) ? 

    <Box className='color-know-brick-page'>
        <Box className='blog-page-interior'>
            
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <p className='blog-main-name'>PUBLICACIONES.</p>
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
