import { Button, Card, CardMedia, Divider, ListItem, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import DesarrolloImage from "../../Assets/Icons/Home/desarrollo.svg";
import DepartamentoPicture from '../../Assets/departamentos-de-lujo-2.jpeg';
import MesaTrabajoPicture from '../../Assets/fotos_test/Mesa_de_trabajo_101.png';
import MesaTrabajo2Picture from '../../Assets/fotos_test/Mesa_de_trabajo_102.png';
import Desarrollo1 from '../../Assets/fotos_test/desarrollo01.png';
import Desarrollo3 from '../../Assets/fotos_test/desarrollo03.png';
import { Box } from '@mui/system';
import {ReactComponent as BathIcon} from "../../Assets/Icons/Desarrollos/año.svg";
import {ReactComponent as CuartoIcon} from "../../Assets/Icons/Desarrollos/cuarto.svg";
import {ReactComponent as TerrazaIcon} from "../../Assets/Icons/Desarrollos/terraza.svg";
import {ReactComponent as CocheraIcon} from "../../Assets/Icons/Desarrollos/cochera.svg";
import Home01 from '../../Assets/fotos_test/home01.png';
import { useMediaQuery } from 'react-responsive';

export const Departamento = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        // query: '(min-width: 1224px)'
      })
    
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
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
                                <img className='first-picture-desarrollo-detail' src={DepartamentoPicture} alt=""/>
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
            isDesktopOrLaptop
                ?   
                    <>
                        <Grid container xs={12}>
                                <img className='first-picture-desarrollo-detail' src={DepartamentoPicture} alt=""/>
                            </Grid>

                            <Grid container xs={12}>
                                <Grid item xs={2}>
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
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                        Cda monet 33
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
                                        <Typography sx={{fontFamily: 'GilamLight', fontSize: '30pt'}}>
                                            DEPTO 01
                                        </Typography>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '16pt'}}>
                                            04828
                                        </Typography>
                                    </Grid>

                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <ListItem sx={{paddingLeft: 0,fontFamily: 'HelveticaLight', fontSize: '20pt'}}>
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
                                    <img className='second-picture-desarrollo-detail-a' src={Desarrollo1} alt=""/>
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
                                            <img className='second-picture-desarrollo-detail' src={Home01} alt=""/>
                                        </Grid>
                                        <Grid sx={{mt:'15px'}} xs={2}>

                                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                        </Grid>
                                        <Grid sx={{fontFamily: 'HelveticaLight', fontSize: '20pt'}} display="flex" justifyContent="flex-start" xs={10}>
                                            Lorem ipsum sit dolor amet consectetur wea la yesyes test
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>    
                                    <img className='second-picture-desarrollo-detail-a' src={MesaTrabajo2Picture} alt=""/>
                                </Grid>
                                <Grid item xs={9}>    
                                    <img className='second-picture-desarrollo-detail-a' src={Desarrollo3} alt=""/>
                                    <Box height={50}> 
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid columns={1} display='flex' justifyContent="flex-start"  item xs={3}>
                                    <Box height={100}>
                                        <ListItem sx={{fontFamily: 'GilamSemiBold', fontSize: '50pt', color: '#ce7a23'}}>
                                            01
                                        </ListItem>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>

                                    <ListItem>
                                        <SvgIcon sx={{mt:'8px'}} component={BathIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            DOS CUARTOS
                                        </Typography>
                                        {/* <p className="helvetica-objetivos">Lorem ipsum.</p> */}
                                    </ListItem>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <ListItem sx={{fontFamily: 'GilamRegular', fontSize: '13pt'}}>
                                        <SvgIcon sx={{mt:'8px'}} component={CuartoIcon} />
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
                                        <SvgIcon sx={{mt:'8px'}} component={CocheraIcon} />
                                        <Box sx={{width:12}}/>
                                        <Typography sx={{fontFamily: 'GilamRegular', fontSize: '13pt', mt:'10px'}}>
                                            COCHERA
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
