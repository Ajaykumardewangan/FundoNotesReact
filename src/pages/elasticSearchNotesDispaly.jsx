import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { InputBase } from '@material-ui/core';
import Properties from '../pages/properties'
import { updateNotes } from '../services/noteservice'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
class ElasticSearchNotesDispaly extends Component {
    constructor() {
        super();
        this.state = {
            noteTitle: '',
            description: '',
            color: '',
            doescheckfield: false,
            updateNoteId: '',
        }
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

    openDialog = (object) => {
        console.log('noteid----------', object.id)
        this.setState({
            updateNoteId: object.id,
            doescheckfield: !this.state.doescheckfield,
            title: object.title,
            description: object.description
        })

    }
    

    handleSubmit = (object) => {
        this.setState({
            doescheckfield: !this.state.doescheckfield
        })
        let data = {
            "noteTitle": this.state.noteTitle,
            "description": this.state.description,
        }
        updateNotes(this.state.updateNoteId, data).then(res => {
            // window.location.reload();

            console.log('11111----', object.noteId);

            console.log("Response after hitting login api is ", res);

        }).catch(err => {
            console.log("Error after hitting login api  ", err);

        })
    }
    render() {

        if (this.props.sendNotes) {
            var commentNodes = this.props.sendNotes.map((note, index) => {
                return (
                    <div className="display-card" style={{ paddingLeft: '200px' }}>
                        <Card style={{ backgroundColor: note.color }}>
                            <CardContent onClick={()=>this.openDialog(note)}>
                                <div>
                                    <input style={{ border: 'none', outline: 'none', width: '250px' }} type="text"
                                        value={note.noteTitle} />
                                </div>
                                <br />
                                <div>
                                    <InputBase multiline style={{ width: '250px', marginTop: '10px', border: 'none', outline: 'none' }}
                                        value={note.description} />
                                </div>
                                <br />
                                
                            </CardContent>
                            <div>
                                <Properties id={note.noteId} />
                            </div>
                        </Card>

                        <Dialog open={this.state.doescheckfield} aria-labelledby="form-dialog-title" >
                            <DialogContent style={{ backgroundColor: note.color }}>
                                <div>
                                    <input style={{ border: 'none', outline: 'none', width: '350px', backgroundColor: note.colour }} type="text"
                                        value={this.state.noteTitle} onChange={this.handleTitle} name='title' />
                                </div>

                                <br />
                                <div>

                                    <InputBase multiline style={{ width: '350px', marginTop: '10px', border: 'none', outline: 'none', backgroundColor: note.colour }}
                                        value={this.state.description} onChange={this.handleDescription} name='description' />
                                </div>
                                <br />
                            </DialogContent>
                            <DialogActions style={{ backgroundColor: note.colour }}>

                                <div>
                                    <Properties id={note.id} />
                                </div>
                                <div>
                                    <Button color="primary" onClick={() => this.handleSubmit()}>
                                        Close
          </Button>
                                </div>

                            </DialogActions>
                        </Dialog>
                    </div>
                );
            })
        }
        return (

            <div>
                {commentNodes}
            </div>

        );
    }
}
export default withRouter(ElasticSearchNotesDispaly)