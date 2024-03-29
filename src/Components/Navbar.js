import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {ReactComponent as CorreoIcon} from "../Assets/Icons/Desarrollos/contacto.svg";
import { List, Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, SvgIcon, Grid, Typography, Link} from "@mui/material";
import HomeIcon  from "@mui/icons-material/Home";
import InfoIcon  from "@mui/icons-material/Info";
import CommentRoundedIcon  from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon  from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon  from '@mui/icons-material/ShoppingCartRounded';
import BrickText from "../Assets/Icons/Logo/logo.svg";
import { useEffect } from 'react';

export const Navbar = (props) => {
  const funcTrigger = props.scrollTo;

  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);

    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },)
  
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "About",
      icon: <InfoIcon />
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />
    },
  ]

  return (
    <nav className={`basic-padding-navbar ${sticky ? 'sticky' : ''}` }>
      <Grid className="navbar-links-container" container>

        <Grid sx={{pt: 0}} item xs={4}>
          <img className="nav-logo" src={BrickText} alt="" />
        </Grid>
        <Grid sx={{pt: 0, justifyContent: 'right'}} disablePadding item xs={2}>
          <ListItem sx={{justifyContent: 'end'}}>
            <Link color="black" underline="hover" onClick={() => {
              funcTrigger('know')
            }}>
              <Typography sx={{fontFamily: 'HelveticaLight', fontSize: '14pt'}}>Conoce a Brick.</Typography>
            </Link>
            {/* <Link color="black" underline="hover" onClick={() => {
              funcTrigger('goals')
            }}>
            <Typography>Objetivos.</Typography>
            </Link>
            <Box width={50} /> */}

          </ListItem>
        </Grid>
        <Grid sx={{pt: 0, justifyContent: 'left'}} disablePadding item xs={2}>
          <ListItem >

            {/* <Link color="black" underline="hover" onClick={() => {
              funcTrigger('goals')
            }}>
            <Typography>Objetivos.</Typography>
            </Link>
            <Box width={50} /> */}

            <Link color="black" underline="hover" onClick={() => {
              funcTrigger('desarrollos')
            }}>
            <Typography sx={{fontFamily: 'HelveticaLight', fontSize: '14pt'}}>Desarrollos.</Typography>
            </Link>
          </ListItem>
        </Grid>
        <Grid  display="flex" justifyContent="flex-end" sx={{justifyContent: 'end', pt:0}} item xs={4} sm={4}>
          <Button sx={{borderRadius: 8, backgroundColor: 'black', height: 40, color: '#f8bd00', '&.MuiButton-root:hover':{bgcolor: 'black'} }} 
            variant="contained" startIcon={<SvgIcon sx={{mt:'8px', overflow: 'visible', color: '#f8bd00'}} stroke='#f8bd00' component={CorreoIcon} />}>
            Contacto.
          </Button>
        </Grid>
      </Grid>
      {/* <div className="nav-logo-container">
        <img className="intro-page-logo" src={BrickText} alt="" />
      </div> */}

      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div> */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(true)} anchor="right">
        <Box sx={{
          width: 250
        }} 
          role="presentation"
          onClick={()=>setOpenMenu(false)}
          onKeyDown={()=>setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </nav>
  )
}
