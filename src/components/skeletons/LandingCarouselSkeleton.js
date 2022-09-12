import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import CarouselSkeleton from './CarouselSkeleton'

function LandingCarouselSkeleton() {
  return (
            <Box
                mb={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    width: '100%',
                    aspectRatio: '16/10',
                }}>

                <Box sx={{ height: '56px' }}></Box>

                    <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                        <CircularProgress color="primary" />
                    </Box>

                <CarouselSkeleton />

            </Box>
  )
}

export default LandingCarouselSkeleton