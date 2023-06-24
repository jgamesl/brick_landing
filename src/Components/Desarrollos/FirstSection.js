

import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";

import { useMediaQuery } from 'react-responsive';
// import MasDesarrolloPicture from '../../Assets/fotos_test/mas_desarrollos.png';
// import MasDesarrolloPicture from "../../Assets/Icons/Home/desarrollo.svg";
import HeaderPicture from '../../Assets/PROYECTOS/01/header.jpg';
import {ReactComponent as VerIcon} from "../../Assets/Icons/Desarrollos/ver.svg";
import { Box } from '@mui/system';
import { Departamento } from './Departamento';
import { TownHouse } from './TownHouse';
import { Loft } from './Loft';
import { SingleDepartamento } from './SingleDepartamento';
import BrickText from "../../Assets/Icons/Logo/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { RoofGarden } from './RoofGarden';

export const FirstSection = () => {
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-width: 900px)'
    //     // query: '(min-width: 1224px)'
    //   })
    
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 924px)'
  })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
        // const isPortrait = useMediaQuery({ query: '(orientation: portrait) or (max-width: 899px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>
        {
            isTabletOrMobile 
                ?   
                    <>

                        <div className='color-objetivos-page'>
                            <div className='desarrollos-page-interior-mobile'>
                                <Grid container>
                                    <Grid item xs={6}>
                                    <Box sx={{mt: 5}}> 
                                        <ListItem sx={{pl:0}}>
                                            <img className="nav-logo" src={BrickText} alt="" />
                                        </ListItem>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Box display="flex" justifyContent="flex-end">
                                            <MenuIcon sx={{height: '80px', width: '80px', mt:3, mr:3}} />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid className='padding-mobile' container>
                                    <Grid item xs={6}>
                                                
                                        <ListItem padding-mobile sx={{paddingLeft: '0px'}} className='desarrollos-section-left-text second-section-objetivos'>
                                                DESA
                                        </ListItem>

                                        <ListItem sx={{paddingLeft: '0px'}}  className='objetivos-section-left-text '>
                                                RRO
                                        </ListItem>
                                        <ListItem sx={{paddingLeft: '0px'}} className='objetivos-section-left-text '>
                                                LLOS.
                                        </ListItem>
                                    </Grid> 
                                    <Grid display="flex" justifyContent="flex-start" item xs={6}>

                                        <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                                    </Grid>
                                </Grid>
                                <Grid className='padding-mobile'  container>
                                    <Grid item xs={12}>

                                    <Box height={40} />
                                        <ListItem sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '30pt',
                                            pl: 0,
                                        }}>
                                            LP #33
                                        </ListItem>
                                        <Box height={50} />
                                    </Grid>
                                </Grid>
                                <Grid className='padding-mobile' container>
                                    <Grid item xs={4}>
                                        <ListItem sx={{pl: 0}}>
                                            <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                <Typography sx={{ fontSize: '16pt'}}>
                                                    LP #33
                                                </Typography>
                                            </Button>
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/* <ListItem>
                                            <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                <Typography sx={{ fontSize: '16pt'}}>
                                                    LP #33
                                                </Typography>
                                            </Button>
                                        </ListItem> */}
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/* <ListItem>
                                            <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                <Typography sx={{ fontSize: '16pt'}}>
                                                    LP #33
                                                </Typography>
                                            </Button>
                                        </ListItem> */}
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box height={50} />
                                        <ListItem sx={{fontFamily: 'HelveticaLight', fontSize: '24pt', pl: 0}}>
                                            Espacios amplios, terrazas privadas y abundante
                                            vegetación definen nuestros departamentos. Disfruta
                                            de un estilo de vida al aire libre en nuestras
                                            residencias. 
                                        </ListItem>
                                        <Box height={50} />
                                        <ListItem sx={{fontFamily: 'HelveticaLight', fontSize: '24pt', pl: 0}}>
                                            Habita un oasis urbano donde el confort y la
                                            naturaleza se unen en perfecta armonía.
                                        </ListItem>
                                    </Grid>
                                </Grid>
                                <Departamento />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <TownHouse />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <Loft />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <SingleDepartamento />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <RoofGarden />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <Grid container>

                                    <Grid item xs={6}>
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
                                    <Grid item xs={6}>

                                        <ListItem>
                                            <SvgIcon  component={VerIcon} />
                                            {/* <Box sx={{width:4}}/> */}
                                        </ListItem>
                                        <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '16px'}}>
                                            VER OTRO PROYECTO
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box height={70} />
                                        <Box sx={{ml:3, mr:3}}>
                                            <Card>
                                                <div style={{ position: "relative" }}>
                                                    <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                    <div style={{position: "absolute", left: "15%", top: 10,transform: "translateX(-50%)",}}>
                                                        

                                                        <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Box>
                                        <Box height={70} />
                                        <Box sx={{ml:3, mr:3}}>
                                            <Card>
                                                <div style={{ position: "relative" }}>
                                                    <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                    <div style={{position: "absolute", left: "15%", top: 10,transform: "translateX(-50%)",}}>
                                                        

                                                        <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Box>
                                        <Box height={70} />
                                        <Box sx={{ml:3, mr:3}}>
                                            <Card>
                                                <div style={{ position: "relative" }}>
                                                    <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                    <div style={{position: "absolute", left: "15%", top: 10,transform: "translateX(-50%)",}}>
                                                        

                                                        <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Box>
                                        <Box height={70} />
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </>
                :   <>
                    </>
        }
        {
            
            (isBigScreen || isDesktopOrLaptop)
                ?   <>
                        <div className='color-objetivos-page'>
                            <div className='desarrollos-page-interior'>
                                <Grid container spacing={2} columns={12}>
                                    <Grid xs={2}>
                                                
                                        <ListItem sx={{paddingLeft: '0px'}} className='desarrollos-section-left-text second-section-objetivos'>
                                                DESA
                                        </ListItem>

                                        <ListItem sx={{paddingLeft: '0px'}}  className='objetivos-section-left-text '>
                                                RRO
                                        </ListItem>
                                        <ListItem sx={{paddingLeft: '0px'}} className='objetivos-section-left-text '>
                                                LLOS.
                                        </ListItem>
                                    </Grid>
                                    <Grid display="flex" justifyContent="flex-start" xs={1}>

                                        <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                                    </Grid>
                                    <Grid xs={2}>

                                    </Grid>
                                    <Grid container spacing={0} xs={7}>
                                        <Grid xs={4}>

                                            <ListItem sx={{
                                                fontFamily: 'GilamSemiBold',
                                                fontSize: '30pt'
                                            }}>
                                                LP #33
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid xs={2}>

                                                {/* <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                    <Typography sx={{ fontSize: '16pt'}}>
                                                        LP #33
                                                    </Typography>
                                                </Button> */}
                                        </Grid>
                                        <Grid xs={2}>

                                                {/* <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                    <Typography sx={{ fontSize: '16pt'}}>
                                                        LP #33
                                                    </Typography>
                                                </Button> */}
                                        </Grid>
                                        <Grid xs={2}>
{/* 
                                                <Button sx={{borderRadius: 8, paddingLeft: '10px', paddingRight: '10px'}} variant="outlined" >
                                                    <Typography sx={{ fontSize: '16pt'}}>
                                                        LP #33
                                                    </Typography>
                                                </Button> */}
                                        </Grid>
                                        <Grid xs={12}>
                                            
                                            <ListItem sx={{fontFamily: 'HelveticaLight', fontSize: '24pt'}}>
                                                Espacios amplios, terrazas privadas y abundante
                                                vegetación definen nuestros departamentos. Disfruta
                                                de un estilo de vida al aire libre en nuestras
                                                residencias. 
                                            </ListItem>
                                            <Box height={50} />
                                            <ListItem sx={{fontFamily: 'HelveticaLight', fontSize: '24pt'}}>
                                                Habita un oasis urbano donde el confort y la
                                                naturaleza se unen en perfecta armonía.
                                            </ListItem>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Departamento />
                                <TownHouse />
                                <Loft />
                                <SingleDepartamento />
                                <RoofGarden />
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box height={40} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItem className='desarrollos-section-left-text second-section-objetivos'>
                                                DESA
                                        </ListItem>

                                        <ListItem className='objetivos-section-left-text '>
                                                RRO
                                        </ListItem>
                                        <ListItem className='objetivos-section-left-text '>
                                                LLOS.
                                        </ListItem>
                                        <ListItem>

                                            <SvgIcon  component={VerIcon} />
                                        {/* <Box sx={{width:4}}/> */}
                                        </ListItem>
                                        <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '16px'}}>
                                            VER OTRO PROYECTO
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card sx={{maxWidth: '95%'}}>
                                            <div style={{ position: "relative" }}>
                                                <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                                    <ListItem>

                                                    <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </ListItem>
                                                </div>
                                            </div>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card sx={{maxWidth: '95%'}}>
                                            <div style={{ position: "relative" }}>
                                                <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                                    <ListItem>

                                                    <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </ListItem>
                                                </div>
                                            </div>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card sx={{maxWidth: '95%'}}>
                                            <div style={{ position: "relative" }}>
                                                <CardMedia component="img" image={HeaderPicture} title="" alt="Yes"/> 
                                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                                    <ListItem>

                                                    <p className='title-text-image-desarrollo-over-detail'>LP #33</p>
                                                    </ListItem>
                                                </div>
                                            </div>
                                        </Card>
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
