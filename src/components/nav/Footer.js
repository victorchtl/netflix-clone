import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {

    const footerNavigation = [
        'Audio Description',
        'Help Center',
        'Gift Cards',
        'Media Center',
        'Investor Relations',
        'Jobs',
        'Term of Use',
        'Privacy',
        'Legal Notices',
        'Cookie Preferences',
        'Corporate Information',
        'Contact Us'
    ]

    return (
        <Container>
            <Grid container mt={10} mb={5}>
                <Grid item xs={12} textAlign={'center'} mb={3}>
                    <Stack direction={'row'} spacing={2}>
                        <FacebookIcon sx={{cursor:'pointer'}}/>
                        <InstagramIcon sx={{cursor:'pointer'}}/>
                        <TwitterIcon sx={{cursor:'pointer'}}/>
                        <YouTubeIcon sx={{cursor:'pointer'}}/>
                    </Stack>
                </Grid>
                {footerNavigation.map(nav => (
                    <Grid item xs={6} sm={6} md={3} key={nav}>
                        <Typography variant='overline'>{nav}</Typography>
                    </Grid>
                ))}
                <Grid item xs={12}  mt={3}>
                    <Button variant='outlined' size='small'>Service Code</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer