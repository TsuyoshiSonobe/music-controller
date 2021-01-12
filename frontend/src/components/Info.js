import React, {useState, useEffect} from 'react';
import {Grid, Button, Typography, IconButton} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {Link} from 'react-router-dom';

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create'
};

export default function Info(props){
    const [page, setPage] = useState(pages.JOIN);
    
    function joinInfo(){
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h6" variant="h6">
                        Join Page
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">      
                    Para entrar em uma sala basta digitar seu código no campo indicado.
                </Grid>
            </Grid>
        );
    }

    function createInfo(){
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h6" variant="h6">
                        Create Page
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">      
                    Para criar uma sala, basta preencher os campos de controle dos convidados 
                    e votos necessários para pular a música.
                </Grid>
            </Grid>
        );
    }

    useEffect(() => {
        // aqui para usar componentDidMount
        console.log('ran');

        // return para usar componentWillUnmount
        return () => console.log('cleanup');
    });

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Informações
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    {page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick={() => {
                    page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE) 
                }}>
                    {page === pages.CREATE ? <NavigateBeforeIcon /> : <NavigateNextIcon/>}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back
            </Button>
            </Grid>
        </Grid>
    )
}