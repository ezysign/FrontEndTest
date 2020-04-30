import React from 'react';
import { 
    makeStyles,Card,CardActionArea,
    CardContent,CardMedia,Typography 
} from '@material-ui/core';

import "./style.css";
import {Animated} from "react-animated-css";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 240,
    },
    card: 
    {
        padding:20,
        backgroundColor:"#fff",
    }
}));

export default function UserCard(props) {
    const classes = useStyles();

    return (
                <Animated animationIn="fadeIn"  isVisible={true} animationInDelay ={10}>
                        <Card className={classes.card} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={props.data.avatar}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {props.data.first_name+" "+props.data.last_name}
                                    </Typography>
                                    <Typography>
                                        {props.data.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        
                        </Card>
                 </Animated>
    );
}