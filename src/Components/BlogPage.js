

import { Box, Button, Divider, Grid, ListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desarrollo2 from "../Assets/fotos_finales/HOME/01.jpg";
import Desarrollo3 from "../Assets/fotos_finales/HOME/01.jpg";
import Picture01 from '../Assets/blog_pictures/pic1.png';
import Picture02 from '../Assets/blog_pictures/pic2.png';
import Picture03 from '../Assets/blog_pictures/pic3.png';
import Picture04 from '../Assets/blog_pictures/pic4.png';
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

                                <Button className='nav-bar-btn' variant="contained" sx={{color: '#ce7a23', backgroundColor: '#ce7a23', borderColor: '#ce7a23',orderRadius: 8}} startIcon={<InstagramIcon />}>
                                    Instagram.
                                </Button>
                            </Grid> 
                        </Grid>
                        <Box height={20}/>

                        <Divider sx={{ backgroundColor: '#ce7a23', borderBottomWidth: 1 }}/>
                        <Box height={10}/>
                        <Grid container spacing={2}>
                            <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/Ct432J2Oyvx/';}}  item xs={12}>
                                <img className='blog-pic-mobile' src={Picture01} alt=""/>
                                {/* <ListItem>
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
                                </ListItem> */}
                                <Box height={20} />

                                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/CtuUsPkuDqi/';}} item xs={12}>
                                    <img className='blog-pic-mobile' src={Picture02} alt=""/>
                                    {/* <ListItem>
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
                                    </ListItem> */}
                                </Grid>
                                <Box height={20} />

                                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/CszvWQKu-HB/';}} item xs={12}>
                                    <img className='blog-pic-mobile' src={Picture03} alt=""/>
                                    {/* <ListItem>
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
                                    </ListItem> */}
                                </Grid>
                                <Box height={20} />

                                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/CsAPXVwuNhZ/';}}  item xs={12}>
                                    <img className='blog-pic-mobile' src={Picture04} alt=""/>
                                    {/* <ListItem>
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
                                    </ListItem> */}
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

                    <Button className='nav-bar-btn' variant="contained" sx={{color: '#ce7a23',backgroundColor: '#ce7a23', borderColor: '#ce7a23',orderRadius: 8}} startIcon={<InstagramIcon />}>
                        Instagram.
                    </Button>
                </Grid> 
            </Grid>
            <Box height={10}/>

            <Divider sx={{ backgroundColor: '#ce7a23', borderBottomWidth: 1 }}/>
            <Box height={10}/>

            <Grid container spacing={2}>
                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/Ct432J2Oyvx/';}} item xs={3}>
                    <img className='blog-pic' src={Picture01} alt=""/>
                    {/* <ListItem onClick={() => { console.log('https://www.instagram.com/p/Ct432J2Oyvx/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==')}}>
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
                    </ListItem> */}
                </Grid>
                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/CtuUsPkuDqi/';}}  item xs={3}>
                    <img className='blog-pic' src={Picture02} alt=""/>
                    {/* <ListItem>
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
                    </ListItem> */}
                </Grid>
                <Grid onClick={() => {window.location.href = 'https://www.instagram.com/p/CszvWQKu-HB/';}}  item xs={3}>
                    <img className='blog-pic' src={Picture03} alt=""/>
                    
                    {/* <ListItem>
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
                    </ListItem> */}
                </Grid>
                <Grid onClick={() => {window.location.href ='https://www.instagram.com/p/CsAPXVwuNhZ/';}}  item xs={3}>
                    <img className='blog-pic' src={Picture04} alt=""/>
                    
                    {/* <ListItem>
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
                    </ListItem> */}
                </Grid>
            </Grid>

        </Box>
    </Box> : <div></div>
    }
    </>
  )
}
