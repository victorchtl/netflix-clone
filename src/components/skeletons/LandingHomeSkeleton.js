import { Box, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'

function LandingHomeSkeleton() {

  const skeletonArray = Array.from(Array(7).keys())

  function getAspectRatio(index) {
    if (index === 0) return '2'
    else if (index === 1 || index === 2) return '1'
    else return '16/9'
  }

  return (
    <Box m={1} mt={12}>
      <Typography variant='h2' mb={1}>Category</Typography>
      <Grid container spacing={1}>
        {skeletonArray.map(movie => (
          <Grid item xs={movie === 0 ? 6 : 3}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: getAspectRatio(movie),
              }}
            >
              <Skeleton variant='rectangular' width={'100%'} height={'100%'} sx={{ borderRadius: '3px' }}></Skeleton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LandingHomeSkeleton