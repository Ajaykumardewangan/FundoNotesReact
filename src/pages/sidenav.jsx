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
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {deleteLables,editLables,createLables} from '../services/labelservice'
// import { hashHistory } from 'react-router;'
//import { HashRouter } from 'react-router-dom';

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
            allLabels:[],
            doescheckfield:false,
            labelName:'',
            id:'',
            open: false,
            label:'',
            labelId:'',
        }
    }

    componentDidMount() {
       this.getAllLabels();
   };


   getAllLabels =() =>{
    getLables(localStorage.getItem('token')).then(res => {
        console.log('all lables are' + res.data);
        this.setState({
            allLabels: res.data
        });
    }).catch((err) => {
            console.log('error ' + err);
        })
   }
    
    handleGetNotes= () =>{
        this.props.history.push('/notes');  
    }
    openDialog = () => {
        this.setState({
            doescheckfield: !this.state.doescheckfield
        })
    }
    handleGetNotesOfLabel= (labelId) => {
        console.log('inside handle getlabelnotes : ',labelId);
        this.props.history.push('/getlabelnotes/'+labelId);    
    }

    handleGetReminderNotes= () => {
       this.props.history.push('/getremindernotes');
    }
    onChange = (data) => {
        let find = {
            "labelName": data.label
        }
    }
    handleGetArchivedNotes= () =>{
        this.props.history.push('/getarchive');  
    }
    
    handleGetTrashedNotes= () => {
        this.props.history.push('/gettrash'); 
    }
    deleteLabel = (labelId) => {
        deleteLables(labelId).then(res => {
            this.getAllLabels();
            console.log('label deleted ', res);

        }).catch(err => {
            console.log("label not deleted  ", err);
        })
    }
    handleLabels = async (labelName, labelId) => {
        // console.log("label name is ", labelName);
        // console.log("label id is ", labelId);
        await this.setState({
            labelName: labelName,
            id: labelId,
            open: true,
        })
    }
    editLabel = (labelId) => {
        let data = {
            "labelName": this.state.labelName
        }
        editLables(labelId, data).then(res => {
            this.getAllLabels();
            console.log('label deleted ', res);

        }).catch(err => {
            console.log("label not deleted  ", err);
        })
       
    }
    handleLabel = (event) => {
        this.setState({
            labelName: event.target.value
        })
    }
    handleLabelInput = (event) => {
        this.setState({
            labelName: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.label !== '') {
            let data = {
                "labelName": this.state.labelName
            }
            createLables(data).then(res => {
              this.getAllLabels();
                console.log("Response after creating label ", res);
            }).catch(err => {
                console.log("null can't be assigned  ", err);

            })
            this.setState({
                labelName: '',

            })
        }
    }
    render() {
        let displayallLables = this.state.allLabels.map((object,index) => {
            return (
                <Button onClick={()=>this.handleGetNotesOfLabel(object.id)}>
                    <LabelOutlinedIcon  />
                    <span className="labeltext">{object.labelName},{object.id}</span>
                </Button>
            )
        })

        let displayallLablesOnEdit = this.state.allLabels.map((object, index) => {
            return (
                <div>
                    <Button onClick={() => this.deleteLabel(object.id)} style={{ marginLeft: '-30px' }} >
                        <DeleteOutlinedIcon />
                    </Button>
                   
                    {this.state.open&& object.id===this.state.id ?
                        <input type="text" value={object.labelName} style={{ border: 'none', outline: 'none', fontSize: '15px', width: '120px' }}
                            onChange={this.handleLabel} onClick={() => this.onChange(object)} />
                        :
                        <input type="text" value={object.labelName} style={{ border: 'none', outline: 'none', fontSize: '15px', width: '120px' }}
                            onChange={() => this.handleLabels(object.labelName, object.id)} />
                    }
                    <Button style={{ marginLeft: '25px' }} onClick={() => this.editLabel(object.id)}>
                        <EditOutlinedIcon />
                    </Button>
                </div>
            )
        })

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Drawer variant='persistent' open={this.props.menuSelect} style={{ top: '65px' }} >
                        <Button className="labelcontent" onClick={this.handleGetNotes}>
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
                        <Button className="labelcontent" onClick={this.openDialog}>
                            <CreateOutlinedIcon className="labelicon" />
                            <span className="labeltext">Edit Lables</span></Button>
                        {/* <Button className="labelcontent">
                            <CreateOutlinedIcon className="labelicon"/>
                            <span className="labeltext">Edit Lables</span></Button> */}
                        <Divider />
                        <Button className="labelcontent" onClick={this.handleGetArchivedNotes}>
                            <ArchiveOutlinedIcon  className="labelicon"/>
                            <span className="labeltext">Archive</span></Button>
                        <Button className="labelcontent" onClick={this.handleGetTrashedNotes}>
                            <DeleteTwoToneIcon className="labelicon" />
                            <span className="labeltext">Trash</span></Button>
                    </Drawer>
                    {/*   start */}
                    <Dialog open={this.state.doescheckfield} aria-labelledby="form-dialog-title" >
                        <DialogContent>

                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <input style={{ border: 'none', outline: 'none' }} type="text" placeholder="create label"
                                            onChange={this.handleLabelInput}
                                            value={this.state.labelName} />
                                    </div>

                                    <Button onClick={this.handleSubmit}>
                                        <DoneOutlinedIcon />
                                    </Button>
                                    <div>
                                    </div>
                                </div>
                                <div className="labelDialog">
                                    {displayallLablesOnEdit}
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions >

                            <div>
                                <Button onClick={this.openDialog}>
                                    Close
          </Button >
                            </div>
                        </DialogActions>
                    </Dialog>
                    {/* end */}
                </MuiThemeProvider>
            </div>
        )
    }
}