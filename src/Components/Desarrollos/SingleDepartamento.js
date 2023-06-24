import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";
import DepartamentoPicture from '../../Assets/departamentos-de-lujo-2.jpeg';
// import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
// import MesaTrabajo2Picture from '../../Assets/fotos_test/Mesa_de_trabajo_102.png';
import MesaTrabajoPicture from '../../Assets/PROYECTOS/04/01.jpg';
import MesaTrabajo2Picture from '../../Assets/PROYECTOS/04/02.jpg';
// import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
// import Desarrollo3 from '../../Assets/fotos_test/desarrollo03.png';
import Desarrollo1 from '../../Assets/PROYECTOS/04/01.jpg';
import Desarrollo3 from '../../Assets/PROYECTOS/04/02.jpg';
import HeaderPicture from '../../Assets/PROYECTOS/01/header.jpg';
import Picture01 from '../../Assets/PROYECTOS/04/01.jpg';
import Picture02 from '../../Assets/PROYECTOS/04/02.jpg';
import Picture03 from '../../Assets/PROYECTOS/04/03.jpg';
import Picture04 from '../../Assets/PROYECTOS/04/04.jpg';
// import Picture03 from '../../Assets/PROYECTOS/04/03.png'; large size
// import Picture04 from '../../Assets/PROYECTOS/04/04.png'; large size
// import Picture05 from '../../Assets/PROYECTOS/04/05.png';
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

export const SingleDepartamento = () => {
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

                            <Grid className='padding-mobile' item xs={12}>
                                <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                        DEPARTAMENTO 
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                         SENCILLO
                                    </Typography>
                                </ListItem>
                                {/* <ListItem sx={{p:0, m:0}}>
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                         TERRAZA
                                    </Typography>
                                </ListItem> */}
                                <ListItem sx={{p:0, m:0, justifyContent: 'end'}} display="flex" justifyContent='flex-end'>
                                    <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                        RESIDENCIA 4
                                    </Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                <ListItem sx={{pl: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    Esta residencia tiene 66m²
                                    interiores donde disfrutarás de 2
                                    amplias recámaras, la principal
                                    con dos espaciosos closets.
                                    Además, 2 baños completos,
                                    estancia y cocina integrados.
                                </ListItem>
                            </Grid>

                            <Grid className='padding-mobile' item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture01} alt=""/>
                                </ListItem>
                            </Grid>

                            <Grid className='padding-mobile' item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture02} alt=""/>
                                </ListItem>
                            </Grid>
                            <Grid sx={{mt:'30px', fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={6}>
                                <ListItem>
                                    DETALLES
                                </ListItem>
                            </Grid>
                            {/* <Grid sx={{mt:'50px'}} item xs={12}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <img className='second-picture-desarrollo-detail-a' src={Desarrollo1} alt=""/>
                                <Box height={20} />
                            </Grid> */}

                            <Grid sx={{mt:'15px'}} xs={3}>

                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid className='padding-mobile' sx={{fontFamily: 'HelveticaLight', fontSize: '20pt', textAlign: 'left'}} display="flex" justifyContent="flex-start" xs={12}>
                                El departamento está diseñado
                                para poder ventilar de forma
                                cruzada, lo que permite una
                                temperatura fresca y evita
                                estancamiento de olores.
                            </Grid>
                            
                            <Box height={40} />
                            <Grid item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture03} alt=""/>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItem disablePadding>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                                </ListItem>
                            </Grid>
                            {/* <Box height={40} />
                            <Grid item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-mobil-a' src={MesaTrabajo2Picture} alt=""/>
                                </ListItem>
                            </Grid>
                            <Box height={40} />
                            <Grid item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-a' src={Desarrollo3} alt=""/>
                                </ListItem>
                            </Grid> */}

                        </Grid>
                        <Grid className='padding-mobile' container spacing={2}>
                            <Grid item xs={12}>

                            {/* <Box height={30} /> */}
                            <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00', mt:10}}>
                                87M²
                            </ListItem>
                            </Grid>
                        </Grid>
                        
                        <Grid className='padding-mobile' container spacing={2}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={9}>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={CuartoIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px'}} component={BathIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 BAÑOS
                                        </Typography>
                                    </ListItem>
                                    {/* <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px'}} component={TerrazaIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                    </ListItem> */}
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <Box sx={{width:22}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 CAJÓN
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
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
                                        <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                            DEPARTAMENTO SENCILLO
                                        </Typography>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                            RESIDENCIA 4
                                        </Typography>
                                    </Grid>
                                    <Box height={10} />

                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        Esta residencia tiene 66m² interiores donde disfrutarás de 2
                                        amplias recámaras, la principal con dos espaciosos closets.
                                        Además, 2 baños completos, estancia y cocina integrados. 
                                    </ListItem>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={3}>

                                </Grid>
                                <Grid item xs={9}>
                                    <img className='second-picture-desarrollo-detail' src={Picture01} alt=""/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} xs={12}>
                                <Grid item xs={6}>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture02} alt=""/>

                                    <Grid container>
                                        <Grid sx={{mt:'30px', fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={3}>
                                            DETALLES
                                        </Grid>
                                        <Grid sx={{mt:'40px'}} item xs={3}>
                                            
                                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                        </Grid>

                                        <Grid sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}} display="flex" justifyContent="flex-start" xs={10}>
                                            El departamento está diseñado para poder ventilar
                                            de forma cruzada, lo que permite una temperatura
                                            fresca y evita estancamiento de olores.
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container xs={6}>
                                    <Grid container xs={12}>
                                        <Grid item xs={12}>
                                            <img className='second-picture-desarrollo-detail' src={Picture03} alt=""/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                                </Grid>
                                <Grid item xs={9}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                                    <Box height={50}> 
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid columns={1} display='flex' justifyContent="flex-start"  item xs={3}>
                                    <Box height={100}>
                                        <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00'}}>
                                            97M2
                                        </ListItem>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>

                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={CuartoIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px'}} component={BathIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS BAÑOS
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={3}>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px'}} component={TerrazaIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <Box sx={{width:22}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 CAJÓN
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={3}>

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
