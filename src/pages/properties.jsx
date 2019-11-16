import React, { Component } from 'react'
import { IconButton, MenuItem } from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Menu from '@material-ui/core/Menu';
import {trashNotes,archiveNote} from '../services/noteservice';
import Color from '../pages/color';
import Reminder from '../pages/addreminder';
import Collaborator from './collaborator';
import AddLAbel from '../pages/addlabel'

const options = [
    'None',
    'Atria'
  ];
  
export default class properties extends Component {
    constructor(props) {
        console.log('inside constructor of properties: ')
        console.log(props.id);
        super();
        this.state1 = {
             noteId:props.id,
             anchorEl:false,
        }
        this.state = {
            ITEM_HEIGHT : 48,
            anchorEl:'',
        }
    }
    handleClick = event => {
        this.setState({
            anchorEl:event.target
        })
    };

    handleDeleteNote = () => {
        console.log('inside close method of proprties: ');
        console.log(this.state1.noteId);
        trashNotes(localStorage.getItem('token'),this.state1.noteId).then(res=>{
            console.log("Response after hitting login api is ",res);
            // this.props.history.push('/login')
            
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
        this.setState({
            anchorEl:null
        })
    };

    handleArchiveNote = () => {
        console.log('inside close method of proprties: ');
        console.log(this.state1.noteId);
        archiveNote(localStorage.getItem('token'),this.state1.noteId).then(res=>{
            console.log("Response after hitting login api is ",res);
            // this.props.history.push('/login')
            
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
        this.setState({
            anchorEl:null
        })
    };

    handleAddLabel = () => {
//<AddLabel/>
    }
    
    render() {
        return (
            <div className='iconDisplay'>
                <div>
                    <IconButton style={{padding:'4px'}}>
<Reminder id={this.props.id}/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<Collaborator id={this.props.id}/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<Color id={this.props.id}/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<ImageOutlinedIcon/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}} onClick={this.handleArchiveNote}>
<ArchiveOutlinedIcon/>
                        </IconButton>
                 </div>  
                
                        <div>
                <IconButton style={{padding:'4px'}}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertOutlinedIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.anchorEl}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: this.state.ITEM_HEIGHT * 5,
                            width: 150,
                        },
                    }}
                >
                        {/* <div>
                        <MenuItem >
                        <button onClick={this.handleDeleteNote}>  delete note</button>
                        </MenuItem>
                        <MenuItem >
                        <button onClick={this.handleAddLabel}> add label</button>
                        </MenuItem>
                        </div> */}
                         <div>
                            <MenuItem  >
                            <div>
                                <span onClick={this.handleDeleteNote}>  delete note</span>
                                </div>
                            </MenuItem>
                            <AddLAbel noteId={this.props.id}/>
                            <MenuItem >


                            <div>
                                {/* <span  onClick={this.handleClick}> add label</span> */}
                              
                                </div>
                            </MenuItem>
                        </div>
                </Menu>
            </div >
            <div>
            </div>
        </div>   
        )
    }
}