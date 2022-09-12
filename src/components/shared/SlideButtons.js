import { Box, CircularProgress, Grid, IconButton, Modal, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Replay10RoundedIcon from '@mui/icons-material/Replay10Rounded';
import Forward10RoundedIcon from '@mui/icons-material/Forward10Rounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import SubtitlesRoundedIcon from '@mui/icons-material/SubtitlesRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import YouTube from 'react-youtube';

function SlideButtons() {

    const [isLike, setIsLike] = useState(false)
    const [isAdded2W, setIsAdded2W] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack direction={'row'}>

                <IconButton aria-label="add" onClick={() => setIsAdded2W(!isAdded2W)}>
                    {isAdded2W ?
                        <RemoveCircleIcon color='success' />
                        :
                        <AddCircleIcon />
                    }
                </IconButton>

                <IconButton aria-label="like" onClick={() => setIsLike(!isLike)}>
                    {isLike ?
                        <FavoriteIcon color='primary' />
                        :
                        <FavoriteBorderIcon />
                    }
                </IconButton>

                <IconButton aria-label="play" onClick={handleOpen}>
                    <PlayCircleRoundedIcon />
                </IconButton>

            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={'100%'}
                    height={'100vh'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                >

                    <Box p={2}>
                        <IconButton aria-label="play" onClick={handleClose} sx={{ cursor: 'pointer' }}>
                            <ArrowBackRoundedIcon fontSize='large' />
                        </IconButton>
                    </Box>

                    <Box p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Slider aria-label="Volume" value={10} />
                            </Grid>
                            <Grid item>
                                <PlayArrowRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <Replay10RoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <Forward10RoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <VolumeUpRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item xs>
                                <Typography></Typography>
                            </Grid>
                            <Grid item>
                                <SkipNextRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <SubscriptionsRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <SubtitlesRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item>
                                <SpeedRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                            <Grid item ml={2}>
                                <FullscreenRoundedIcon fontSize='large' sx={{ cursor: 'pointer', '&:hover': { scale: '1.2' } }} />
                            </Grid>
                        </Grid>
                    </Box>

                    <CircularProgress color="primary" sx={{ position: 'absolute', top: '50%', left: '50%' }} />

                    <Box position={'absolute'} width={'100%'} height={'100vh'} sx={{ background: 'black', zIndex: -20 }} />


                </Box>
            </Modal>
        </>
    )
}

export default SlideButtons