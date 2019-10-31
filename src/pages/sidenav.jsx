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
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Drawer variant='persistent' open={this.props.menuSelect} style={{ top: '65px' }} >
                        <Button className="labelcontent">
                            <EmojiObjectsOutlinedIcon className="labelicon" />
                            <span className="labeltext">Notes</span></Button>
                        <Button className="labelcontent">
                        <NotificationsIcon className="labelicon"/>
                        <span className="labeltext">Reminders</span></Button>
                        <Divider />
                        <Button className="labelcontent">
                            <CreateOutlinedIcon className="labelicon"/>
                            <span className="labeltext">Edit Lables</span></Button>
                        <Divider />
                        <Button className="labelcontent">
                            <ArchiveOutlinedIcon  className="labelicon"/>
                            <span className="labeltext">Archive</span></Button>
                        <Button className="labelcontent">
                            <DeleteTwoToneIcon className="labelicon" />
                            <span className="labeltext">Trash</span></Button>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}