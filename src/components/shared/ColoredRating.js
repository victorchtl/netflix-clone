import React from 'react'
import Gradient from "javascript-color-gradient";
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


function ColoredRating({ rating }) {

    const colorCellFromValue = (rating) => {
        return new Gradient()
            .setColorGradient('#f44336', '#ff9800', '#4caf50')
            .setMidpoint(98)
            .getColor((rating * 10) + 1);
    };

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                value={rating * 10}
                sx={{ 
                    color: colorCellFromValue(rating),
                }}

            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${(rating)}`}
                </Typography>
            </Box>
        </Box>
    )
}

export default ColoredRating

