import { Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BrickLogo from "../Assets/Icons/Home/isotipo2.svg";
import CorreoImage from "../Assets/Icons/Home/correo.svg";
import { Box } from '@mui/system';

export const FileSection = () => {


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
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
                ?   <div className='color-last-page'>
                        <div className='last-page-interior-mobile'>
                            <Grid container>

                                <Grid itemx xs={3}>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <img className='last-page-logo' src={CorreoImage} alt=""/>
                                    </ListItem>
                                </Grid>
                                <Grid itemx xs={3}>
                                </Grid>
                                <Grid itemx xs={3}>
                                </Grid>
                                <Grid itemx xs={3}>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <img className='last-page-logo' src={BrickLogo} alt=""/>
                                    </ListItem>
                                </Grid>
                                <Grid itemx xs={12}>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '30pt',
                                            lineHeight: '0.6',
                                            marginTop: '40px',
                                            color: '#f8bd00'
                                        }}>
                                            HOLA@
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '30pt',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            BRICK.COM.MX
                                        </Typography>
                                    </ListItem>
                                </Grid>

                                <Grid item xs={12}>

                                    <Box height={60} />
                                </Grid>
                                <Grid itemx xs={6}>
                                    <ListItem sx={{paddingLeft: '0px'}}>

                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Contacto
                                        </Typography>
                                    </ListItem>
                                </Grid>
                                <Grid itemx xs={6}>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Instagram
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Facebook
                                        </Typography>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={12}>

                                    <Box height={60} />
                                </Grid>
                                <Grid itemx xs={6}>

                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Cda Monet 33
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Soleil Residencial
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            2361 CDMX
                                        </Typography>
                                    </ListItem>
                                    <Box heigth={50}/>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            5555-555-555
                                        </Typography>
                                    </ListItem>
                                </Grid>

                                <Grid itemx xs={6}>

                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Conoce a Brick.
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Objetivos.
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Desarrollos.
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{paddingLeft: '0px'}}>
                                        <Typography sx={{
                                            fontFamily: 'GilamSemiBold',
                                            fontSize: '16px',
                                            lineHeight: '0.6',
                                            color: '#f8bd00'
                                        }}>
                                            Contacto.
                                        </Typography>
                                    </ListItem>
                                    </Grid>
                            </Grid>
                        </div>
                    </div>
                :   <></>
        }
        {
            isDesktopOrLaptop 
                ? <div className='color-last-page'>
                    <div className='last-page-interior'>

                        <Grid justify="flex-start" container>
                            <Grid itemx xs={3}>
                                <ListItem sx={{paddingLeft: '0px'}}>
                                    <img className='last-page-logo' src={CorreoImage} alt=""/>
                                </ListItem>
                            </Grid>
                            <Grid itemx xs={3}>
                                <ListItem >
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '30pt',
                                        lineHeight: '0.6',
                                        marginTop: '40px',
                                        color: '#f8bd00'
                                    }}>
                                        HOLA@
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '30pt',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        BRICK.COM.MX
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid itemx xs={2}>

                            </Grid>
                            <Grid itemx xs={2}>

                            </Grid>
                                <img className='last-page-logo' src={BrickLogo} alt="we"/>
                            <Grid itemx xs={2}>

                            </Grid>
                        </Grid>

                        <Box height={80}/>
                        <Grid container>
                            <Grid itemx xs={3}>
                                <ListItem sx={{paddingLeft: '0px'}}>

                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Contacto
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid itemx xs={3}>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Instagram
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Facebook
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid itemx xs={2}>

                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Cda Monet 33
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Soleil Residencial
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        2361 CDMX
                                    </Typography>
                                </ListItem>
                                <Box heigth={20}/>
                                <ListItem>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        5555-555-555
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid itemx xs={2}>

                            </Grid>
                            <Grid itemx xs={2}>

                                <ListItem sx={{paddingLeft: '0px'}}>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Conoce a Brick.
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{paddingLeft: '0px'}}>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Objetivos.
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{paddingLeft: '0px'}}>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Desarrollos.
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{paddingLeft: '0px'}}>
                                    <Typography sx={{
                                        fontFamily: 'GilamSemiBold',
                                        fontSize: '16px',
                                        lineHeight: '0.6',
                                        color: '#f8bd00'
                                    }}>
                                        Contacto.
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </div>
                </div> 
                : <div></div>
        }
    </>
  );
}
