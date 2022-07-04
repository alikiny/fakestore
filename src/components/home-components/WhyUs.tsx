import React from 'react'
import { Box, Grid, Button, Card, CardContent, CardActions } from '@mui/material'

const reasons = ['Realiability', 'Quality', 'Speed']

const WhyUs = () => {
    return (
        <Grid
            className='home__grid__container'
            container
            direction='row'
            spacing={2}
            justifyContent={'center'}
        >
            {reasons.map((reason, index) => (
                <Grid
                    item
                    md={3}
                    xs={3}
                    key={index}
                >
                    <Card className='home__grid__item' key={reason}>
                        <CardContent>
                            <h3>{reason}</h3>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default WhyUs