import { Divider, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import React from 'react'
import Delivery from "../Assets/delivery-image.png";
import CircleIcon from '@mui/icons-material/Circle';
import ConoceImage from "../Assets/Icons/Home/conoce.svg";
import ProfilePicDetalles from "../Assets/fotos_test/profilecondetalles.png";
import ProfilePic from "../Assets/fotos_test/profile.png";
import {ReactComponent as MujerIcon} from "../Assets/Icons/Home/mujer.svg";
import {ReactComponent as HombreIcon} from "../Assets/Icons/Home/hombre.svg";

import { useMediaQuery } from 'react-responsive';
import { Box } from '@mui/system';

export const KnowBrick = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
    // query: '(min-width: 1224px)'
  })

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    
    <div>
        {
        isDesktopOrLaptop ? 
        <div className='color-know-brick-page'>
            <div className='know-brick-page-interior'>
                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                <Grid className='' container spacing={1}>
                    <Grid container item xs={5}>
                        <Grid item xs={6}>

                            <p className='first-section-know-brick first-section-left-text'>
                                CONOCE
                            </p>
                            <p className='first-section-know-brick first-section-left-text'>
                                A BRICK
                            </p>
                        </Grid>
                        <Grid item xs={6}>
                            
                        <img className='first-section-know-pic' src={ConoceImage} alt=""/>
                        </Grid>
                    </Grid>
                    <Grid item xs={7}>
                        <ListItem className='first-section-know-brick first-section-right-text'>
                            Lorem ipsum dolor sit amet, conctetuer adipiscing
                            elit volutpat. Hendrerit in vulputate velit esse Ut wisi
                            enim
                        </ListItem>
                    </Grid>
                </Grid>

                <Grid className='' container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            <img src={ProfilePicDetalles} alt=""/>
                        </ListItem>
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
                    </Grid>
                    {/* <Grid item xs={1}>

                    </Grid> */}
                    <Grid item xs={7}>
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        <Grid container>

                            <Grid className='second-section-text-color' item xs={5}>

                                <ListItem className='second-text-main-name' >
                                    ANA REYNA.
                                </ListItem>
                                <ListItem className='second-text-sub-name'>
                                    Lorem ipsum dolor sit
                                </ListItem>
                                <ListItem >

                                    <SvgIcon fill='red' sx={{mt:'8px'}} component={MujerIcon} />
                                    {/* <CircleIcon sx={{height: 60, width: 60}}/> */}
                                </ListItem>

                            </Grid>
                            <Grid item xs={7}>

                                <ListItem className='second-text-right-age'>
                                    31.
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

               <Box sx={{height: 25}}/>

                <Grid className='' container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            <img src={ProfilePic} alt=""/>
                        </ListItem>
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
                    </Grid>
                    {/* <Grid item xs={1}>

                    </Grid> */}
                    <Grid item xs={7}>
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        <Grid container>

                            <Grid className='second-section-text-color' item xs={5}>

                                <ListItem className='second-text-main-name' >
                                    ANA REYNA.
                                </ListItem>
                                <ListItem className='second-text-sub-name'>
                                    Lorem ipsum dolor sit
                                </ListItem>
                                <ListItem >
                                    <SvgIcon fill='yellow' sx={{mt:'8px', width:'80px', height:'80px', color: 'red'}} component={HombreIcon} />
                                </ListItem>

                            </Grid>
                            <Grid item xs={7}>

                                <ListItem className='second-text-right-age'>
                                    31.
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <CircleIcon />
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:1}} />
                                    <Typography>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div> 
        :<div></div>   
    }
    </div>
  )
}
