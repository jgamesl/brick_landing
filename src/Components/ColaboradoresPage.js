

import { Box, Divider, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Colab1Image from "../Assets/Icons/Home/colab1.svg";
import Colab2Image from "../Assets/Icons/Home/colab2.svg";
import Colab3Image from "../Assets/Icons/Home/colab3.svg";
import {ReactComponent as StarIcon2} from "../Assets/iconos_mejores/19.svg";

export const ColaboradoresPage = () => {
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
                    <Box className='colaboradores-page-interior-mobile'>
                        <Grid container spacing={2}>
                            
                            <Grid display="flex" justifyContent="flex-start" item xs={12}>
                                <p className='title-colaboradores-text'>COLABORADORES.</p>
                            </Grid>
                            <Grid display="flex" justifyContent="flex-start"  item xs={2}>

                                <ListItem>
                                    <SvgIcon sx={{mb:3, overflow: 'visible'}} component={StarIcon2} />
                                </ListItem>            
                            </Grid>
                            <Grid display="flex" justifyContent="flex-start"  item xs={10}>

                                <ListItem>
                                    <p className='helvetica-objetivos-left'>Trabajamos con empresas expertas en su campo para cada
proyecto. Nuestra red de empresas colaboradoras, líderes en
su industria, garantiza que nuestros inmuebles están en manos
de profesionales altamente capacitados. Confía en nuestro
equipo y en la excelencia de nuestras alianzas. </p>
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
    (isBigScreen || isDesktopOrLaptop) ? 

    <Box className='color-know-brick-page'>
        <Box className='colaboradores-page-interior'>
            
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <p className='title-colaboradores-text'>COLABORADORES.</p>
                    
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={1}>
                    <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={StarIcon2} />
                </Grid>
                <Grid item xs={6}>

                    <ListItem>
                        <Box sx={{width:40}}/>
                        {/* <Box sx={{width:4}}/> */}
                        <p className='helvetica-objetivos-left'>Trabajamos con empresas expertas en su campo para cada
proyecto. Nuestra red de empresas colaboradoras, líderes en
su industria, garantiza que nuestros inmuebles están en manos
de profesionales altamente capacitados. Confía en nuestro
equipo y en la excelencia de nuestras alianzas. </p>
                    </ListItem>
                </Grid>
            </Grid>
            <Box height={10} />
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
