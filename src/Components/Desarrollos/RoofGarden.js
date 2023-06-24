import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";
import DepartamentoPicture from '../../Assets/departamentos-de-lujo-2.jpeg';
// import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
// import MesaTrabajo2Picture from '../../Assets/fotos_test/Mesa_de_trabajo_102.png';
// import MesaTrabajoPicture from '../../Assets/PROYECTOS/05/01.png';
// import MesaTrabajo2Picture from '../../Assets/PROYECTOS/05/02.png';
import MesaTrabajoPicture from '../../Assets/PROYECTOS/05/01.jpg';
import MesaTrabajo2Picture from '../../Assets/PROYECTOS/05/02.jpg';
// import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
// import Desarrollo3 from '../../Assets/fotos_test/desarrollo03.png';
// import Desarrollo1 from '../../Assets/PROYECTOS/05/01.png';
// import Desarrollo3 from '../../Assets/PROYECTOS/05/02.png';
import Desarrollo1 from '../../Assets/PROYECTOS/05/01.jpg';
import Desarrollo3 from '../../Assets/PROYECTOS/05/02.jpg';
import HeaderPicture from '../../Assets/PROYECTOS/01/header.jpg';
import Picture01 from '../../Assets/PROYECTOS/05/01.jpg';
import Picture02 from '../../Assets/PROYECTOS/05/02.jpg';
import Picture03 from '../../Assets/PROYECTOS/05/03.jpg';
import Picture04 from '../../Assets/PROYECTOS/05/04.jpg';
import Picture05 from '../../Assets/PROYECTOS/05/05.jpg';
import { Box } from '@mui/system';
// import {ReactComponent as BathIcon} from "../../Assets/Icons/Desarrollos/año.svg";
// import {ReactComponent as CuartoIcon} from "../../Assets/Icons/Desarrollos/cuarto.svg";
// import {ReactComponent as TerrazaIcon} from "../../Assets/Icons/Desarrollos/terraza.svg";
// import {ReactComponent as CocheraIcon} from "../../Assets/Icons/Desarrollos/cochera.svg";
import {ReactComponent as BathIcon} from "../../Assets/iconos_mejores/30.svg";
import {ReactComponent as CuartoIcon} from "../../Assets/iconos_mejores/27.svg";
import {ReactComponent as TerrazaIcon} from "../../Assets/iconos_mejores/28.svg";
import {ReactComponent as CocheraIcon} from "../../Assets/iconos_mejores/29.svg";
// import Home01 from '../../Assets/fotos_test/home01.png';
import { useMediaQuery } from 'react-responsive';

export const RoofGarden = () => {
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
                ?       
                    <>
                        <Grid spacing={2} container>
                        <Grid className='padding-mobile' item xs={12}>
                            <Box height={20} />
                                <ListItem disablePadding>

                                    <Button 
                                        variant="contained" 
                                        sx={{
                                            backgroundColor: '#f8bd00', 
                                            borderRadius: '50px', 
                                            fontSize: '16pt',
                                            fontFamily: 'GilamRegular',
                                            color: 'black',
                                            width: '40%'
                                        }} 
                                        disableElevation>
                                            LP #33
                                    </Button>
                                </ListItem>
                                <Box height={40} />
                                <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                    Para obtener más información sobre esta
                                    residencia, por favor envíanos un mensaje
                                    y con gusto te contactaremos. 
                                </Typography>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <Box height={10} />
                                <Grid container >
                                    <Grid item xs={6}>
                                        <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                            55.8000.3735
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                            +52 56 39661468
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Box height={10} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <Box height={10} />
                                <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                    hola@brickinmuebles.com.mx
                                </Typography>
                                <Box height={10} />
                            </Grid>

                            <Grid className='padding-mobile'  item xs={12}>
                                <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                        DEPARTAMENTO 
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                         CON ROOF GARDEN
                                    </Typography>
                                </ListItem>
                                {/* <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                         TERRAZA
                                    </Typography>
                                </ListItem> */}
                                <ListItem sx={{p:0, m:0, justifyContent: 'end'}} display="flex" justifyContent='flex-end'>
                                    <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                        RESIDENCIA 5
                                    </Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                <ListItem sx={{pl: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    Esta residencia está dividida en
                                    dos niveles y tiene en planta baja
                                    65m² interiores y en planta alta
                                    un roof garden privado de 60m²
                                    en total. Al interior disfrutarás dos
                                    amplias recámaras, la principal
                                    con dos closets grandes,
                                    además de dos baños
                                    completos, estancia y cocina
                                    integral.
                                    Por otro lado, la terraza tiene
                                    jardinería montada e iluminada,
                                    y barra para recibir asador.
                                </ListItem>
                            </Grid>
                            <Box height={40} />
                            <Grid item xs={12}>

                                <ListItem>
                                    <p className='overlay-terraza'>05.</p>
                                    
                                    <Box sx={{fontFamily: 'HelveticaLight', fontSize: '20pt', ml:2}} className=''>ALZADO</Box>
                                </ListItem>
                                <ListItem disablePadding>
                                    <img className='first-picture-desarrollo-detail-mobile' src={Picture02} alt=""/>
                                </ListItem>
                            </Grid>

                            <Grid className='padding-mobile' item xs={12}>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture01} alt=""/>
                                <Box height={10} />

                                <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    PLANTA BAJA
                                </ListItem>
                            </Grid>
                            <Grid className='padding-mobile' item xs={12}>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture03} alt=""/>
                                <Box height={10} />

                                <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    PLANTA ALTA
                                </ListItem>
                            </Grid>

                            <Grid item xs={12}>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture04} alt=""/>
                                <Box height={10} />
                            </Grid>
                            <Grid item xs={12}>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture05} alt=""/>
                                <Box height={10} />
                            </Grid>

                        </Grid>
                        <Grid container>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                            {/* <Box height={30} /> */}
                            <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00', mt:10}}>
                                125M²
                            </ListItem>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={9}>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={CuartoIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={BathIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 BAÑOS
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={TerrazaIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={CocheraIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 CAJÓN
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container>
                            <Box height={20} />
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        </Grid>
                    </>
                :   <></>

        }

        {
            (isBigScreen || isDesktopOrLaptop)
                ?   
                    <>

                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <Box height={100} />
                                    <ListItem disablePadding>

                                        <Button 
                                            variant="contained" 
                                            sx={{
                                                backgroundColor: '#f8bd00', 
                                                borderRadius: '50px', 
                                                fontSize: '16pt',
                                                fontFamily: 'GilamRegular'
                                            }} 
                                            disableElevation>
                                                LP #33
                                        </Button>
                                    </ListItem>
                                    <Box height={40} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                        Para obtener más información sobre esta
                                        residencia, por favor envíanos un mensaje
                                        y con gusto te contactaremos. 
                                    </Typography>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Grid container >
                                        <Grid item xs={6}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                               55.8000.3735
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                                +52 56 39661468
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                        hola@brickinmuebles.com.mx
                                    </Typography>
                                    <Box height={10} />
                                </Grid>
                                <Grid item xs={1}>
                                    
                                </Grid>
                                <Grid item xs={7}>
                                    
                                    <Box height={100} />
                                    <Grid display="flex" justifyContent="space-between">
                                        <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt', textAlign: 'left'}}>
                                            DEPARTAMENTO CON
                                            ROOF GARDEN
                                        </Typography>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                            RESIDENCIA 5
                                        </Typography>
                                    </Grid>
                                    <Box height={10} />

                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        Esta residencia está dividida en dos niveles y tiene en
                                        planta baja 65m² interiores y en planta alta un roof garden
                                        privado de 60m² en total. Al interior disfrutarás dos amplias
                                        recámaras, la principal con dos closets grandes, además
                                        de dos baños completos, estancia y cocina integral.
                                        Por otro lado, la terraza tiene jardinería montada e
                                        iluminada, y barra para recibir asador.
                                    </ListItem>
                                </Grid>
                            </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs={5}>

                                    <img className='second-picture-desarrollo-detail-a' src={Picture01} alt=""/>
                                    <Box height={10} />

                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        PLANTA BAJA
                                    </ListItem>
                                </Grid>
                                <Grid item xs={7}>

                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={Picture02} title="" alt="Yes"/> 
                                            <Box style={{position: "absolute", top: 0, left: '3%'}}>
                                                <ListItem xs={{pt:0}}>

                                                <p className='overlay-terraza'>05.</p>
                                                
                                                <Box sx={{fontFamily: 'HelveticaLight', fontSize: '20pt', ml:2}} className=''>ALZADO</Box>
                                                </ListItem>
                                            </Box>
                                        </div>
                                    </Card>
                                    {/* <img className='second-picture-desarrollo-detail-a' src={Picture02} alt=""/> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={8}>

                                    <img className='second-picture-desarrollo-detail-a' src={Picture03} alt=""/>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                                    <Box height={10} />

                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        ROOF TOP
                                    </ListItem>
                                </Grid>
                            </Grid>
                            
                            <Grid container spacing={2}>
                                <Grid item xs={8}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture05} alt=""/>
                                    <Box height={50}> 
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={3}>    

                                    <Box height={100}>
                                        <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00', mt:10}}>
                                            125M²
                                        </ListItem>
                                    </Box>
                                    <Box height={10} />
                                    <ListItem>
                                        <SvgIcon sx={{mt:'10pt', overflow: 'visible'}} component={CuartoIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10pt', overflow: 'visible'}} component={BathIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 BAÑOS
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10pt', overflow: 'visible'}} component={TerrazaIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10pt', overflow: 'visible'}} component={CocheraIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 CAJÓN
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    {/* <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/> */}
                                </Grid>
                            </Grid>
                            <Grid>
                                <Box height={40} />
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                    </>
                :   <>
                </>
        }
    </>
  )
}
