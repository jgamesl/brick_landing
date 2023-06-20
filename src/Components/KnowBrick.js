import { Divider, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ConoceImage from "../Assets/Icons/Home/conoce.svg";
import LogoStars from "../Assets/iconos_mejores/11.svg";
import SecondKnowBricPicture from "../Assets/iconos_mejores/12.svg";
import MetasIcon from "../Assets/iconos_mejores/13.svg";
import ProfilePicDetalles from "../Assets/fotos_test/profilecondetalles.png";
import ProfilePic from "../Assets/fotos_test/profile.png";
// import MetasImage from "../Assets/Icons/Home/metas.svg";
import {ReactComponent as MujerIcon} from "../Assets/Icons/Home/mujer.svg";
import {ReactComponent as HombreIcon} from "../Assets/Icons/Home/hombre.svg";
// import {ReactComponent as LogoStars} from "../Assets/iconos_mejores/11.svg";

import {ReactComponent as EscuelaIcon} from "../Assets/Icons/Home/icono1.svg";
import {ReactComponent as JobIcon} from "../Assets/Icons/Home/icono2.svg";
import {ReactComponent as PaperIcon} from "../Assets/Icons/Home/icono3.svg";
import {ReactComponent as GraphIcon} from "../Assets/Icons/Home/01.svg";
import {ReactComponent as TargetIcon} from "../Assets/Icons/Home/02.svg";
import {ReactComponent as FocoIcon} from "../Assets/Icons/Home/03.svg";
import {ReactComponent as HeartIcon} from "../Assets/Icons/Home/04.svg";
import {ReactComponent as ShieldIcon} from "../Assets/Icons/Home/05.svg";

import { useMediaQuery } from 'react-responsive';
import { Box } from '@mui/system';

export const KnowBrick = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    // query: '(min-width: 1224px)'
  })

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    
    <div>
        {
            isTabletOrMobile 
              ?  <div className='color-know-brick-page'>
                <div className='know-brick-page-interior-mobile'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>

                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                        <Grid justifyContent="left" item xs={7}>

                            
                                <p className='first-section-know-brick first-section-left-text'>
                                    CONOCE
                                </p>
                                <p className='first-section-know-brick first-section-left-text'>
                                    A BRICK.
                                </p>
                        </Grid>
                        <Grid item xs={5}>

                            <ListItem sx={{ml:0, pl:0}}>
                            
                                <img className='first-section-know-pic' src={ConoceImage} alt=""/>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <ListItem>
                                <img className='logo-stars-mobile' src={LogoStars} alt=""/>
                            </ListItem>

                            <ListItem sx={{ml: 0, pl: 0}} className='first-section-know-brick first-section-right-text-header'>
                                SOMOS UN GRUPO DE
                                PROFESIONALES APASIONADOS POR
                                EL DESARROLLADO DE VIVIENDA.
                            </ListItem>

                            <ListItem sx={{pl: 0}} className='first-section-know-brick first-section-right-text'>
                                Fusionamos el talento creativo en diseño arquitectónico y la
                                meticulosa disciplina en construcción. 
                            </ListItem>
                            <Box height={30} />

                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            <Box height={30} />

                            <ListItem sx={{pl:0}} className='first-section-right-text' item xs={5}>
                                Nuestro enfoque se basa en la
                                búsqueda constante de la
                                excelencia y la creación de
                                espacios que cautiven al usuario
                                con un enfoque centrado 
                            </ListItem>
                            <Box height={30} />
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                    </Grid>
                    
                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                    <Box height={60} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>

                            <ListItem sx={{ml:0, pl:0}}>
                                <p className='first-section-know-brick first-section-left-text'>
                                    OBJETIVOS
                                </p>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            </ListItem>
                        </Grid>
                        <Grid item xs={4}>
                            <img className='metas-section-know-pic' src={MetasIcon} alt=""/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            <ListItem sx={{pl:0,ml:0,mt:2, mb:2}} className='first-section-know-brick first-section-right-text' item xs={6}>
                                Nuestro objetivo es crear
                                hogares de ensueño que
                                respondan a un alto estándar
                                de calidad de vida y bienestar
                                de quien lo habita. 
                            </ListItem>
                            <Box height={20} />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <Box height={40} /> */}
                            <ListItem sx={{ml:0, pl:0}} className='objetivos-text-title-name' >
                                VALORES
                            </ListItem>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>

                            <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={GraphIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">La mejor calidad.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={TargetIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Diseño funcional.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={FocoIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Excelencia constructiva.</p>
                                </ListItem >
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1}}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={HeartIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Bienestar.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1}}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px', color: '#f8bd00'}} component={ShieldIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Calidad duradera.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <Box height={60} />

                                <ListItem sx={{ml:0, pl:0}} className='objetivos-text-title-name' >
                                    OBJETIVO
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>

                                <ListItem sx={{pl:0,ml:0,mt:2, mb:2}} className='first-section-know-brick first-section-right-text' item xs={6}>
                                    Con cada proyecto, combinamos el diseño arquitectónico con
                                    la excelencia constructiva, garantizando resultados que perduran
                                    en el tiempo.
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem sx={{pl:0,pt:5}}>

                                    <img className='logo-second' src={SecondKnowBricPicture} alt=""/>
                                </ListItem>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={2}>
                            <Grid item xs={4}>

                                <p className='first-section-know-brick first-section-left-text'>
                                    CONOCE
                                </p>
                                <p className='first-section-know-brick first-section-left-text'>
                                    A BRICK.
                                </p>
                            </Grid>
                            <Grid item xs={8}>

                                <img className='first-section-know-pic' src={ConoceImage} alt=""/>
                            </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        
                        <ListItem className='first-section-know-brick first-section-right-text'>
                            Lorem ipsum dolor sit amet, conctetuer adipiscing
                            elit volutpat. Hendrerit in vulputate velit esse Ut wisi
                            enim
                        </ListItem>
                        <Box height={40} />
                    </Grid>
                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <ListItem className='first-section-know-brick first-section-left-text'>
                                <img src={ProfilePicDetalles} alt=""/>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            
                            <ListItem className='second-text-main-name' >
                                    ANA REYNA.
                                </ListItem>
                                <ListItem className='second-text-sub-name'>
                                    Lorem ipsum dolor sit
                                </ListItem>
                                <ListItem >
                                    <SvgIcon stroke='yellow' fill='yellow' sx={{mt:'8px', width: '50px', height: '50px'}} component={MujerIcon} />
                                    
                                </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ListItem className='second-text-right-age'>
                                31.
                            </ListItem>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                               
                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <ListItem sx={{mt:0}}>

                                <SvgIcon htmlColor='yellow' component={EscuelaIcon} />
                                <Box sx={{mr:1}} />
                                <Typography sx={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '14pt',
                                    color: '#f8bd00'
                                }}>
                                    Lorem ipsum dolor 
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem sx={{mt:0}}>
                                <Typography sx={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '14pt',
                                    color: '#f8bd00'
                                }}>
                                    Lorem ipsum dolor sit
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid sx={{mt:-2}} item xs={12}>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <ListItem sx={{mt:0}}>

                                <SvgIcon htmlColor='yellow' component={JobIcon} />
                                <Box sx={{mr:1}} />
                                <Typography sx={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '14pt',
                                    color: '#f8bd00'
                                }}>
                                    Lorem ipsum dolor 
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem sx={{mt:0}}>
                                <Typography sx={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '14pt',
                                    color: '#f8bd00'
                                }}>
                                    Lorem ipsum dolor sit
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid sx={{mt:-2}} item xs={12}>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <ListItem sx={{mt:0}}>

                                <SvgIcon htmlColor='yellow' component={PaperIcon} />
                                <Box sx={{mr:1}} />
                                <Typography sx={{
                                    fontFamily: 'HelveticaLight',
                                    fontSize: '14pt',
                                    color: '#f8bd00'
                                }}>
                                     Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid sx={{mt:-2}} item xs={12}>
                            <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </Grid>
                    </Grid> */}
                </div>
              </div>
              :  <></>
        }
        {
        (isBigScreen || isDesktopOrLaptop)  ? 
        <div className='color-know-brick-page'>
            <div className='know-brick-page-interior'>
                <Grid className='' container spacing={1}>
                    <Grid container item xs={5}>
                        <Grid sx={{ml:0, pl:0}} item xs={6}>

                            <p className='first-section-know-brick first-section-left-text'>
                                CONOCE
                            </p>
                            <p className='first-section-know-brick first-section-left-text'>
                                A BRICK.
                            </p>
                        </Grid>
                        <Grid item xs={1}>
                            
                        <img className='first-section-know-pic' src={ConoceImage} alt=""/>
                        </Grid>
                        <Grid item xs={12}>

                            <img className='logo-stars' src={LogoStars} alt=""/>
                        </Grid>
                    </Grid>
                    <Grid item xs={7}>
                        <ListItem sx={{ml: 0, pl: 0}} className='first-section-know-brick first-section-right-text-header'>
                            SOMOS UN GRUPO DE
                            PROFESIONALES APASIONADOS POR
                            EL DESARROLLADO DE VIVIENDA.
                        </ListItem>
                        <ListItem sx={{pl: 0}} className='first-section-know-brick first-section-right-text'>
                            Fusionamos el talento creativo en diseño arquitectónico y la
                            meticulosa disciplina en construcción. 
                        </ListItem>

                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        <Box height={40} />
                        <Grid container>
                            <Grid className='first-section-right-text' item xs={5}>
                                Nuestro enfoque se basa en la
                                búsqueda constante de la
                                excelencia y la creación de
                                espacios que cautiven al usuario
                                con un enfoque centrado
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid className='first-section-know-brick first-section-right-text' item xs={6}>
                                en la mejora de calidad de vida,
                                la combinación de espacios
                                abiertos y un diseño interior
                                excepcional.
                            </Grid>
                        </Grid>

                        <Box height={40} />
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                    </Grid>
                </Grid>

                <Box height={20} />
                <Grid className='' container spacing={1}>
                    <Grid container item xs={5}>
                        <ListItem sx={{ml:0, pl:0}}>

                            <p className='first-section-know-brick first-section-left-text'>
                                OBJETIVOS
                            </p>
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        </ListItem>
                        <Box height={80} />
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                    </Grid>
                    <Grid container item xs={7}>

                        <img className='metas-section-know-pic' src={MetasIcon} alt=""/>
                    </Grid>
                </Grid>
                <Grid className='' container spacing={1}>
                    <Grid item xs={4}>
                        <Box height={47.3} />

                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        <ListItem sx={{pl:0,ml:0,mt:2, mb:2}} className='first-section-know-brick first-section-right-text' item xs={6}>
                            Nuestro objetivo es crear
                            hogares de ensueño que
                            respondan a un alto estándar
                            de calidad de vida y bienestar
                            de quien lo habita. 
                        </ListItem>

                        <img className='logo-second' src={SecondKnowBricPicture} alt=""/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={7}>

                        <ListItem sx={{ml:0, pl:0}} className='objetivos-text-title-name' >
                            VALORES
                        </ListItem>
                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={GraphIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">La mejor calidad.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={TargetIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Diseño funcional.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={FocoIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Excelencia constructiva.</p>
                                </ListItem >
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1}}/>
                            </Grid>
                            <Grid item xs={6}>

                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px'}} component={HeartIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Bienestar.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1}}/>
                                <ListItem sx={{paddingLeft: 0, mt:0.5, mb:0.5}}>
                                    <SvgIcon sx={{mt:'8px', color: '#f8bd00'}} component={ShieldIcon} />
                                    <Box sx={{width:4}}/>
                                    <p className="first-section-right-text">Calidad duradera.</p>
                                </ListItem>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                        <Box height={60} />

                        <ListItem sx={{ml:0, pl:0}} className='objetivos-text-title-name' >
                            OBJETIVOS
                        </ListItem>

                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>

                        <ListItem sx={{pl:0,ml:0,mt:2, mb:2}} className='first-section-know-brick first-section-right-text' item xs={6}>
                            Con cada proyecto, combinamos el diseño arquitectónico con
                            la excelencia constructiva, garantizando resultados que perduran
                            en el tiempo.
                        </ListItem>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Divider sx={{ backgroundColor: 'red', borderBottomWidth: 8 }}/>
                </Grid>
                <Grid container spacing={1}>
                        <Divider sx={{ backgroundColor: 'red', borderBottomWidth: 8 }}/>
                    <Grid container item xs={5}>
                        <Box height={40} />
                        <Divider sx={{ backgroundColor: 'red', borderBottomWidth: 1 }}/>
                    </Grid>
                    <Grid container item xs={7}>

                        <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                    </Grid>
                </Grid>
                {/* <Grid className='' container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <ListItem className='first-section-know-brick first-section-left-text'>
                            <img src={ProfilePicDetalles} alt=""/>
                        </ListItem>
                    </Grid>
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
                                    <SvgIcon stroke='yellow' fill='yellow' sx={{mt:'8px', width: '50px', height: '50px'}} component={MujerIcon} />
                                    
                                </ListItem>

                            </Grid>
                            <Grid item xs={7}>

                                <ListItem className='second-text-right-age'>
                                    31.
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <SvgIcon htmlColor='yellow' sx={{mt:'8px', color:'red'}} component={EscuelaIcon} />
                                    <Box sx={{mr:1}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:3}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <SvgIcon fill='red' sx={{mt:'8px', color:'red'}} component={JobIcon} />
                                    <Box sx={{mr:1}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:3}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                <ListItem className='second-section-text-color'>
                                    <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/>
                                    <SvgIcon fill='red' sx={{mt:'8px', color:'red'}} component={PaperIcon} />
                                    <Box sx={{mr:1}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                    <Box sx={{mr:3}} />
                                    <Typography sx={{
                                        fontFamily: 'HelveticaLight',
                                        fontSize: '14px'
                                    }}>
                                        Lorem ipsum dolor sit
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}

               {/* <Box sx={{height: 25}}/>
                <Divider sx={{ backgroundColor: '#f8bd00', borderBottomWidth: 1 }}/> */}

            </div>
        </div> 
        :<div></div>   
    }
    </div>
  )
}
