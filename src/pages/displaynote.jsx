import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import Properties from '../pages/properties';
import {getNotes} from '../services/noteservice';
import NoteDialogBox from '../pages/notedialogbox'
import { directive } from '@babel/types';
export default class DisplayNote extends Component {
    constructor(props){
super(props);
this.state = {
  allNotes:[],
  noteTitle:'',
  description:'',
}
    }

    componentDidMount() {
      getNotes(localStorage.getItem('token')).then(res => {
         console.log('all notes are' + res.data);
         this.setState({
          doescheckfield:false,
          allNotes: res.data
         });
     }).
         catch((err) => {
             console.log('error ' + err);
         })
 };

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
openDialog =()=>{
  //  <NoteDialogBox/>
};

  render(){
    let displayAllNotes = this.state.allNotes.map((object,index) => {
      return (
          <div>
          <Card className="display-card" > 
           <div>
           <CardContent>
           <div>
              <input style={{border:'none',outline:'none',width:'250px'}} type="text" value={object.noteTitle} onChange={this.handleTitle} />
           </div>
              <br/>
            <div>
              <TextareaAutosize style={{width:'250px',marginTop:'10px',border:'none', outline:'none'}} 
              value={object.description} onChange={this.handleDescription} onClick={this.openDialog}/>
            </div>
              <br/>
              <div>
              <Properties id={object.id}/>
              </div>
              </CardContent>
              </div>  
              </Card>
              </div>
      )
  })
  return (
       <div>
        <div className="note-div">
          {displayAllNotes}
        </div>
     </div>
  );
}
}