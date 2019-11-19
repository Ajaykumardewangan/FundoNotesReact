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
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid } from '@material-ui/core';
import Sidenav from '../pages/sidenav'
import { searchNotesByElastic } from '../services/noteservice';
import { withRouter } from 'react-router-dom';
 class ElasticHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNotes:props.name,
      isOpen: false,
      view:true,
      searchData:'',
      viewMode:'',
      searchedNotes:[],
      data:'',
    }
  }
  toggleDrawer = async () => {
    await this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
  };
   
  searchNotes = () => {
    console.log("inside the search notes method  :--> ")
   this.setState({
    viewMode: 'searchView'
   })
   //this.elasticSearchNotes();
   this.changeViewForSearchNotes();
  }

  onChangeOfSearchNotes = (event) => {
    console.log(event.target.value);
    this.setState({
      searchData: event.target.value
    })
  }

  //   elasticSearchNotes = () => {
  //   searchNotesByElastic(this.state.searchData).then(res => {
  //     console.log('all notes are' + res.data);
  //     this.setState({
  //      doescheckfield:false,
  //      searchedNotes: res.data,
  //      open:'false',
  //      setOpen:'false'
  //     });
  // }).catch((err) => {
  //         console.log('error ' + err);
  //     })  
  //   }

  handleOnClickSearchbar = () => {
    this.setState({
      viewMode: 'searchView'
  })
  this.changeViewForSearchNotes();
  }

  handleRefresh = () => {
    window.location.reload();
  }

  handleView = () => {
    this.setState({
        view: !this.state.view
    })
}
// my service
handleClear = () =>{
  this.setState({
 data:''
 })
 }
 handleData = (event) =>{
  this.setState({
    data:event.target.value
    })
    this.handleSearch(this.state.data);
}
goToSearch =() =>{
  this.props.history.push('/elasticsearch')
}
handleSearch =(data) =>{
  searchNotesByElastic(data).then(res => {
    this.setState({
      getSeachNote:res.data
    })
    this.props.headerToSearchGetNote(this.state.getSeachNote)
   // this.props.history.push('/search')
  }).catch(err =>{
    console.log('data not fetch ',err);
    
  })
 
}
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "white" }}>
            <div>
              <IconButton edge="start" aria-label="menu" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Sidenav menuSelect={this.state.isOpen} history={this.props.history}/>
            </div>
            <div>
              <img className="keep-img" alt='not found' src={require('../assets/images/keep.png')}/>
            </div>
            <Typography variant="h6" noWrap>
              <span style={{ color: '#808080' }}>Fundo</span> Fundo
            </Typography>
            <div className="search"> 
              <div >
                <SearchIcon onClick={()=>this.handleSearch(this.state.data)}/>
              </div>
              <InputBase className="searchbar"
                placeholder="Search…"
                 value={this.state.data} 
                 onChange={this.handleData}
                 onClick={this.goToSearch}
              />
             
               <IconButton >
                <ClearIcon onClick={this.handleClear}/>
              </IconButton>
            </div>

            <div/>
            <div style={{ display: 'flex', color: '#808080' }}className="icons-div">
              <IconButton color="inherit"  onClick={this.handleRefresh}>
                <LoopIcon/>
              </IconButton>
              <IconButton color="inherit" onClick={this.handleView}>
              {this.state.view ? <ViewAgendaIcon /> : <ViewColumnIcon />}
              </IconButton>
              <IconButton color="inherit">
                <SettingsIcon/>
              </IconButton>
            </div>
            <div style={{ display: 'flex', color: '#808080' }} className="profile-div">
              <Grid>
                <img alt ='not found' style={{ width: '35px', height: '35px',borderRadius:'50%'}} src={require('../assets/images/ajay.jpeg')}/>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
           
      </div>
    );
  }
}
export default withRouter(ElasticHeader)