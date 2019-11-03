import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Button from '@material-ui/core/Button';
import {getLables} from '../services/labelservice'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "65px"
            },
            paperAnchorLeft: {
                width: "250px", 
                height:'auto'
            }

        }
    }
})
export default class Sidenav extends Component {
    componentDidMount() {
        getLables(localStorage.getItem('token')).then(res => {
           console.log('all lables are' + res.data);
           this.setState({
               allLabels: res.data
           });
       }).
           catch((err) => {
               console.log('error ' + err);
           })
   };
    constructor(props) {
        super(props);
        this.state = {
            allLabels:[]
        }
    }

    handleGetNotesOfLabel= () =>{
        
    }
    handleGetReminderNotes= () =>{
        this.props.history.push('/reminder'); 
    }
    handleGetArchivedNotes= () =>{
        
    }
    handleGetTrashedNotes= () =>{
        
    }

    render() {
        let displayallLables = this.state.allLabels.map((object,index) => {
            return (
                <Button onClick={this.handleGetNotesOfLabel}>
                    <LabelOutlinedIcon  />
                    <span className="labeltext">{object.labelName}</span>
                </Button>
            )
        })
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Drawer variant='persistent' open={this.props.menuSelect} style={{ top: '65px' }} >
                        <Button className="labelcontent">
                            <EmojiObjectsOutlinedIcon className="labelicon" />
                            <span className="labeltext">Notes</span></Button>
                        <Button className="labelcontent" onClick={this.handleGetReminderNotes}>
                        <NotificationsIcon className="labelicon"/>
                        <span className="labeltext">Reminders</span></Button>
                        <Divider />
                        <span>Label</span>
                        <div>
                        <div>
                            {displayallLables}
                        </div>
                        </div>
                        <Button className="labelcontent">
                            <CreateOutlinedIcon className="labelicon"/>
                            <span className="labeltext">Edit Lables</span></Button>
                        <Divider />
                        <Button className="labelcontent" onClick={this.handleGetArchivedNotes}>
                            <ArchiveOutlinedIcon  className="labelicon"/>
                            <span className="labeltext">Archive</span></Button>
                        <Button className="labelcontent" onClick={this.handleGetTrashedNotes}>
                            <DeleteTwoToneIcon className="labelicon" />
                            <span className="labeltext">Trash</span></Button>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}