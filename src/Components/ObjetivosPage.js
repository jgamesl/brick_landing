
import { Divider, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
// import Delivery from "../Assets/delivery-image.png";
import CircleIcon from '@mui/icons-material/Circle';
import MetasImage from "../Assets/Icons/Home/metas.svg";
import {ReactComponent as GraphIcon} from "../Assets/Icons/Home/01.svg";
import {ReactComponent as TargetIcon} from "../Assets/Icons/Home/02.svg";
import {ReactComponent as FocoIcon} from "../Assets/Icons/Home/03.svg";
import {ReactComponent as HeartIcon} from "../Assets/Icons/Home/04.svg";
import {ReactComponent as ShieldIcon} from "../Assets/Icons/Home/05.svg";
export const ObjetivosPage = () => {
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
                <div className='color-objetivos-page'>
                    <div className='objetivos-page-interior-mobile'>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                <ListItem className='objetivos-section-left-text second-section-objetivos'>
                                    OBJETI
                                </ListItem>

                                <ListItem className='objetivos-section-left-text second-section-objetivos'>
                                    VOS.
                                </ListItem>
                            </Grid>
                            <Grid display="flex" justifyContent="flex-start" item xs={6}>
                                
                                <img className='first-section-know-pic' src={MetasImage} alt=""/>
                            </Grid>
                            <Grid item xs={8}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={8}>
                                <ListItem >
                                    <p className='helvetica-objetivos-left'>
                                    Lorem ipsum dolor sit amet, conctetuer adipiscing
                                    elit 
                                    </p>
                                </ListItem>
                                <Box height={24} />
                            </Grid>
                            <Grid item xs={12}>

                                <ListItem className='objetivos-text-main-name' >
                                VALORES
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:-2}} item xs={12}>
                                <ListItem>
                                    <SvgIcon sx={{mt:'8px'}} component={GraphIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="helvetica-objetivos">Lorem ipsum.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:-2}} item xs={12}>
                                <ListItem>
                                    <SvgIcon sx={{mt:'8px'}} component={TargetIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="helvetica-objetivos">Lorem ipsum.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:-2}} item xs={12}>
                                <ListItem>
                                    <SvgIcon sx={{mt:'8px'}} component={FocoIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="helvetica-objetivos">Lorem ipsum.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:-2}} item xs={12}>
                                <ListItem>
                                    <SvgIcon sx={{mt:'8px'}} component={HeartIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="helvetica-objetivos">Lorem ipsum.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid sx={{mt:-2}} item xs={12}>
                                <ListItem>
                                    <SvgIcon sx={{mt:'8px'}} component={ShieldIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="helvetica-objetivos">Lorem ipsum.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Box height={30} />
                                <ListItem className='objetivos-text-main-name' >
                                OBJETIVOS1
                                </ListItem>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={8}>
                                <ListItem>
                                    <p className="helvetica-objetivos">
                                        Lorem ipsum dolor sit amet,
                                        dolor sit amet, dolor si
                                    </p>
                                </ListItem>  
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={8}>
                                <ListItem>
                                    <p className="helvetica-objetivos">
                                        Lorem ipsum dolor sit amet,
                                    </p>
                                </ListItem>   
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={8}>
                                <ListItem>

                                    <p className="helvetica-objetivos">
                                        Lorem ipsum dolor sit amet,
                                        dolor sit amet, dolor si
                                    </p>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid display="flex" justifyContent="flex-start" item xs={6}>

                                <Box height={30}/>
                                <img className='objetivos-low-pic' src={MetasImage} alt=""/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            :  <></>
    }
    {
    isDesktopOrLaptop ? 

    <div className='color-objetivos-page'>
        <div className='objetivos-page-interior'>
        <Grid className='' container spacing={2}>
            <Grid item xs={2}>

                    <ListItem className='objetivos-section-left-text second-section-objetivos'>
                            OBJETI
                    </ListItem>

                    <ListItem className='objetivos-section-left-text second-section-objetivos'>
                            VOS.
                    </ListItem>
            </Grid> 
            <Grid item xs={1}>

                <img className='first-section-know-pic' src={MetasImage} alt=""/>
            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={7}>
     
            </Grid>
        </Grid>
        <Grid className='' container spacing={2}>
            <Grid item xs={3}>
                <Box height={45} />
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>

                <Box height={30}/>
                <ListItem >
                    <p className='helvetica-objetivos-left'>
                    Lorem ipsum dolor sit amet, conctetuer adipiscing
                    elit volutpat. Hendrerit in vulputate velit esse Ut wisi
                    enim
                    </p>
                </ListItem>
                <Box height={80}/>
                <img className='objetivos-low-pic' src={MetasImage} alt=""/>
            </Grid> 

            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={7}>
     
                <ListItem sx={{paddingLeft: 0}} className='objetivos-text-main-name' >
                  VALORES
                </ListItem>
                <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                <Grid className='' container spacing={2}>
                    <Grid item xs={6}>
                        <ListItem sx={{paddingLeft: 0}}>
                            <SvgIcon sx={{mt:'8px'}} component={GraphIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Lorem ipsum.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                        <ListItem sx={{paddingLeft: 0}}>
                            <SvgIcon sx={{mt:'8px'}} component={TargetIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Dolor.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        <ListItem sx={{paddingLeft: 0}}>
                            <SvgIcon sx={{mt:'8px'}} component={FocoIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Amet silum.</p>
                        </ListItem >
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                    </Grid>
                    <Grid item xs={6}>

                        <ListItem sx={{paddingLeft: 0}}>
                            <SvgIcon sx={{mt:'8px'}} component={HeartIcon} />
                            <Box sx={{width:4}}/>
                            <p className="helvetica-objetivos">Lorem ipsum.</p>
                        </ListItem>
                        <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
                        <ListItem sx={{paddingLeft: 0}}>
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
                    {/* <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/> */}

                        <Grid item xs={6}>
                            <ListItem sx={{paddingLeft: 0}}>

                                <p className="helvetica-objetivos">
                                    Lorem ipsum dolor sit amet,
                                    dolor sit amet, dolor si
                                </p>
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 }}/>
                            <Box sx={{height: 30}}/>
                            <ListItem sx={{paddingLeft: 0}}>

                                <p className="helvetica-objetivos">
                                    Lorem ipsum dolor sit amet,
                                    dolor sit amet, dolor si
                                </p>
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>    
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem sx={{paddingLeft: 0}}>

                                <p className="helvetica-objetivos">
                                    Lorem ipsum dolor sit amet,
                                    dolor sit amet, dolor si
                                </p>
                            </ListItem>
                            <Divider sx={{ backgroundColor: 'black', borderBottomWidth: 1 , color: 'red'}}/>
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
