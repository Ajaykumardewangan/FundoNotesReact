import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import Properties from '../pages/properties';
import {getNotes} from '../services/noteservice';
import FormDialog from '../pages/notedialogbox'
import { directive } from '@babel/types';
import CreateNote from '../pages/createnote';
export default class DisplayNote extends Component {
    constructor(props){
super(props);
this.state = {
  titleNotes:props.name,
  allNotes:[],
  noteTitle:'',
  description:'',
}
    }

    componentDidMount() {
      let fetchedNoteName=null;
      console.log('title notes in did mount : ',this.state.titleNotes);
      if(this.state.titleNotes === undefined)
      {
        fetchedNoteName="get_notes";
      }
      else{
        fetchedNoteName=this.state.titleNotes;
      }
      getNotes(localStorage.getItem('token'),fetchedNoteName).then(res => {
         console.log('all notes are' + res.data);
         this.setState({
          doescheckfield:false,
          allNotes: res.data,
          open:'false',
          setOpen:'false'
         });
     }).catch((err) => {
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

handleProperties = (object) => {
  if(this.state.titleNotes === 'get_trash' || ''){

  }else{
  return <Properties id={object.id}/>
  }
}
openDialog =()=>{
    // <FormDialog/>
  //   <div>
  //   <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  //     Open form dialog
  //   </Button>
  //   <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  //     <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
  //     <DialogContent>
  //       <DialogContentText>
  //       <div>
  //           <input style={{border:'none',outline:'none',width:'350px'}} type="text" placeholder='title'/>
  //        </div>
  //       </DialogContentText>
  //       <div>
  //           <TextareaAutosize style={{width:'350px',marginTop:'10px',border:'none', outline:'none'}} 
  //           placeholder='description'/>
  //         </div>
  //     </DialogContent>
  //     <DialogActions> 
  //         <div>
  //     <Property/>
  //     </div>
  //     <div>
  //       <Button onClick={handleClose} color="primary">
  //         Cancel
  //       </Button>
  //       </div>
  //     </DialogActions>
     
  //   </Dialog>
   
  // </div>
};

  render(){
    // if(!this.state.doescheckfield)
    // {
    let displayAllNotes = this.state.allNotes.map((object,index) => {
      return (
          <div>
          <Card className="display-card" onClick={this.openDialog} style={{backgroundColor:object.color}}> 
           <div>
           <CardContent>
           <div>
              <input style={{border:'none',outline:'none',width:'250px',backgroundColor:object.color}} type="text" value={object.noteTitle} onChange={this.handleTitle} />
           </div>
              <br/>
            <div>
              <TextareaAutosize style={{width:'250px',marginTop:'10px',border:'none', outline:'none', backgroundColor:object.color}} 
              value={object.description} onChange={this.handleDescription}/>
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
         <div>
          <CreateNote/>
        </div>
        <div className="note-div">
          {displayAllNotes}
        </div>
     </div>
  );
}
  }
  
// }