
import { Divider, Grid, ListItem, Typography, Button, CardMedia, Card } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Delivery from "../Assets/delivery-image.png";
import DepartamentoPicture from '../Assets/departamentos-de-lujo-2.jpeg';
import CircleIcon from '@mui/icons-material/Circle';
export const DesarrollosPage = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
        // query: '(min-width: 1224px)'
      })
    
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <>
        {
            isDesktopOrLaptop ? 

            <div className='color-objetivos-page'>
                <div className='objetivos-page-interior'>
                <Grid className='' container spacing={2}>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick objetivos-section-left-text second-section-objetivos'>
                                DESARROLLOS
                            
                            <img className='first-section-know-pic' src={Delivery} alt=""/>

                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        {/* <Box sx={{height: 30}}/> */}

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
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
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
                            {/* <Grid item xs={5}>

                            </Grid> */}
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
                                {/* <Card>
                                    <CardMedia src={DepartamentoPicture}>

                                    </CardMedia>
                                </Card> */}
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

                        {/* <ListItem></ListItem> */}

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
                </Grid>
                </div>
            </div> : <div></div>
        }
    </>
  )
}
