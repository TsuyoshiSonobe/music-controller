import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Info from "./Info";

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            roomCode: null
        };
        this.clearRoomCode = this.clearRoomCode.bind(this);
    }
    
    async componentDidMount(){
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                roomCode: data.code
            });
        });
    }

    clearRoomCode(){
        this.setState({
            roomCode: null
        });
    }
    
    renderHomePage(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup variant="contained" color="primary">
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="default" to="/info" component={Link}>
                        Info
                    </Button>
                </Grid>
            </Grid>
        );
    }

    render(){
        return (
        <Router>
            <Switch>
                <Route exact path='/' render={() => {
                    return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`} /> ) : (this.renderHomePage())
                }} />
                <Route path='/join' component={RoomJoinPage}></Route>
                <Route path='/info' component={Info}></Route>
                <Route path='/create' component={CreateRoomPage}></Route>
                <Route path='/room/:roomCode' render={(props) => {
                    return <Room {...props} leaveRoomCallback={this.clearRoomCode}/>;
                }}></Route>
            </Switch>
        </Router>);
    }
}