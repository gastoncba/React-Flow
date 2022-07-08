import React from "react";
import {Card, CardContent, CardActions, Typography, CardMedia, Button, CardActionArea} from '@mui/material'

interface Props {}

const CardSlider: React.FunctionComponent<Props> = (props: Props) => {
    return(
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    )
}

export default CardSlider;