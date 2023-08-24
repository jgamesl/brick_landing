
import React, { useState, useEffect } from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";

import { useMediaQuery } from 'react-responsive';
// import MasDesarrolloPicture from '../../Assets/fotos_test/mas_desarrollos.png';
// import MasDesarrolloPicture from "../../Assets/Icons/Home/desarrollo.svg";
import HeaderPicture from '../../Assets/PROYECTOS/01/header.jpg';
import {ReactComponent as VerIcon} from "../../Assets/Icons/Desarrollos/ver.svg";

import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography, Drawer, IconButton, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { Departamento } from './Departamento';
import { TownHouse } from './TownHouse';
import { Loft } from './Loft';
import { SingleDepartamento } from './SingleDepartamento';
import BrickText from "../../Assets/Icons/Logo/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { RoofGarden } from './RoofGarden';
import {ReactComponent as CorreoIcon} from "../../Assets/Icons/Desarrollos/contacto.svg";
import CloseIcon from '@mui/icons-material/Close';

export const FirstSection = (param) => {
    const navigate = useNavigate();
    const section = param?.section;
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-width: 900px)'
    //     // query: '(min-width: 1224px)'
    //   })
    useEffect(() => {
      console.log(section);
      setTimeout(() => {
        scrollToSection(section);
      },500);
    }, [])
    

    const scrollToSection = (section) => {
        if (section === 1) {
            const element = document.getElementById('section-one');
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === 2) {
            const element = document.getElementById('section-two');
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === 3) {
            const element = document.getElementById('section-three');
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === 4) {
            const element = document.getElementById('section-four');
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === 5) {
            const element = document.getElementById('section-five');
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }


    };
    
  const [drawerOpen, setDrawerOpen] = useState(false);
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
                            <Drawer 
                                sx={{width: '50%'}}
                                anchor='right'
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                            >
                                <Box sx={{width: '200px', backgroundColor: '#f8bd00', height: '100%'}}>
                                <Grid container>
                                    <Box height={20} />
                                    <Grid sx={{pt: 0, justifyContent: 'right'}} disablePadding item xs={12}>
                                        <ListItem sx={{justifyContent: 'end'}}>
                                            <IconButton onClick={() => setDrawerOpen(false)} aria-label="delete">
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItem>
                                        <ListItem >
                                            <Link color="black" underline="hover" onClick={() => {
                                            // funcTrigger('know')
                                                navigate('/');
                                            }}>
                                            <Typography sx={{fontFamily: 'HelveticaLight', fontSize: '16pt'}}>Conoce a Brick.</Typography>
                                            </Link>
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1, marginLeft: 2, marginRight: 1 }}/>
                                    </Grid>
                                    <Grid sx={{pt: 0, justifyContent: 'left'}} disablePadding item xs={12}>
                                        <ListItem >
                                            <Link color="black" underline="hover" onClick={() => {
                                            // funcTrigger('desarrollos')
                                                navigate('/');
                                            }}>
                                            <Typography sx={{fontFamily: 'HelveticaLight', fontSize: '16pt'}}>Desarrollos.</Typography>
                                            </Link>
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1, marginLeft: 2, marginRight: 1 }}/>
                                    </Grid>
        
                                    <Grid item xs={12}>
                                        <Box height={40} />
                                        <ListItem>
        
                                            <Button 
                                                sx={{
                                                        borderRadius: 8, 
                                                        backgroundColor: 'black', 
                                                        height: 40, color: '#f8bd00',
        
                                                        '&.MuiButton-root:hover':{bgcolor: 'black'} 
                                                    }} 
                                                variant="contained" startIcon={<SvgIcon sx={{mt:'8px', overflow: 'visible', color: '#f8bd00'}} component={CorreoIcon} />}>
                                                Contacto.
                                            </Button>
                                        </ListItem>
                                        <Box height={60} />
                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1, marginLeft: 2, marginRight: 1 }}/>
                                    </Grid>
        
                                    <Grid item xs={12}>
                                        <Box height={30} />
                                        <ListItem>
        
                                            <p className='text-footer-size'>
                                                55.8000.3735
                                            </p>
                                        </ListItem>
                                        <ListItem>
        
                                            <p className='text-footer-size'>
                                                +52 56 39661468
                                            </p>
                                        </ListItem>
                                        {/* <ListItem>
                                            <p className='text-footer-size'>
                                                hola@brickinmuebles.com.mx
                                            </p>
                                        </ListItem> */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
        
                                            <p className='text-footer-size'>
                                                Arcos Bosques, Paseo de los Tamarindos 400.
                                            </p>
                                        </ListItem>
                                        <ListItem>
                                            <p className='text-footer-size'>
                                                Torre A, Bosques de las Lomas Cuajimalpa.
                                            </p>
                                        </ListItem>
                                        <ListItem>
                                            <p className='text-footer-size'>
                                                CDMX
                                            </p>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                                    {/* LA weaeeaa */}
                                </Box>
                            </Drawer>
                                <Grid className='padding-mobile' container>
                                    <Grid item xs={6}>
                                    <Box sx={{mt: 5}}> 
                                        <ListItem sx={{pl:0}}>
                                            <img className="nav-logo" src={BrickText} alt="" />
                                        </ListItem>
                                    </Box>
                                    </Grid>
                                    <Grid onClick={() => setDrawerOpen(true)} item xs={6} >
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
                                        {/* <ListItem sx={{pl: 0}}>
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
                                <div id="section-one" >
                                    <Departamento />
                                </div>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <div id="section-two" >   
                                    <TownHouse/>
                                </div>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <div id="section-three" >
                                    <Loft/>
                                </div>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <div id="section-four">  
                                    <SingleDepartamento />
                                </div>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <div id="section-five" >
                                    <RoofGarden />
                                </div>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                {/* <Grid container>

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
                                </Grid> */}

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
                                <div id="section-one" >
                                    <Departamento />
                                </div>
                                <div id="section-two" >   
                                    <TownHouse/>
                                </div>
                                <div id="section-three" >
                                    <Loft/>
                                </div>
                                <div id="section-four">  
                                    <SingleDepartamento />
                                </div>
                                <div id="section-five" >
                                    <RoofGarden />
                                </div>
                                {/* <Grid container spacing={2}>
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
                                </Grid> */}
                            </div>
                        </div>

                    </>
                : <></>
        }
    </>
  )
}
