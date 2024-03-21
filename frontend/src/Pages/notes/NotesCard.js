import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { branches } from '../../Data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function NotesCard({data , dataIndex}) {





  return (
  <>






    <Card sx={{ maxWidth: 345, }} key = {dataIndex}>

      
      <CardActionArea>
        
        <CardContent style = {{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style = {{display:"flex", justifyContent:"center"}}>
      <Button variant="contained" style = {{backgroundColor:'#E49010'}}>Click</Button>
      </CardActions>
      
    </Card>
  
    </>
  );
}