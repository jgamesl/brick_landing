
import { Divider, Grid, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Delivery from "../Assets/delivery-image.png";
import CircleIcon from '@mui/icons-material/Circle';
export const ObjetivosPage = () => {
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
                        OBJETIVOS
                    
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
                <img className='objetivos-low-pic' src={Delivery} alt=""/>
                {/* <ListItem className='first-section-know-pic'>

                </ListItem> */}
            </Grid> 
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={7}>
                <Box sx={{height: 76
                }}/>
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
