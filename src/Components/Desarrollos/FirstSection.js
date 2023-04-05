

import { Button, Divider, ListItem, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";

import { useMediaQuery } from 'react-responsive';
import DepartamentoPicture from '../../Assets/departamentos-de-lujo-2.jpeg';
import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
import Home01 from '../../Assets/fotos_test/home01.png';
import { Navbar } from '../Navbar';
import { Box } from '@mui/system';

export const FirstSection = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 800px)'
        // query: '(min-width: 1224px)'
      })
    
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait) and (max-width: 800px)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>
        {
            isDesktopOrLaptop
                ?   <>
                        <div className='color-objetivos-page'>
                            <div className='desarrollos-page-interior-mobile'>
                                <Grid container spacing={2} columns={12}>
                                    <Grid xs={2}>
                                                
                                        <ListItem className='desarrollos-section-left-text second-section-objetivos'>
                                                DESA
                                        </ListItem>

                                        <ListItem className='objetivos-section-left-text '>
                                                RRO
                                        </ListItem>
                                        <ListItem className='objetivos-section-left-text '>
                                                LLOS.
                                        </ListItem>
                                    </Grid>
                                    <Grid display="flex" justifyContent="flex-start" xs={1}>

                                        <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                                    </Grid>
                                    <Grid xs={2}>

                                    </Grid>
                                    <Grid container xs={7}>
                                        <Grid xs={4}>

                                            <ListItem>
                                                LP #33
                                            </ListItem>
                                        </Grid>
                                        <Grid xs={2}>

                                            <ListItem>
                                                LP #33
                                            </ListItem>
                                        </Grid>
                                        <Grid xs={2}>

                                            <ListItem>
                                                LP #33
                                            </ListItem>
                                        </Grid>
                                        <Grid xs={2}>

                                            <ListItem>
                                                LP #33
                                            </ListItem>
                                        </Grid>
                                        <Grid xs={2}>
                                        </Grid>
                                        <Grid xs={12}>
                                            <ListItem>
                                                lorem ipsum dolor sit amet lorem ipsum dolor sit amet web desarrollo
                                            </ListItem>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12}>
                                    <img className='first-picture-desarrollo-detail' src={DepartamentoPicture} alt=""/>
                                </Grid>

                                <Grid container xs={12}>
                                    <Grid item xs={2}>
                                        <Box height={100} />
                                        <ListItem>

                                            <Button 
                                                variant="contained" 
                                                sx={{
                                                    backgroundColor: '#f8bd00', 
                                                    borderRadius: '50px', 
                                                    fontSize: '30pt',
                                                    fontFamily: 'GilamSemiBold'
                                                }} 
                                                disableElevation>
                                                    LP #34
                                            </Button>
                                        </ListItem>
                                        <Box height={40} />
                                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                            cda monet 33
                                        </Typography>
                                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                            Gran residencial 43983
                                        </Typography>
                                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                            CDMX
                                        </Typography>
                                        <Box height={10} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        
                                    </Grid>
                                    <Grid item xs={7}>
                                        
                                        <Box height={100} />
                                        <Grid display="flex" justifyContent="space-between">
                                            <Typography>
                                                LP #33
                                            </Typography>
                                            <Typography>
                                                YES
                                            </Typography>
                                        </Grid>

                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                        <ListItem sx={{paddingLeft: 0}}>
                                            lorem ipsum dolor sit amet tema ordun mamsod slodoue mweodos aosj
                                            lasjdoj oudmmeosucmbn odsudmn
                                        </ListItem>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12}>
                                    <img className='second-picture-desarrollo-detail' src={MesaTrabajoPicture} alt=""/>
                                </Grid>
                                <Grid container spacing={2} xs={12}>
                                    <Grid item xs={5}>

                                        <img className='second-picture-desarrollo-detail' src={Desarrollo1} alt=""/>
                                    </Grid>
                                    <Grid container xs={7}>
                                        <Grid sx={{mt:'30px'}} item xs={3}>
                                            DETALLES
                                        </Grid>
                                        <Grid sx={{mt:'40px'}} item xs={9}>
                                            
                                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                        </Grid>
                                        <Grid item xs={12}>

                                            <img className='second-picture-desarrollo-detail' src={Home01} alt=""/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                    </>
                : <></>
        }
    </>
  )
}
