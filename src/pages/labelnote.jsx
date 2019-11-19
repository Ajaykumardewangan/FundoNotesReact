// import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import { TextareaAutosize } from '@material-ui/core';
// import Properties from '../pages/properties';
// import { getNotes, getNotesOnLabel, updateNotes } from '../services/noteservice';
// import Createnote from '../pages/createnote';
// import TrashProperties from './trashproperties';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import { InputBase } from '@material-ui/core';
// export default class LabelNotesDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             allNotes: [],
//             noteTitle: '',
//             description: '',
//             doescheckfield: false,
//             id: '',
//             updateNoteId: '',
//             labelId:props.labelId,
//         }
//     }

//     componentWillMount() {
//         let fetchedNoteName=null;
//         console.log('title notes in did mount : ',this.state.titleNotes);
//         if(this.state.titleNotes === undefined)
//         {
//         fetchedNoteName="showallnotes";
//         }
//         else if(this.state.titleNotes === 'getnotesonlabel') {
//         this.getNotesOnLabel(this.props.labelId);
//         return;
//         }
//         else {
//         fetchedNoteName=this.state.titleNotes;
//         }
//         getNotes(localStorage.getItem('token'),fetchedNoteName).then(res => {
//         console.log('all notes are' + res.data);
//         this.setState({
//         doescheckfield:false,
//         allNotes: res.data,
//         open:'false',
//         setOpen:'false'
//         });
//         }).catch((err) => {
//         console.log('error ' + err);
//         })
//     };

//     getNotesMethod = () =>{
//         console.log("inside labelNotecom compdidm :",this.state.labelId)
//         getNotesOnLabel(this.state.labelId).then(res => {
//             console.log('all notes are' + res.data);
//             this.setState({
//                 doescheckfield: false,
//                 allNotes: res.data,
//                 open: 'false',
//                 setOpen: 'false'
//             });
//         }).catch((err) => {
//             console.log('error ' + err);
//         }) 
//     }

//     handleTitle = (event) => {
//         this.setState({
//             noteTitle: event.target.value
//         })
//     }

//     handleDescription = (event) => {
//         this.setState({
//             description: event.target.value
//         })
//     }

//     openDialog = (object) => {
//         console.log(object.noteId)
//         this.setState({
//             doescheckfield: !this.state.doescheckfield,
//             updateNoteId: object.id,
//             noteTitle: object.noteTitle,
//             noteDescription: object.noteDescription,

//         })
//     };

//     closeDialog = () => {
//         this.setState({
//             doescheckfield: !this.state.doescheckfield,
//         })
//     }



//     handleSubmit = () => {
//         this.setState({
//             doescheckfield: !this.state.doescheckfield
//         })
//         let data = {
//             "noteTitle": this.state.noteTitle,
//             "description": this.state.description,
//         }

//         console.log('display data', data);
//         console.log('display noteId', this.state.updateNoteId);

//         updateNotes(this.state.updateNoteId, data).then(res => {
//             console.log("Response after hitting login api is ", res);

//         }).catch(err => {
//             console.log("Error after hitting login api  ", err);
//         })
//     }
    
//     render() {
//         const cardView = this.props.viewProps ? "display-card" : "list-view"
//         let displayAllNotes = this.state.allNotes.map((object, index) => {
//             return (
//                 <div>
//                     <div>{object.label.map((labela) => {
//                                 <Card className={cardView} style={{ backgroundColor: object.color }}>
//                                     <div>
//                                         <CardContent  >
//                                             <div onClick={() => this.openDialog(object)}>
//                                                 <input style={{
//                                                     border: 'none', outline: 'none', width: '250px',
//                                                     backgroundColor: object.color
//                                                 }} type="text" value={object.noteTitle}
//                                                     onChange={this.handleTitle} />
//                                             </div>
//                                             <br />
//                                             <div onClick={() => this.openDialog(object)}>
//                                                 <TextareaAutosize style={{ width: '250px', marginTop: '10px', border: 'none', outline: 'none', backgroundColor: object.color }}
//                                                     value={object.description} onChange={this.handleDescription} />
//                                             </div>
//                                             <br />
//                                             <div>
//                                             <Properties id={object.id} />
//                                             </div>
//                                         </CardContent>
//                                     </div>
//                                 </Card>
                                
//                             </div>
//                     </div>
//             )
//         })
//         return (
//             <div>
//                 <div>
//                 <Createnote />
//                 </div>
//                 <div className="note-div">
//                     {displayAllNotes}
//                 </div>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import Properties from '../pages/properties';
import { getNotes, getNotesOnLabel, updateNotes } from '../services/noteservice';
import Createnote from '../pages/createnote';
import TrashProperties from './trashproperties';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { InputBase } from '@material-ui/core';
export default class LabelNotesDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNotes: [],
            noteTitle: '',
            description: '',
            doescheckfield: false,
            id: '',
            updateNoteId: '',
        }
    }

    componentWillMount() {
        getNotes(localStorage.getItem('token'), 'get_notes').then(res => {
            console.log('all notes are' + res.data);
            this.setState({
                doescheckfield: false,
                allNotes: res.data,
                open: 'false',
                setOpen: 'false'
            });
        }).catch((err) => {
            console.log('error ' + err);
        })
    };

    getNotesOnLabel = (labelId) => {
        console.log('inside dispalaynotes in getnotesonlabelmethod : ', labelId);
        getNotesOnLabel(labelId).then(res => {
            console.log('all notes of labelonNotes : ' + res.data);
            this.setState({
                doescheckfield: false,
                allNotes: res.data,
                open: 'false',
                setOpen: 'false'
            });
        }).catch((err) => {
            console.log('error ' + err);
        })
    }

    handleTitle = (event) => {
        this.setState({
            noteTitle: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleProperties = (object) => {
        if (this.state.titleNotes === 'get_trash') {
            return <TrashProperties id={object.id}></TrashProperties>
        } else {
            return <Properties id={object.id} />
        }
    }
    handleCreateNotes = () => {
        if (this.state.titleNotes === 'get_trash' || this.state.titleNotes === 'get_archivednotes') {

        } else {
            return <Createnote />
        }
    }

    openDialog = (object) => {
        console.log(object.noteId)
        this.setState({
            doescheckfield: !this.state.doescheckfield,
            updateNoteId: object.id,
            noteTitle: object.noteTitle,
            description: object.description,

        })
    };

    closeDialog = () => {
        this.setState({
            doescheckfield: !this.state.doescheckfield,
        })
    }



    handleSubmit = () => {
        this.setState({
            doescheckfield: !this.state.doescheckfield
        })
        let data = {
            "noteTitle": this.state.noteTitle,
            "description": this.state.description,
        }

        console.log('display data', data);
        console.log('display noteId', this.state.updateNoteId);

        updateNotes(this.state.updateNoteId, data).then(res => {
            console.log("Response after hitting login api is ", res);

        }).catch(err => {
            console.log("Error after hitting login api  ", err);
        })
    }

    render() {
        const cardView = this.props.viewProps ? "display-card" : "list-view"
        let displayAllNotes = this.state.allNotes.map((object, index) => {
            return (
                <div>
                    <div>
                        {object.label.map((labela) => {
                            console.log(labela.id, parseInt(this.props.labelId));

                            return (<div object={labela.id}>{labela.id !== parseInt(this.props.labelId) ? '' :
                                <Card className={cardView} style={{ backgroundColor: object.color }}>
                                    <div>
                                        <CardContent  >
                                            <div onClick={() => this.openDialog(object)}>
                                                <input style={{
                                                    border: 'none', outline: 'none', width: '250px',
                                                    backgroundColor: object.color
                                                }} type="text" value={object.noteTitle}
                                                    onChange={this.handleTitle} />
                                            </div>
                                            <br />
                                            <div onClick={() => this.openDialog(object)}>
                                                <TextareaAutosize style={{ width: '250px', marginTop: '10px', border: 'none', outline: 'none', backgroundColor: object.color }}
                                                    value={object.description} onChange={this.handleDescription} />
                                            </div>
                                            <br />
                                            <div>
                                                {this.handleProperties(object)}
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>}
                                
                            </div>);

                        })}
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div>
                    {this.handleCreateNotes()}
                </div>
                <div className="note-div">
                    {displayAllNotes}
                </div>
            </div>
        );
    }
}