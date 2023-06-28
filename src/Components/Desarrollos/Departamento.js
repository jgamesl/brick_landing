import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";
import MesaTrabajoPicture from '../../Assets/departamentos-de-lujo-2.jpeg';
import MesaTrabajo2Picture from '../../Assets/departamentos-de-lujo-2.jpeg';
// import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
// import MesaTrabajo2Picture from '../../Assets/fotos_test/Mesa_de_trabajo_102.png';
// import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
// import Desarrollo3 from '../../Assets/fotos_test/desarrollo03.png';
import Desarrollo1 from '../../Assets/PROYECTOS/01/01.jpg';
import Desarrollo3 from '../../Assets/PROYECTOS/01/02.jpg';
import HeaderPicture from '../../Assets/PROYECTOS/01/header.jpg';
import Picture01 from '../../Assets/PROYECTOS/01/01.jpg';
import Picture02 from '../../Assets/PROYECTOS/01/02.jpg';
//import Picture03 from '../../Assets/PROYECTOS/01/03.jpg'; large size
import Picture03 from '../../Assets/PROYECTOS/01/03.jpg';
import Picture04 from '../../Assets/PROYECTOS/01/04.jpg';
import Picture05 from '../../Assets/PROYECTOS/01/05.jpg';
// import Picture05 from '../../Assets/PROYECTOS/01/05.jpg'; large size
import { Box } from '@mui/system';
import {ReactComponent as BathIcon} from "../../Assets/iconos_mejores/30.svg";
import {ReactComponent as CuartoIcon} from "../../Assets/iconos_mejores/27.svg";
import {ReactComponent as TerrazaIcon} from "../../Assets/iconos_mejores/28.svg";
import {ReactComponent as CocheraIcon} from "../../Assets/iconos_mejores/29.svg";
import { useMediaQuery } from 'react-responsive';

export const Departamento = () => {
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
                            <Grid item xs={12}>
                                <img className='first-picture-desarrollo-detail' src={HeaderPicture} alt=""/>
                                
                                <Typography  sx={{textAlign: 'right', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                    Fotografía Exterior
                                </Typography>
                                {/* <Box height={30} /> */}
                            </Grid>
                            {/* <Grid item xs={6}>

                                <ListItem>

                                    <Button 
                                        variant="contained" 
                                        sx={{
                                            backgroundColor: '#f8bd00', 
                                            borderRadius: '50px', 
                                            fontSize: '16pt',
                                            fontFamily: 'GilamRegular',
                                            width: '100%'
                                        }} 
                                        disableElevation>
                                            LP #33
                                    </Button>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                
                                <Typography sx={{lineHeight: '1.1', textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                    Cda monet 33
                                </Typography>
                                <Typography sx={{lineHeight: '1.1', textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                    Gran residencial 43983
                                </Typography>
                                <Typography sx={{lineHeight: '1.1', textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                    CDMX
                                </Typography>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Box height={30} />
                                
                            </Grid>
                                <Grid className='padding-mobile' item xs={12}>
                                    {/* <Box height={100} /> */}
                                    <ListItem sx={{pl: 0}}>

                                        <Button 
                                            variant="contained" 
                                            sx={{
                                                backgroundColor: '#f8bd00', 
                                                borderRadius: '50px', 
                                                fontSize: '16pt',
                                                fontFamily: 'GilamRegular',
                                                width: '40%',
                                                color: 'black',
                                                '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                            }} 
                                            disableElevation>
                                                LP #33
                                        </Button>
                                    </ListItem>
                                    <Box height={40} />
                                    <Typography  sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                        Para obtener más información sobre esta
                                        residencia, por favor envíanos un mensaje
                                        y con gusto te contactaremos. 
                                    </Typography>
                                    <Box height={10} />
                                    <Divider className='padding-mobile' sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Grid className='padding-mobile' container >
                                        <Grid item xs={5}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                               55.8000.3735
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                                +52 56 39661468
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
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
                                         TERRAZA
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{p:0, m:0, justifyContent: 'end'}} display="flex" justifyContent='flex-end'>
                                    <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                        RESIDENCIA 1
                                    </Typography>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <Box height={20} />
                                <ListItem sx={{pl: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    Esta residencia tiene 67m² interiores que conectan con una
                                    gran terraza privada de 30m². Disfrutarás de 2 amplias
                                    recámaras, la principal con acceso a la terraza. Además, 2
                                    baños completos, estancia y cocina integrados, y jardinería
                                    montada e iluminada. 
                                </ListItem>
                            </Grid>
                            
                            <Grid className='padding-mobile' item xs={12}>
                                
                                <ListItem>

                                    <p className='overlay-terraza'>01.</p>

                                    <Box sx={{fontFamily: 'GilamRegular', fontSize: '16pt', ml:2}} className=''>ALZADO</Box>
                                </ListItem>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture01} alt=""/>
                            </Grid>
                            <Grid className='padding-mobile' item xs={12}>
                                
                                <img className='second-picture-desarrollo-detail-mobile' src={Picture02} alt=""/>
                            </Grid>

                            <Grid sx={{mt:5, fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={6}>
                                <ListItem>
                                    DETALLES
                                </ListItem>
                            </Grid>
                            <Grid className='padding-mobile' sx={{mt:8, fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={6}>

                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:'50px'}} item xs={12}>
                                {/* <ListItem>
                                    DETALLES
                                </ListItem> */}
                                {/* <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/> */}
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture03} alt=""/>
                                <Box height={20} />
                            </Grid>

                            <Grid className='padding-mobile' sx={{mt:'15px'}} xs={3}>

                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid className='padding-mobile' sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}} display="flex" justifyContent="flex-start" xs={12}>
                                <ListItem sx={{pl:0}}>
                                    El departamento está diseñado para poder ventilar
                                    de forma cruzada, lo que permite una temperatura
                                    fresca y evita estancamiento de olores.
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <img className='first-picture-desarrollo-detail-mobile' src={Picture05} alt=""/>
                                <Box height={40} />
                            </Grid>

                        </Grid>
                        <Grid className='padding-mobile' container>
                            <Grid sx={{position: 'relative'}} item xs={6}>

                                <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00', alignItems: 'end', position: 'absolute', bottom: 0}}>
                                    97M²
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                
                                <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                            </Grid>
                        </Grid>
                                <Box height={10} />
                        <Grid className='padding-mobile' container>
                            {/* <Grid display="flex" justifyContent="flex-end" item xs={3}>
                                <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00', alignItems: 'end'}}>
                                    01
                                </ListItem>
                            </Grid> */}
                            <Grid container xs={9}>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={CuartoIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={BathIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 BAÑOS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={TerrazaIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px', overflow: 'visible'}} component={CocheraIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 CAJÓN
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
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
                                <img className='first-picture-desarrollo-detail' src={HeaderPicture} alt=""/>
                                <Typography  sx={{textAlign: 'right', fontFamily: 'GilamLight', fontSize: '16pt'}}>
                                    Fotografía Exterior
                                </Typography>
                            </Grid>

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
                                                fontFamily: 'GilamRegular',
                                                width: '40%',
                                                textAlign: 'left',
                                                color: 'black',

                                                '&.MuiButton-root:hover':{bgcolor: '#f8bd00'} 
                                            }} 
                                            disableElevation>
                                                LP #34
                                        </Button>
                                    </ListItem>
                                    <Box height={40} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                        Para obtener más información sobre esta
                                        residencia, por favor envíanos un mensaje
                                        y con gusto te contactaremos. 
                                    </Typography>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Grid container >
                                        <Grid item xs={6}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                               55.8000.3735
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
                                                +52 56 39661468
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLight', fontSize: '16pt'}}>
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
                                            DEPARTAMENTO TERRAZA
                                        </Typography>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                            RESIDENCIA 1
                                        </Typography>
                                    </Grid>
                                    <Box height={10} />

                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={20} />
                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        Esta residencia tiene 67m² interiores que conectan con una
                                        gran terraza privada de 30m². Disfrutarás de 2 amplias
                                        recámaras, la principal con acceso a la terraza. Además, 2
                                        baños completos, estancia y cocina integrados, y jardinería
                                        montada e iluminada. 
                                    </ListItem>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>

                            <Card>
                                <div style={{ position: "relative" }}>
                                    <CardMedia component="img" image={Picture01} title="" alt="Yes"/> 
                                    <Box style={{position: "absolute", top: 30, right: '8%'}}>
                                        <ListItem>

                                        <p className='overlay-terraza'>01.</p>
                                        
                                        <Box sx={{fontFamily: 'GilamRegular', fontSize: '16pt', ml:2}} className=''>ALZADO</Box>
                                        </ListItem>
                                    </Box>
                                </div>
                            </Card>
                                {/* <img className='second-picture-desarrollo-detail' src={Picture01} alt=""/> */}
                            </Grid>
                            <Grid container spacing={2} xs={12}>
                                <Grid item xs={5}>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture02} alt=""/>
                                </Grid>
                                <Grid container xs={7}>
                                    <Grid sx={{mt:'30px', fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={3}>
                                        DETALLES
                                    </Grid>
                                    <Grid sx={{mt:'40px'}} item xs={9}>
                                        
                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    </Grid>
                                    <Grid container xs={12}>
                                        <Grid item xs={12}>
                                            <img className='second-picture-desarrollo-detail' src={Picture03} alt=""/>
                                        </Grid>
                                        <Grid sx={{mt:'15px'}} xs={2}>

                                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                        </Grid>
                                        <Grid sx={{fontFamily: 'HelveticaLight', fontSize: '20pt', textAlign: 'left'}} display="flex" justifyContent="flex-start" xs={10}>
                                            El departamento está diseñado para poder ventilar
                                            de forma cruzada, lo que permite una temperatura
                                            fresca y evita estancamiento de olores.
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/>
                                </Grid>
                                <Grid item xs={9}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture05} alt=""/>
                                    <Box height={50}> 
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid columns={1} display='flex' justifyContent="flex-start"  item xs={3}>
                                    <Box height={100}>
                                        <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#f8bd00'}}>
                                            97M²
                                        </ListItem>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>

                                    <ListItem>
                                        <SvgIcon sx={{mt:'10px', overflow: 'visible'}} component={CuartoIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 RECÁMARAS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10px', overflow: 'visible'}} component={BathIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            2 BAÑOS
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={3}>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10px', overflow: 'visible'}} component={TerrazaIcon} />
                                        <Box sx={{width:18}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            TERRAZA
                                        </Typography>
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'10px', overflow: 'visible'}} component={CocheraIcon} />
                                        <Box sx={{width:18}}/>
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
