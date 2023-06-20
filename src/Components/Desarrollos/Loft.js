import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
// import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
// import MesaTrabajo2Picture from '../../Assets/fotos_test/Mesa_de_trabajo_102.png';
import MesaTrabajoPicture from '../../Assets/PROYECTOS/03/01.png';
import MesaTrabajo2Picture from '../../Assets/PROYECTOS/03/02.png';
// import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
// import Desarrollo3 from '../../Assets/fotos_test/desarrollo03.png';
import Desarrollo1 from '../../Assets/PROYECTOS/03/01.png';
import Desarrollo3 from '../../Assets/PROYECTOS/03/02.png';
import HeaderPicture from '../../Assets/PROYECTOS/01/header.png';
import Picture01 from '../../Assets/PROYECTOS/03/01.png';
import Picture02 from '../../Assets/PROYECTOS/03/02.png';
import Picture03 from '../../Assets/PROYECTOS/03/03.png';
import Picture04 from '../../Assets/PROYECTOS/03/04.png';
import Picture05 from '../../Assets/PROYECTOS/03/05.png';
import Picture06 from '../../Assets/PROYECTOS/03/06.png';
import { Box } from '@mui/system';
// import {ReactComponent as BathIcon} from "../../Assets/Icons/Desarrollos/año.svg";
// import {ReactComponent as CuartoIcon} from "../../Assets/Icons/Desarrollos/cuarto.svg";
// import {ReactComponent as TerrazaIcon} from "../../Assets/Icons/Desarrollos/terraza.svg";
// import {ReactComponent as CocheraIcon} from "../../Assets/Icons/Desarrollos/cochera.svg";
import {ReactComponent as BathIcon} from "../../Assets/iconos_mejores/30.svg";
import {ReactComponent as CuartoIcon} from "../../Assets/iconos_mejores/27.svg";
import {ReactComponent as TerrazaIcon} from "../../Assets/iconos_mejores/28.svg";
import {ReactComponent as CocheraIcon} from "../../Assets/iconos_mejores/29.svg";
import { useMediaQuery } from 'react-responsive';

export const Loft = () => {
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
                                <Box height={30} />
                            </Grid>
                            <Grid item xs={6}>

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
                                            LP #34
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
                            </Grid>
                            <Grid item xs={12}>
                                <Box height={30} />
                                
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem display="flex" justifyContent="space-between">
                                    <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                        DEPTO 01
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid display="flex" item xs={6}>
                                <ListItem sx={{justifyContent: 'end'}}>
                                    <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                        04828
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                {/* <ListItem> */}
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                {/* </ListItem> */}
                                <Box height={20} />
                                <ListItem sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                    Lorem ipsum dolor sit amet,

                                        conctetuer adipiscing elit volut-
                                        pat. Hendrerit in vulputate velit

                                        esse Ut wisi enim. Hendrerit in
                                        vulputate velit esse Ut wisi enim
                                        Hendrerit in vulputate velit esse.
                                    </ListItem>
                                <Box height={20} />
                                
                                <img className='second-picture-desarrollo-detail-mobile' src={MesaTrabajoPicture} alt=""/>
                            </Grid>

                            <Grid sx={{mt:'30px', fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={6}>
                                <ListItem>
                                    DETALLES
                                </ListItem>
                            </Grid>
                            <Grid sx={{mt:'50px'}} item xs={12}>
                                {/* <ListItem>
                                    DETALLES
                                </ListItem> */}
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                <img className='second-picture-desarrollo-detail-a' src={Desarrollo1} alt=""/>
                                <Box height={20} />
                            </Grid>

                            <Grid sx={{mt:'15px'}} xs={3}>

                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}} display="flex" justifyContent="flex-start" xs={9}>
                                Lorem ipsum sit dolor amet consectetur wea la yesyes test
                            </Grid>
                            
                            <Box height={40} />
                            <Grid item xs={12}>
                                <ListItem>
                                    <img className='second-picture-desarrollo-detail-a' src={Desarrollo1} alt=""/>
                                </ListItem>
                            </Grid>
                            <Box height={40} />
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
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid display="flex" justifyContent="flex-end" item xs={3}>
                                <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#ce7a23', alignItems: 'end'}}>
                                    01
                                </ListItem>
                            </Grid>
                            <Grid container xs={9}>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={CuartoIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS CUARTOS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={BathIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS BAÑOS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={TerrazaIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS TERRAZA
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                
                                <Grid item xs={3}>
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={CocheraIcon} />
                                        <Box sx={{width:12}}/>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            COCHERA
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
                                                LP #34
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
                                            LOFT
                                        </Typography>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                            RESIDENCIA 3
                                        </Typography>
                                    </Grid>

                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        Esta residencia está dividida en dos niveles y tiene en
                                        planta baja 47m² interiores y en planta alta un roof garden
                                        privado de 40m² en total. Al interior disfrutarás de una
                                        amplia recámara con baño completo, estancia y cocina
                                        integral. Además, la terraza tiene jardinería montada e
                                        iluminada y barra para recibir asador. 
                                    </ListItem>
                                </Grid>
                            </Grid>
                            {/* <Grid container xs={12}>
                                <img className='second-picture-desarrollo-detail' src={Picture01} alt=""/>
                            </Grid> */}
                            <Grid container spacing={4}>
                                <Grid item xs={7}>

                                    <img className='second-picture-desarrollo-detail-a' src={Picture01} alt=""/>
                                </Grid>
                                <Grid item xs={5}>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture02} alt=""/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={7}>
                                    <img className='second-picture-desarrollo-detail' src={Picture03} alt=""/>
                                    <Box height={10} />

                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        ROOF TOP
                                    </ListItem>
                                </Grid>
                                <Grid item xs={5}>
                                    <img className='second-picture-desarrollo-detail' src={Picture04} alt=""/>
                                    <Box height={10} />

                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                        PLANTA BAJA
                                    </ListItem>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                {/* <Grid sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}} display="flex" justifyContent="flex-start" xs={10}>
                                    El departamento está diseñado para poder ventilar
                                    de forma cruzada, lo que permite una temperatura
                                    fresca y evita estancamiento de olores.
                                </Grid> */}
                            </Grid>
                            <Grid container spacing={2} xs={12}>
                                <Grid item xs={7}>
                                    <img className='second-picture-desarrollo-detail-a' src={Picture05} alt=""/>
                                </Grid>
                                <Grid container xs={5}>
                                    <Grid sx={{mt:'30px', fontFamily: 'GilamSemiBold', fontSize: '19pt'}} item xs={3}>
                                        DETALLES
                                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1, mt:3 }}/>
                                    </Grid>
                                        <Grid item xs={12}>
                                            <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
                                                El departamento está diseñado
                                                para poder ventilar de forma
                                                cruzada, lo que permite una
                                                temperatura fresca y evita
                                                estancamiento de olores.
                                            </ListItem>
                                        </Grid>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>    

                                    <Box height={100}>
                                        <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#ce7a23', mt:10}}>
                                            87M2
                                        </ListItem>
                                    </Box>
                                    <Box height={10} />
                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={CuartoIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            1 RECÁMARA
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
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
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
                                    {/* <img className='second-picture-desarrollo-detail-a' src={Picture04} alt=""/> */}
                                </Grid>
                                <Grid item xs={9}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Picture06} alt=""/>
                                    <Box height={50}> 
                                    </Box>
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
