import React, { Component } from 'react'
import { IconButton, MenuItem } from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Menu from '@material-ui/core/Menu';
import {deleteNote} from '../services/noteservice'

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
        }
        this.state = {
            ITEM_HEIGHT : 48,
            anchorEl:'',
            options : [
                'Delete Note',
                'Add Lebel',
                'Comming Soon' ,
            ]

        }
    }
    handleClick = event => {
        this.setState({
            anchorEl:event.target
        })
    };

    handleClose = () => {
        console.log('inside close method of proprties: ');
        console.log(this.state1.noteId);
        deleteNote(localStorage.getItem('token'),this.state1.noteId).then(res=>{
            console.log("Response after hitting login api is ",res);
            // this.props.history.push('/login')
            
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
        this.setState({
            anchorEl:null
        })
    };
    
    render() {
        return (
            <div className='iconDisplay'>
                <div>
                    <IconButton style={{padding:'4px'}}>
<AddAlertOutlinedIcon/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<PersonAddOutlinedIcon/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<ColorLensOutlinedIcon/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
<ImageOutlinedIcon/>
                        </IconButton>
                 </div>  
                 <div>
                    <IconButton style={{padding:'4px'}}>
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
                    {this.state.options.map(option => (
                        <div>
                        <button>
 
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose} >
                            {option}
                        </MenuItem>
                        </button>
                        </div>
                    ))}
                </Menu>
            </div >
            <div>

            </div>
                 </div>   
          
        )
    }
}