
import { Divider, Grid, ListItem, Typography, SvgIcon, Button, CardMedia, Card } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import DepartamentoPicture from '../Assets/departamentos-de-lujo-2.jpeg';
import Picture01 from '../Assets/fotos_finales/HOME/02.jpg';
import Picture02 from '../Assets/fotos_finales/HOME/03.jpg';
import Picture03 from '../Assets/fotos_finales/HOME/04.jpg';
import Picture04 from '../Assets/fotos_finales/HOME/05.jpg';
import Picture05 from '../Assets/fotos_finales/HOME/06.jpg';
import { useNavigate } from "react-router-dom";
import Desarrollo2Image from '../Assets/fotos_finales/HOME/06.jpg';
// import Desarrollo2Image from '../Assets/fotos_test/desarrollo02.png';
import CircleIcon from '@mui/icons-material/Circle';
import DesarrolloImage from "../Assets/Icons/Home/desarrollo.svg";
export const DesarrollosPage = () => {

    const navigate = useNavigate();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 924px)'
        // query: '(min-width: 1224px)'
      })

    const [selectedDep, setSelectedDep] = useState(1);

    const [depName, setDepName] = useState('');
    const [depPicture, setDepPicture] = useState('');
    
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait) and (max-width: 800px)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });


    useEffect(() => {
        if (selectedDep == 1) {
            setDepName('LP #33');
            setDepPicture(DepartamentoPicture);
        } else if (selectedDep == 2) {
            
            setDepName('LP #34');
            setDepPicture(Desarrollo2Image);
        }
    }, [selectedDep])
    
  return (
    <>

        {
            isTabletOrMobile 
                ?   <div className='color-objetivos-page'>
                        <div className='desarrollos-page-interior-mobile'>
                            <Grid container>

                                <Grid item xs={6}>
                                    
                                    <ListItem className='objetivos-section-left-text'>
                                                DESA
                                        </ListItem>

                                        <ListItem className='objetivos-section-left-text '>
                                                RRO
                                        </ListItem>
                                        <ListItem className='objetivos-section-left-text '>
                                                LLOS.
                                        </ListItem>
                                </Grid>
                                <Grid display="flex" justifyContent="flex-start" item xs={6}>

                                    <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                                </Grid>
                                {/* <Grid item xs={8}>
                                    <Box height={30} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box height={30}/>
                                    <ListItem >
                                        <p className='helvetica-desarrollos-left'>
                                        Ofrecemos soluciones habitacionales de
                                        calidad, donde cada detalle está
                                        cuidadosamente diseñado y procesos
                                        respaldados por nuestra experiencia y
                                        compromiso.
                                        </p>
                                    </ListItem>
                                </Grid> */}
                                {/* <Grid className='padding-mobile' item xs={12}>

                                    <Box height={40} />
                                    <ListItem sx={{pl:0}}>

                                        <Button 
                                            variant="contained" 
                                            sx={{
                                                backgroundColor: '#f8bd00', 
                                                borderRadius: '50px', 
                                                fontSize: '30pt',
                                                fontFamily: 'GilamSemiBold',
                                                '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                            }} 
                                            onClick={()=> {setSelectedDep(1)}}
                                            disableElevation>
                                                LP #33
                                        </Button>
                                    </ListItem>
                                </Grid> */}
                                {/* <Grid className='padding-mobile' item xs={8}>
                                    <Box height={20} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid className='padding-mobile' item xs={12}>

                                    <Box height={20} />
                                    <ListItem sx={{pl:0}}>

                                        <Button 
                                            variant="contained" 
                                            sx={{
                                                backgroundColor: '#f8bd00', 
                                                borderRadius: '50px', 
                                                fontSize: '30pt',
                                                fontFamily: 'GilamSemiBold',
                                                '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                            }} 
                                            onClick={()=> {setSelectedDep(2)}}
                                            disableElevation>
                                                LP #34
                                        </Button>
                                    </ListItem>
                                </Grid> */}
                                <Grid className='padding-mobile' item xs={8}>
                                    <Box height={20} />
                                    {/* <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={50} /> */}
                                </Grid>
                                <Grid className='padding-mobile' item xs={6}>
                                    <ListItem sx={{justifyContent:'space-between', pl:0}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '30pt'
                                        }}> 
                                            LP #33
                                        </Typography>

                                    </ListItem>
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <ListItem>
                                        <Button 
                                            variant="contained" 
                                            
                                            sx={{
                                                pt:1,
                                                pb:1,
                                                backgroundColor: '#f8bd00', 
                                                borderRadius: '50px', 
                                                fontSize: '18pt',
                                                width: '100%',
                                                fontFamily: 'GilamSemiBold'
                                            }} 
                                            // sx={{backgroundColor: 'orange', width: '100%', borderRadius: '50px', fontSize: '18px'}} 
                                            disableElevation>
                                                VER MÁS.
                                        </Button>
                                    </ListItem>
                                </Grid> */}
                                <Grid className='padding-mobile' item xs={12}>
                                    <Box height={50} />
                                    <ListItem sx={{pl:0}}>

                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            Espacios amplios, terrazas
privadas y abundante
vegetación definen nuestros
departamentos. Disfruta de un
estilo de vida al aire libre en
nuestras residencias. 
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{pl:0}}>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            Habita un oasis urbano donde
el confort y la naturaleza se
unen en perfecta armonía
                                        </Typography>
                                    </ListItem>
                                    {/* <ListItem>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            Hendrerit in vulputate velit esse Ut
                                        </Typography>
                                    </ListItem> */}
                                    {/* <ListItem>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            wisi enim
                                        </Typography>
                                    </ListItem> */}
                                    <Box height={50} />
                                </Grid>
                                <Grid className='padding-mobile' item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>  
                                </Grid>

                                <Grid className='padding-mobile' item xs={12}>
                                    <Box height={30} />
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={Picture01} title="" alt="Yes"/> 
                                            <Box style={{position: "absolute", top: 10}}>
                                                <ListItem>

                                                <Typography sx={{
                                                    fontFamily: 'Helvetica',
                                                    fontSize: '35pt',
                                                    color: '#fceeea',
                                                    fontWeight: 'bold'
                                                }}>
                                                    01.
                                                </Typography>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica',
                                                        fontSize: '16pt',
                                                        color: '#fceeea',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Departamento Terraza.
                                                    </Typography>
                                                    <Grid onClick={() => {navigate('/desarrollos')}} >

                                                        <Typography sx={{
                                                            fontFamily: 'HelveticaLight',
                                                            fontSize: '16px',
                                                            color: '#fceeea',
                                                        }}>
                                                            Ver más
                                                        </Typography>
                                                    </Grid>
                                                </div>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    <Box height={10} />             
                                    <Card sx={{ maxHeight: '300px'}}>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia height={400} component="img" image={Picture03} title="" alt=""/> 
                                            <Box style={{position: "absolute", top: 10}}>
                                                <ListItem>

                                                <Typography sx={{
                                                    fontFamily: 'Helvetica',
                                                    fontSize: '35pt',
                                                    color: '#fceeea',
                                                    fontWeight: 'bold'
                                                }}>
                                                    02.
                                                </Typography>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica',
                                                        fontSize: '16pt',
                                                        color: '#fceeea',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Town House
                                                    </Typography>

                                                    <Grid onClick={() => {navigate('/desarrollos')}} >

                                                        <Typography sx={{
                                                            fontFamily: 'HelveticaLight',
                                                            fontSize: '16px',
                                                            color: '#fceeea',
                                                        }}>
                                                            Ver más
                                                        </Typography>
                                                    </Grid>
                                                    {/* <Typography sx={{
                                                        fontFamily: 'HelveticaLight',
                                                        fontSize: '16px',
                                                        color: '#fceeea',
                                                    }}>
                                                        Ver más
                                                    </Typography> */}
                                                </div>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={Picture02} title="" alt="Yes"/> 
                                            <Box style={{position: "absolute", top: 10}}>
                                                <ListItem>

                                                <Typography sx={{
                                                    fontFamily: 'Helvetica',
                                                    fontSize: '35pt',
                                                    color: '#fceeea',
                                                    fontWeight: 'bold'
                                                }}>
                                                    03.
                                                </Typography>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica',
                                                        fontSize: '16pt',
                                                        color: '#fceeea',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Loft.
                                                    </Typography>
                                                    <Grid onClick={() => {navigate('/desarrollos')}} >

                                                        <Typography sx={{
                                                            fontFamily: 'HelveticaLight',
                                                            fontSize: '16px',
                                                            color: '#fceeea',
                                                        }}>
                                                            Ver más
                                                        </Typography>
                                                    </Grid>
                                                </div>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={Picture04} title="" alt="Yes"/> 
                                            <Box style={{position: "absolute", top: 10}}>
                                                <ListItem>

                                                <Typography sx={{
                                                    fontFamily: 'Helvetica',
                                                    fontSize: '35pt',
                                                    color: '#fceeea',
                                                    fontWeight: 'bold'
                                                }}>
                                                    04.
                                                </Typography>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica',
                                                        fontSize: '16pt',
                                                        color: '#fceeea',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Departamento sencillo.
                                                    </Typography>

                                                    <Grid onClick={() => {navigate('/desarrollos')}} >

                                                        <Typography sx={{
                                                            fontFamily: 'HelveticaLight',
                                                            fontSize: '16px',
                                                            color: '#fceeea',
                                                        }}>
                                                            Ver más
                                                        </Typography>
                                                    </Grid>
                                                </div>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={Picture05} title="" alt="Yes"/> 
                                            <Box style={{position: "absolute", top: 10,}}>
                                                <ListItem>

                                                <Typography sx={{
                                                    fontFamily: 'Helvetica',
                                                    fontSize: '35pt',
                                                    color: '#fceeea',
                                                    fontWeight: 'bold'
                                                }}>
                                                    05.
                                                </Typography>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica',
                                                        fontSize: '16pt',
                                                        color: '#fceeea',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Departamento con
Roof Garden
                                                    </Typography>

                                                    <Grid onClick={() => {navigate('/desarrollos')}} >

                                                        <Typography sx={{
                                                            fontFamily: 'HelveticaLight',
                                                            fontSize: '16px',
                                                            color: '#fceeea',
                                                        }}>
                                                            Ver más
                                                        </Typography>
                                                    </Grid>
                                                </div>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    <Box height={50} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                                        Arcos Bosques 
                                    </Typography>
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                                        Paseo de los Tamarindos 400.
                                    </Typography>
                                    <Box height={20} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                                        Torre A, Bosques de las Lomas
                                        Cuajimalpa.
                                    </Typography>
                                    <Box height={20} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                                        CDMX
                                    </Typography>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                        55.8000.3735
                                    </Typography>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                        +52 56 39661468
                                    </Typography>
                                    <Box height={10} />
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                : <></>
        }
        {
            (isBigScreen || isDesktopOrLaptop) ? 

            <div className='color-objetivos-page'>
                <div className='desarrollos-page-interior-first'>
                <Grid className='' container spacing={2}>
                    <Grid item xs={5}>
                        <Grid container>

                            <Grid item xs={5}>
                                
                                <ListItem sx={{pl:0}} className='objetivos-section-left-text'>
                                            DESA
                                    </ListItem>

                                    <ListItem sx={{pl:0}} className='objetivos-section-left-text '>
                                            RRO
                                    </ListItem>
                                    <ListItem sx={{pl:0}} className='objetivos-section-left-text '>
                                            LLOS.
                                    </ListItem>
                            </Grid>
                            <Grid item xs={1}>

                                <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={7}>
                                <Box height={30} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={7}>

                                <Box height={30}/>
                                <ListItem sx={{pl:0}} >
                                    <p className='helvetica-desarrollos-left'>
                                    Ofrecemos soluciones
                                    habitacionales de calidad,
                                    donde cada detalle está
                                    cuidadosamente diseñado
                                    y procesos respaldados por
                                    nuestra experiencia y
                                    compromiso.
                                    </p>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid> 
                    {/* <Grid item xs={1}>

                        <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid> */}
                    <Grid item xs={7}>
            
                        <ListItem sx={{justifyContent:'space-between', pl:0}}>
                            <Typography sx={{
                                fontFamily: 'GilamSemiBold',
                                fontSize: '30pt'
                            }}> 
                                {depName}
                            </Typography>

                            <Button 
                                onClick={() => {navigate('/desarrollos')}}
                                variant="contained" 
                                sx={{backgroundColor: '#f8bd00', borderRadius: '50px', fontSize: '18px', color: 'black',
                                '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} }} 
                                disableElevation>
                                    VER MÁS.
                            </Button>
                        </ListItem>
                        <ListItem sx={{pl:0}}>
                            <Grid item xs={10}>

                                <Typography  style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24pt',
                                    lineHeight: '1.2'
                                }}>
                                    Espacios amplios, terrazas privadas y abundante  
                                    vegetación definen nuestros departamentos. Disfruta 
                                    de un estilo de vida al aire libre en nuestras
                                    residencias.
                                </Typography>
                                {/* <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24pt',
                                    lineHeight: '1.2'
                                }}>
                                    vegetación definen nuestros departamentos. Disfruta 
                                </Typography>
                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24pt',
                                    lineHeight: '1.2'
                                }}>
                                    de un estilo de vida al aire libre en nuestras
                                </Typography>
                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24px',
                                    lineHeight: '1.2'
                                }}>
                                    residencias.
                                </Typography> */}
                                <Box height={30} />

                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24pt',
                                    lineHeight: '1.2'
                                }}>
                                    Habita un oasis urbano donde el confort y la
                                    naturaleza se unen en perfecta armonía.
                                </Typography>
                            </Grid>
                        </ListItem>
                        <ListItem sx={{pl:0}}>
                            <Grid item xs={8}>
                                <Box height={50} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                            </Grid>
                        </ListItem>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <Box height={50}/>
                        <ListItem sx={{pl:0}}> 

                            <Button 
                                variant="contained" 
                                sx={{
                                    backgroundColor: '#f8bd00', 
                                    borderRadius: '50px', 
                                    fontSize: '30pt',
                                    fontFamily: 'GilamSemiBold',
                                    color: 'black',
                                    '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                    
                                }} 
                                onClick={()=> {setSelectedDep(1)}}
                                disableElevation>
                                    LP #33
                            </Button>
                        </ListItem>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        {/* <Box height={10} />
                        <ListItem sx={{pl:0}}>

                            <Button 
                                variant="contained" 
                                sx={{
                                    backgroundColor: '#f8bd00', 
                                    borderRadius: '50px', 
                                    fontSize: '30pt',
                                    fontFamily: 'GilamSemiBold',
                                    color: 'black',

                                    '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                }} 
                                onClick={()=> {setSelectedDep(2)}}
                                disableElevation>
                                    SR #29
                            </Button>
                        </ListItem> */}
                        {/* <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/> */}
                        <Box height={250} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                            Arcos Bosques 
                        </Typography>
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                            Paseo de los Tamarindos 400.
                        </Typography>
                        <Box height={20} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                            Torre A, Bosques de las Lomas
                            Cuajimalpa.
                        </Typography>
                        <Box height={20} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt', lineHeight: 1}}>
                            CDMX
                        </Typography>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                            55.8000.3735
                        </Typography>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                            +52 56 39661468
                        </Typography>
                        <Box height={10} />
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{maxWidth: '95%'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={Picture01} title="" alt="Yes"/> 
                                <Box style={{position: "absolute", top: 10}}>
                                    <ListItem>

                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '35pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            01.
                                        </Typography>
                                        <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '16pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            Departamento
                                            Terraza.
                                        </Typography>
                                        
                                        <Grid onClick={() => {navigate('/desarrollos')}} >

                                            <Typography sx={{
                                                fontFamily: 'HelveticaLight',
                                                fontSize: '16px',
                                                color: '#fceeea',
                                            }}>
                                                Ver más
                                            </Typography>
                                        </Grid>
                                    </div>
                                    </ListItem>
                                </Box>
                            </div>
                        </Card>
                        <Box height={10} />             
                        <Card sx={{maxWidth: '95%', maxHeight: '400px'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia height={400} component="img" image={Picture03} title="" alt="" /> 
                                <Box style={{position: "absolute", top: 10}}>
                                    <ListItem>


                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '35pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            02.
                                        </Typography>
                                        <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '16pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            Loft.
                                        </Typography>
                                        <Grid onClick={() => {navigate('/desarrollos')}} >

                                            <Typography sx={{
                                                fontFamily: 'HelveticaLight',
                                                fontSize: '16px',
                                                color: '#fceeea',
                                            }}>
                                                Ver más
                                            </Typography>
                                        </Grid>
                                    </div>
                                    </ListItem>
                                </Box>
                            </div>
                        </Card>
                        {/* <img style={{maxWidth: '95%'}} src={DepartamentoPicture} alt=""/>
                        <Box height={10} />
                        <img style={{maxWidth: '95%'}} src={DepartamentoPicture} alt=""/>
                        <Box height={10} /> */}
                    </Grid>
                    <Grid item xs={4}>
                        
                        {/* <Card >
                            <div style={{ position: "relative" }}>
                            <CardMedia style={{ height: "250px", paddingTop: "2%" }}   component="img" image={"/pancakes.jpg"} title="Pancakes" alt="Pancakes"/> 
                            <div style={{position: "absolute", color: "white",top: 10,left: "50%",transform: "translateX(-50%)",}}> Some text</div>
                        </div>
                        </Card> */}
                        <Card sx={{maxWidth: '95%', maxHeight: '200px'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={Picture02} title="" alt="Yes" style={{justifyContent: 'center', display: 'flex'}}/> 
                                <Box style={{position: "absolute", top: 10}}>
                                    <ListItem>

                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '35pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            03.
                                        </Typography>
                                        <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '16pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold' 
                                        }}>
                                            Town House.
                                        </Typography>
                                        <Grid onClick={() => {navigate('/desarrollos')}} >

                                            <Typography sx={{
                                                fontFamily: 'HelveticaLight',
                                                fontSize: '16px',
                                                color: '#fceeea',
                                            }}>
                                                Ver más
                                            </Typography>
                                        </Grid>
                                    </div>
                                    </ListItem>
                                </Box>
                            </div>
                        </Card>
                        <Box height={10} /> 
                        <Card sx={{maxWidth: '95%' }}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={Picture04} title="Wea" alt="Yes"/> 
                                <Box style={{position: "absolute", top: 10,}}>
                                    <ListItem>

                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '35pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            04.
                                        </Typography>
                                        <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '16pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            Departamento sencillo.
                                        </Typography>
                                        <Grid onClick={() => {navigate('/desarrollos')}} >

                                            <Typography sx={{
                                                fontFamily: 'HelveticaLight',
                                                fontSize: '16px',
                                                color: '#fceeea',
                                            }}>
                                                Ver más
                                            </Typography>
                                        </Grid>
                                    </div>
                                    </ListItem>
                                </Box>
                            </div>
                        </Card>
                        <Box height={10} /> 
                        <Card sx={{maxWidth: '95%'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={Picture05} title="Wea" alt="Yes"/> 
                                <Box style={{position: "absolute", top: 10,}}>
                                    <ListItem>

                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '35pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            05.
                                        </Typography>
                                    {/* <p className='title-text-image-desarrollo-over'>05.</p> */}
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica',
                                            fontSize: '16pt',
                                            color: '#fceeea',
                                            fontWeight: 'bold'
                                        }}>
                                            Departamento con Roof Garden
                                        </Typography>
                                        <Grid onClick={() => {navigate('/desarrollos')}} >

                                            <Typography sx={{
                                                fontFamily: 'HelveticaLight',
                                                fontSize: '16px',
                                                color: '#fceeea',
                                            }}>
                                                Ver más
                                            </Typography>
                                        </Grid>
                                    </div>
                                    </ListItem>
                                </Box>
                            </div>
                        </Card>
                        {/* <img style={{maxWidth: '95%'}} src={DepartamentoPicture} alt=""/>
                        <Box height={10} />
                        <img style={{maxWidth: '95%'}} src={DepartamentoPicture} alt=""/>
                        <Box height={10} />
                        <img style={{maxWidth: '95%'}} src={DepartamentoPicture} alt=""/>
                        <Box height={10} /> */}
                    </Grid>
                </Grid>

                <Box height={10}/>
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                <Box height={20}/>
        {/* <Grid className='' container spacing={2}>
            <Grid item xs={3}>
                <Box height={45} />
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                <Box height={30}/>
                <ListItem >
                    <p className='helvetica-desarrollos-left'>
                    Lorem ipsum dolor sit amet, conctetuer adipiscing
                    elit
                    </p>
                </ListItem>
                <Box height={50}/>
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
                            LP #33
                    </Button>
                </ListItem>
                <Box height={10} />
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                <Box height={10} />
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
                            LP #33
                    </Button>
                </ListItem>
                <Box height={10} />
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
            </Grid> 

            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={7}>
     
                <ListItem className='objetivos-text-main-name' >
                  VALORES
                </ListItem>
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                <Grid className='' container spacing={2}>
                    <Grid item xs={6}>
                        <ListItem>
                            <SvgIcon sx={{mt:'8px'}} component={GraphIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Lorem ipsum.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <ListItem>
                            <SvgIcon sx={{mt:'8px'}} component={TargetIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Dolor.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        <ListItem>
                            <SvgIcon sx={{mt:'8px'}} component={FocoIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Amet silum.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                    </Grid>
                    <Grid item xs={6}>

                        <ListItem>
                            <SvgIcon sx={{mt:'8px'}} component={HeartIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Lorem ipsum.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        <ListItem>
                            <SvgIcon sx={{mt:'8px'}} component={ShieldIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Dolor.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                    </Grid>

                    <Box sx={{height: 200}}/>

                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                    <ListItem className='objetivos-text-main-name' >
                        OBJETIVOS
                    </ListItem>
                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                   
                        <Grid item xs={6}>
                            <ListItem>

                            Lorem ipsum dolor sit amet,
                                dolor sit amet, dolor si
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            <Box sx={{height: 30}}/>
                            <ListItem>

                            Lorem ipsum dolor sit amet,
                                dolor sit amet, dolor si
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>    
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>

                            Lorem ipsum dolor sit amet,
                                dolor sit amet, dolor si
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        </Grid>

                </Grid>
            </Grid>
        </Grid> */}
{/* 
                <Grid className='' container spacing={2}>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick objetivos-section-left-text second-section-objetivos'>
                                DESARROLLOS
                            
                            <img className='first-section-know-pic' src={Delivery} alt=""/>

                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        

                        <ListItem sx={{fontWeight: 100}}>
                            Lorem ipsum dolor sit amet, conctetuer adipiscing
                            elit volutpat. Hendrerit in vulputate velit esse Ut wisi
                            enim
                        </ListItem>
                        <Box height={80}/>
                        <ListItem>

                            <Button 
                                variant="contained" 
                                sx={{backgroundColor: 'orange', borderRadius: '50px', fontSize: '24px'}} 
                                disableElevation>
                                    LP #33
                            </Button>
                            <Box height={10} />
                            <Divider />
                        </ListItem>
                        <ListItem>

                            <Button 
                                variant="contained" 
                                sx={{backgroundColor: 'orange', borderRadius: '50px', fontSize: '24px'}} 
                                disableElevation>
                                    LP #33
                            </Button>
                            <Box height={10} />
                            <Divider />
                        </ListItem>
                    </Grid> 
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={7}>
                        <ListItem sx={{justifyContent:'space-between'}}>
                            <Typography> LP #33 </Typography>

                            <Button 
                                variant="contained" 
                                sx={{backgroundColor: 'orange', borderRadius: '50px', fontSize: '18px'}} 
                                disableElevation>
                                    VER MÁS.
                            </Button>
                        </ListItem>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Typography sx={{fontSize: '20px', textAlign: 'left'}}>
                                    Lorem ipsum dolor sit amet,
                                    conctetuer adipiscing elit volutpat.
                                    Hendrerit in vulputate velit esse Ut
                                    wisi enim.
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Divider sx={{borderBottomWidth: 3}}/>
                            </Grid>
                            <Grid item xs={5}>

                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                        <Box height={20} />

                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <img style={{maxWidth: '100%'}} src={DepartamentoPicture} alt=""/>
                                <Box height={10} />

                                <img style={{maxWidth: '100%'}}  src={DepartamentoPicture} alt=""/>
                            </Grid>
                            <Grid item xs={7}>

                                <img style={{maxWidth: '100%'}} src={DepartamentoPicture} alt=""/>
                                    <Box height={10} />

                                    <img style={{maxWidth: '100%'}}  src={DepartamentoPicture} alt=""/>
                                    <Box height={10} />
                                    <img style={{maxWidth: '100%'}}  src={DepartamentoPicture} alt=""/>
                            </Grid>
                        </Grid>

                            <ListItem className='objetivos-text-main-name' >
                                VALORES
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        <Grid className='' container spacing={2}>
                            <Grid item xs={6}>
                                <ListItem>
                                    <CircleIcon sx={{height: 10, width: 10}}/>
                                    <Box sx={{width:4}}/>
                                    <Typography>Lorem ipsum.</Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                                <ListItem>
                                    <CircleIcon sx={{height: 10, width: 10}}/>
                                    <Box sx={{width:4}}/>
                                    <Typography>Dolor.</Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                                <ListItem>
                                    <CircleIcon sx={{height: 10, width: 10}}/>
                                    <Box sx={{width:4}}/>
                                    <Typography fontWeight={10}>Amet silum.</Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                            </Grid>
                            <Grid item xs={6}>

                                <ListItem>
                                    <CircleIcon sx={{height: 10, width: 10}}/>
                                    <Box sx={{width:4}}/>
                                    <Typography>Lorem ipsum.</Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                                <ListItem>
                                    <CircleIcon sx={{height: 10, width: 10}}/>
                                    <Box sx={{width:4}}/>
                                    <Typography>Dolor.</Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                            </Grid>

                            <Box sx={{height: 200}}/>

                            <ListItem className='objetivos-text-main-name' >
                                OBJETIVOS
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>

                            <Grid className='' container spacing={2}>

                                <Grid item xs={6}>
                                    <ListItem>

                                    Lorem ipsum dolor sit amet,
                                        dolor sit amet, dolor si
                                    </ListItem>
                                    <Box sx={{height: 30}}/>
                                    <ListItem>

                                    Lorem ipsum dolor sit amet,
                                        dolor sit amet, dolor si
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem>

                                    Lorem ipsum dolor sit amet,
                                        dolor sit amet, dolor si
                                    </ListItem>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid> */}
                </div>
            </div> : <div></div>
        }
    </>
  )
}
