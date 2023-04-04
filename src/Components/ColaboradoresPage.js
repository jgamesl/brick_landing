

import { Box, Divider, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import Delivery from "../Assets/delivery-image.png";
import { useMediaQuery } from 'react-responsive';
import CircleIcon from '@mui/icons-material/Circle';
import Colab1Image from "../Assets/Icons/Home/colab1.svg";
import Colab2Image from "../Assets/Icons/Home/colab2.svg";
import Colab3Image from "../Assets/Icons/Home/colab3.svg";
import {ReactComponent as StarIcon} from "../Assets/Icons/Home/estrella.svg";

export const ColaboradoresPage = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1000px)'
      // query: '(min-width: 1224px)'
    })
  
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait) and (max-width: 800px)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>
    {
        isPortrait 
            ?   <Box className='color-know-brick-page'>
                    <Box className='colaboradores-page-interior-mobile'>
                        <Grid container spacing={2}>
                            
                            <Grid display="flex" justifyContent="flex-start" item xs={12}>
                                <p className='title-colaboradores-text'>COLABORADORES.</p>
                            </Grid>
                            <Grid display="flex" justifyContent="flex-start"  item xs={12}>

                                <ListItem>
                                    <SvgIcon sx={{mb:3}} component={StarIcon} />
                                    <Box sx={{width:40}}/>
                                    {/* <Box sx={{width:4}}/> */}
                                    <p className='helvetica-objetivos-left'>Lorem ipsum dolor sit amet, conctetuer adipiscing
                                elit volutpat. Hendrerit in vulputat.</p>
                                </ListItem>            
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab1Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab2Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab3Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab1Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab1Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Box height={10} />
                                <img className='colaboradores-logo-pic' src={Colab2Image} alt=""/>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            : <></>
    }
    
    {
    isDesktopOrLaptop ? 

    <Box className='color-know-brick-page'>
        <Box className='colaboradores-page-interior'>
            
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <p className='title-colaboradores-text'>COLABORADORES.</p>
                    
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>

                    <ListItem>
                        <SvgIcon sx={{mt:'8px'}} component={StarIcon} />
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <p className='helvetica-objetivos-left'>Lorem ipsum dolor sit amet, conctetuer adipiscing
elit volutpat. Hendrerit in vulputat.</p>
                    </ListItem>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
            <Box height={30}/>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab1Image} alt=""/>
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab2Image} alt=""/>
                    
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab3Image} alt=""/>
                    
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab1Image} alt=""/>
                    
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab2Image} alt=""/>
                    
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
                <Grid item xs={2}>
                    <img className='colaboradores-logo-pic' src={Colab3Image} alt=""/>
                    
                    <Box height={10} />
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                </Grid>
            </Grid>

        </Box>
    </Box> : <div></div>
    }
    </>
  )
}
