import { Divider, Grid, ListItem, Typography } from '@mui/material';
import React from 'react'
import Delivery from "../Assets/delivery-image.png";
import CircleIcon from '@mui/icons-material/Circle';

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
                <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                <Grid className='' container spacing={2}>
                    <Grid item xs={4}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            CONOCE A BRICK
                            <img className='first-section-know-pic' src={Delivery} alt=""/>
                        </ListItem>
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
                    </Grid>
                    <Grid item xs={1}>

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
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            <img className='second-section-know-pic' src={Delivery} alt=""/>
                        </ListItem>
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={7}>
                        <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                        <Grid container>

                            <Grid className='second-section-text-color' item xs={5}>

                                <ListItem className='second-text-main-name' >
                                    ANA REYNA.
                                </ListItem>
                                <ListItem >
                                    Lorem ipsum dolor sit
                                </ListItem>
                                <ListItem >
                                    <CircleIcon sx={{height: 60, width: 60}}/>
                                </ListItem>

                            </Grid>
                            <Grid item xs={7}>

                                <ListItem className='second-text-right-age'>
                                    31.
                                </ListItem>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            <img className='second-section-know-pic' src={Delivery} alt=""/>
                        </ListItem>
                        {/* <ListItem className='first-section-know-pic'>

                        </ListItem> */}
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={7}>
                        <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                        <Grid container>

                            <Grid className='second-section-text-color' item xs={5}>

                                <ListItem className='second-text-main-name' >
                                    ANA REYNA.
                                </ListItem>
                                <ListItem >
                                    Lorem ipsum dolor sit
                                </ListItem>
                                <ListItem >
                                    <CircleIcon sx={{height: 60, width: 60}}/>
                                </ListItem>

                            </Grid>
                            <Grid item xs={7}>

                                <ListItem className='second-text-right-age'>
                                    31.
                                </ListItem>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: 'white', borderBottomWidth: 1 }}/>
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
