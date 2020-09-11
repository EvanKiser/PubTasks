import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import '../css/header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            popUpOpen: false,
        };    
    }

    togglePop = () => {
      this.props.callbackToPopUp(true);
    }

    render() {
        return (
            <Container maxWidth="lg">
            <Toolbar className="toolbar">
            <Button size="small">Subscribe</Button>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className="toolbarTitle"
            >
                {this.state.title}
            </Typography>
            <Button variant="outlined" size="small" onClick={this.togglePop}>
                New Task
            </Button>
            </Toolbar>
            
        </Container>
        );
    }
}