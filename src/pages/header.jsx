import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import LoopIcon from '@material-ui/icons/Loop';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid } from '@material-ui/core';
import Sidenav from '../pages/sidenav'
import DisplayNote from '../pages/displaynote';

export default class PrimarySearchAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNotes:props.name,
      isOpen: false
    }
  }
  toggleDrawer = async () => {
    await this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
  };
    
  render() {

    return (
      <div>
        <AppBar position="static" >
          <Toolbar style={{ backgroundColor: "white" }}>
            <div>
              <IconButton edge="start" aria-label="menu" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Sidenav menuSelect={this.state.isOpen} history={this.props.history} />
            </div>
            <div>
              <img className="keep-img" alt='not found' src={require('../assets/images/keep.png')} />
            </div>
            <Typography variant="h6" noWrap>
              <span style={{ color: '#808080' }}>Fundo</span> Fundo
              </Typography>
            <div className="search" >
              <div >
                <SearchIcon />
              </div>
              <InputBase className="searchbar"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton >
                <ClearIcon />
              </IconButton>
            </div>

            <div/>
            <div style={{ display: 'flex', color: '#808080' }}className="icons-div">
              <IconButton color="inherit">
                <LoopIcon />
              </IconButton>
              <IconButton color="inherit">
                <ViewAgendaIcon />
              </IconButton>
              <IconButton color="inherit">
                <SettingsIcon />
              </IconButton>
            </div>
            <div style={{ display: 'flex', color: '#808080' }} className="profile-div">
              <Grid >
                <img alt ='not found' style={{ width: '35px', height: '35px',borderRadius:'50%'}} src={require('../assets/images/ajay.jpeg')}
                />
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
           <div>
          <DisplayNote name={this.state.titleNotes} labelId={this.props.labelId} />
          </div>
      </div>
    );
  }
}