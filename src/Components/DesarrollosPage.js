
import { Divider, Grid, ListItem, Typography, SvgIcon, Button, CardMedia, Card } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Delivery from "../Assets/delivery-image.png";
import DepartamentoPicture from '../Assets/departamentos-de-lujo-2.jpeg';
import CircleIcon from '@mui/icons-material/Circle';
import DesarrolloImage from "../Assets/Icons/Home/desarrollo.svg";
import {ReactComponent as GraphIcon} from "../Assets/Icons/Home/01.svg";
import {ReactComponent as TargetIcon} from "../Assets/Icons/Home/02.svg";
import {ReactComponent as FocoIcon} from "../Assets/Icons/Home/03.svg";
import {ReactComponent as HeartIcon} from "../Assets/Icons/Home/04.svg";
import {ReactComponent as ShieldIcon} from "../Assets/Icons/Home/05.svg";
export const DesarrollosPage = () => {

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
            isPortrait 
                ?   <div className='color-objetivos-page'>
                        <div className='desarrollos-page-interior-mobile'>
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
                                <Grid display="flex" justifyContent="flex-start" item xs={6}>

                                    <img className='first-section-know-pic' src={DesarrolloImage} alt=""/>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box height={30} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box height={30}/>
                                    <ListItem >
                                        <p className='helvetica-desarrollos-left'>
                                        Lorem ipsum dolor sit amet, conctetuer adipiscing
                                        elit
                                        </p>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>

                                    <Box height={40} />
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
                                </Grid>
                                <Grid item xs={8}>
                                    <Box height={20} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                </Grid>
                                <Grid item xs={6}>

                                    <Box height={20} />
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
                                </Grid>
                                <Grid item xs={8}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={50} />
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem sx={{justifyContent:'space-between'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '30pt'
                                        }}> 
                                            LP #33
                                        </Typography>

                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
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
                                </Grid>
                                <Grid item xs={12}>
                                    <Box height={50} />
                                    <ListItem>

                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            Lorem ipsum dolor sit amet, 
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            conctetuer adipiscing elit volutpat. 
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            Hendrerit in vulputate velit esse Ut
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography style={{
                                            fontFamily: 'HelveticaLight',
                                            fontSize: '24px',
                                            lineHeight: '1'
                                        }}>
                                            wisi enim
                                        </Typography>
                                    </ListItem>
                                    <Box height={50} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>  
                                </Grid>

                                <Grid item xs={12}>
                                    <Box height={30} />
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                            <div style={{position: "absolute", left: "25%", top: 10,transform: "translateX(-50%)",}}>
                                                <ListItem>

                                                <p className='title-text-image-desarrollo-over'>01.</p>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Lorem ipsum
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                    }}>
                                                        Ver más
                                                    </Typography>
                                                </div>
                                                </ListItem>
                                            </div>
                                        </div>
                                    </Card>
                                    <Box height={10} />             
                                    <Card sx={{ maxHeight: '400px'}}>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia height={400} component="img" image={DepartamentoPicture} title="" alt=""/> 
                                            <div style={{position: "absolute", left: "25%", top: 10,transform: "translateX(-50%)",}}>
                                                <ListItem>

                                                <p className='title-text-image-desarrollo-over'>01.</p>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Lorem ipsum
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                    }}>
                                                        Ver más
                                                    </Typography>
                                                </div>
                                                </ListItem>
                                            </div>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                            <div style={{position: "absolute", left: "25%", top: 10,transform: "translateX(-50%)",}}>
                                                <ListItem>

                                                <p className='title-text-image-desarrollo-over'>01.</p>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Lorem ipsum
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                    }}>
                                                        Ver más
                                                    </Typography>
                                                </div>
                                                </ListItem>
                                            </div>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                            <div style={{position: "absolute", left: "25%", top: 10,transform: "translateX(-50%)",}}>
                                                <ListItem>

                                                <p className='title-text-image-desarrollo-over'>01.</p>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Lorem ipsum
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                    }}>
                                                        Ver más
                                                    </Typography>
                                                </div>
                                                </ListItem>
                                            </div>
                                        </div>
                                    </Card>
                                    <Box height={10} />          
                                    <Card>
                                        <div style={{ position: "relative" }}>
                                            <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                            <div style={{position: "absolute", left: "25%", top: 10,transform: "translateX(-50%)",}}>
                                                <ListItem>

                                                <p className='title-text-image-desarrollo-over'>01.</p>
                                                <Box width={15}/>
                                                <div> 
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Lorem ipsum
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Helvetica Light',
                                                        fontSize: '16px',
                                                        color: 'black',
                                                    }}>
                                                        Ver más
                                                    </Typography>
                                                </div>
                                                </ListItem>
                                            </div>
                                        </div>
                                    </Card>
                                    <Box height={50} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
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
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                        consectetur lorem iosu
                                    </Typography>
                                    <Box height={10} />
                                    <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                                    <Box height={10} />
                                    <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16pt'}}>
                                        consectetur lorem iosu
                                    </Typography>
                                    <Box height={10} />
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                : <></>
        }
        {
            isDesktopOrLaptop ? 

            <div className='color-objetivos-page'>
                <div className='desarrollos-page-interior'>
                <Grid className='' container spacing={2}>
                    <Grid item xs={5}>
                        <Grid container>

                            <Grid item xs={5}>
                                
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
                                <ListItem >
                                    <p className='helvetica-desarrollos-left'>
                                    Lorem ipsum dolor sit amet, conctetuer adipiscing
                                    elit
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
            
                        <ListItem sx={{justifyContent:'space-between'}}>
                            <Typography sx={{
                                fontFamily: 'GilamSemiBold',
                                fontSize: '30pt'
                            }}> 
                                LP #33
                            </Typography>

                            <Button 
                                variant="contained" 
                                sx={{backgroundColor: 'orange', borderRadius: '50px', fontSize: '18px'}} 
                                disableElevation>
                                    VER MÁS.
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Grid item xs={10}>

                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24px',
                                    lineHeight: '1.2'
                                }}>
                                    Lorem ipsum dolor sit amet, 
                                </Typography>
                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24px',
                                    lineHeight: '1.2'
                                }}>
                                    conctetuer adipiscing elit volutpat. 
                                </Typography>
                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24px',
                                    lineHeight: '1.2'
                                }}>
                                    Hendrerit in vulputate velit esse Ut
                                </Typography>
                                <Typography style={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '24px',
                                    lineHeight: '1.2'
                                }}>
                                    wisi enim
                                </Typography>
                            </Grid>
                        </ListItem>
                        <ListItem>
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
                                    LP #34
                            </Button>
                        </ListItem>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <Box height={150} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16px'}}>
                            cda monet 33
                        </Typography>
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16px'}}>
                            Gran residencial 43983
                        </Typography>
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16px'}}>
                            CDMX
                        </Typography>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16px'}}>
                            consectetur lorem iosu
                        </Typography>
                        <Box height={10} />
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <Box height={10} />
                        <Typography sx={{textAlign: 'left', fontFamily: 'HelveticaLigth', fontSize: '16px'}}>
                            consectetur lorem iosu
                        </Typography>
                        <Box height={10} />
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{maxWidth: '95%'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                    <ListItem>

                                    <p className='title-text-image-desarrollo-over'>01.</p>
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                        }}>
                                            Ver más
                                        </Typography>
                                    </div>
                                    </ListItem>
                                </div>
                            </div>
                        </Card>
                        <Box height={10} />             
                        <Card sx={{maxWidth: '95%', maxHeight: '400px'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia height={400} component="img" image={DepartamentoPicture} title="" alt=""/> 
                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                    <ListItem>

                                    <p className='title-text-image-desarrollo-over'>01.</p>
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                        }}>
                                            Ver más
                                        </Typography>
                                    </div>
                                    </ListItem>
                                </div>
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
                        <Card sx={{maxWidth: '95%'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={DepartamentoPicture} title="" alt="Yes"/> 
                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                    <ListItem>

                                    <p className='title-text-image-desarrollo-over'>01.</p>
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                        }}>
                                            Ver más
                                        </Typography>
                                    </div>
                                    </ListItem>
                                </div>
                            </div>
                        </Card>
                        <Box height={10} /> 
                        <Card sx={{maxWidth: '95%' }}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={DepartamentoPicture} title="Wea" alt="Yes"/> 
                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                    <ListItem>

                                    <p className='title-text-image-desarrollo-over'>01.</p>
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                        }}>
                                            Ver más
                                        </Typography>
                                    </div>
                                    </ListItem>
                                </div>
                            </div>
                        </Card>
                        <Box height={10} /> 
                        <Card sx={{maxWidth: '95%'}}>
                            <div style={{ position: "relative" }}>
                                <CardMedia component="img" image={DepartamentoPicture} title="Wea" alt="Yes"/> 
                                <div style={{position: "absolute", left: "35%", top: 10,transform: "translateX(-50%)",}}>
                                    <ListItem>

                                    <p className='title-text-image-desarrollo-over'>01.</p>
                                    <Box width={15}/>
                                    <div> 
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Helvetica Light',
                                            fontSize: '16px',
                                            color: 'black',
                                        }}>
                                            Ver más
                                        </Typography>
                                    </div>
                                    </ListItem>
                                </div>
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
