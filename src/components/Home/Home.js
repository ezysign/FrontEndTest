import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles,Container, Grid, Box,CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from "react-router-dom";

import Navbar from './../Navbar/Navbar';
import UserCard from './UserCard.js';
import { fetchListAction } from './../../actions/listActions.js';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container:
    {
        paddingTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 240,
    },
    card:
    {
        padding: 20,
        elevation: 2,
    },
    pagination_container:
    {
        marginTop: 20,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItem: "center",


    },
    loadingContainer: 
    {
        width:'100%',
        height:200,
        marginTop:40,
        textAlign:"center",
    }
}));

export default function Home(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history=useHistory();

    const data = useSelector(state => state.list.data);
    const loading = useSelector(state => state.list.loading);
    const total_pages = useSelector(state => state.list.total_pages);
    const page = useSelector(state => state.list.page);

    
    function loadData(page)
    {
        document.documentElement.scrollTop = 0;
        dispatch(fetchListAction({page:page}));
    }


    useEffect(() => {
        
        // get the page number of the route
        var current_route_page=props.match.params.page;
        if (!current_route_page)
        {
            current_route_page=1;
        }

        // fetch the data if the data state is null or route's page number is not the same as current page of the data
        if (data==null || (data.length>0 && (current_route_page && current_route_page!=page)) ) 
        {
          
           loadData(current_route_page);
        }
       
    })

    function paginationChange(event,page)
    {
        
        history.push("/home/"+page);
    }

    let display = null;
    if (loading)
    {
        display=<div className={classes.loadingContainer}>
                        <CircularProgress disableShrink color="inherit"  size="4rem"/>
                    </div>
    }
    else 
    {
        if (data)
        display = data.map((val) => {
                return (
                    <Grid item md={4} xs={12} sm={6}>
                        <UserCard  data={val} />
                    </Grid>
                );
        })
    }
    


    
    

    return (
        <div>
            <Navbar />
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    
                    {display}
                </Grid>
                <Box className={classes.pagination_container}>
                    <Pagination count={total_pages}   page={page}  onChange={paginationChange} />
                </Box>

            </Container>
        </div>
    );
}