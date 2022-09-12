import { AppBar, Avatar, Badge, Box, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import netflixLogo from '../../assets/images/navbar_logo.png'
import profileP from '../../assets/images/profile1.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import profileP2 from '../../assets/images/profile2.png'
import profileP3 from '../../assets/images/profile3.png'
import profileP4 from '../../assets/images/profile4.png'
import EditIcon from '@mui/icons-material/Edit';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const navigation = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'TV Shows',
      to: '/tv'
    },
    {
      label: 'Movies',
      to: '/movies'
    }
  ]

  const userMenuProfiles = [
    {
      name: 'Chicken',
      img: profileP
    },
    {
      name: 'Penguin',
      img: profileP2
    },
    {
      name: 'Bob',
      img: profileP3
    },
    {
      name: 'John',
      img: profileP4
    }
  ]

  const userMenuNav = [
    {
      name: 'Manage Profiles',
      icon: <EditOutlinedIcon />
    },
    {
      name: 'Account',
      icon: <PersonIcon />
    },
    {
      name: 'Help Center',
      icon: <HelpOutlineOutlinedIcon />
    },
  ]

  const [userMenuDisplay, setUserMenuDisplay] = useState(false)
  const [notificationsMenuDisplay, setNotificationsMenuDisplay] = useState(false)

  function openUserMenu() {
    setNotificationsMenuDisplay(false)
    setUserMenuDisplay(true)
  }

  function openNotificationsMenu() {
    setUserMenuDisplay(false)
    setNotificationsMenuDisplay(true)
  }

  function closeAllMenus() {
    setUserMenuDisplay(false)
    setNotificationsMenuDisplay(false)
  }

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} height={'100%'}>

            <Box className='navStart' display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Box
                component={'img'}
                src={netflixLogo}
                sx={{
                  height: {
                    xs: '15px',
                    md: '30px'
                  }
                }}
              />
              <nav>
                <ul style={{display:'flex'}}>
                  {navigation.map(nav => (
                    <li key={nav.label} style={{listStyle:'none', marginRight:'15px'}}>
                      <NavLink
                        to={nav.to}
                        style={({ isActive }) =>
                          isActive ?
                            {
                              color: 'white',
                              textDecoration:'none'
                            }
                            :
                            {
                              color: 'grey',
                              textDecoration:'none'
                            }
                        }
                      >
                        {nav.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </Box>

            <Box className='navEnd' display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Box mr={2} sx={{ cursor: 'pointer' }} display={'flex'} justifyContent={'center'} alignItems={'center'}
                onMouseOver={closeAllMenus}
              >
                <SearchIcon />
              </Box>
              <Box mr={2} sx={{ cursor: 'pointer' }} display={'flex'} justifyContent={'center'} alignItems={'center'}
                onMouseOver={openNotificationsMenu}
              >
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>

              </Box>
              <Box className='notificationsMenu'
                onMouseLeave={() => setNotificationsMenuDisplay(false)}
                sx={{
                  display: notificationsMenuDisplay ? 'flex' : 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 70,
                  right: 75,
                  width: '300px',
                  height: '100px',
                  border: '1px solid rgba(255, 255, 255, .2)'
                }}
              >
                <Box>

                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                 
                    <Typography variant='body1' color={'text.secondary'}>No recent notifications</Typography>
            
                  </Box>

                </Box>
                <Box sx={{ position: 'absolute', width: '100%', height: '100%', background: 'black', opacity: '.85', zIndex: -50 }} />
              </Box>
              <Box className='profile' display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ cursor: 'pointer' }}
                onMouseOver={openUserMenu}

              >
                <Box
                  mr={1}
                  component={'img'}
                  src={profileP}
                  sx={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
                <ArrowDropUpIcon
                  sx={{
                    transform: userMenuDisplay ? 'rotate(0deg)' : 'rotate(180deg)',
                    transition: 'all .2s ease-in-out'
                  }} />
              </Box>
              <Box className='userMenu'
                onMouseLeave={() => setUserMenuDisplay(false)}
                sx={{
                  display: userMenuDisplay ? 'flex' : 'none',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: 70,
                  right: 5,
                  width: '230px',
                  border: '1px solid rgba(255, 255, 255, .2)'
                }}
              >
                <Box
                  m={1}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {userMenuProfiles.map(profile => (
                    <Box key={profile.name} display={'flex'} alignItems={'center'} mb={1.5}>
                      <Box component={'img'} src={profile.img} sx={{ width: '30px', height: '30px' }}></Box>
                      <Typography variant='body1' ml={1} sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>{profile.name}</Typography>
                    </Box>
                  ))}
                  {userMenuNav.map(nav => (
                    <Box key={nav.name} display={'flex'} alignItems={'center'} mb={1.5}>
                      {nav.icon}
                      <Typography variant='body1' ml={1} sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>{nav.name}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ width: '100%', borderTop: 'solid 1px grey' }} textAlign={'center'} p={2}>
                  <Typography variant='body1' sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Sign Out of Netflix</Typography>
                </Box>
                <Box sx={{ position: 'absolute', width: '100%', height: '100%', background: 'black', opacity: '.85', zIndex: -50 }} />
              </Box>


            </Box>


          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar