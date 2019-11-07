import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import Properties from '../pages/properties';
import {getNotes, getNotesOnLabel} from '../services/noteservice';
import FormDialog from '../pages/notedialogbox'
import { directive } from '@babel/types';
import CreateNote from '../pages/createnote';
import Createnote from '../pages/createnote';
import TrashProperties from './trashproperties';
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
      else if(this.state.titleNotes === 'getNotesOnLabel') {
        this.getNotesOnLabel(this.props.labelId);
        return;
      }
      else {
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

 getNotesOnLabel = (labelId) => {
   console.log('inside dispalaynotes in getnotesonlabelmethod : ',labelId);
  getNotesOnLabel(labelId).then(res => {
    console.log('all notes of labelonNotes : ' + res.data);
    this.setState({
     doescheckfield:false,
     allNotes: res.data,
     open:'false',
     setOpen:'false'
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
  if(this.state.titleNotes === 'get_trash'){
    return <TrashProperties id={object.id}></TrashProperties>
  }else{
  return <Properties id={object.id}/>
  }
}
handleCreateNotes = () => {
  if(this.state.titleNotes === 'get_trash' || this.state.titleNotes === 'get_archivednotes'){
    
  }else{
    return  <Createnote/>}
}

openDialog =()=>{
   
};

  render(){
    
      const cardView = this.props.viewProps ? "display-card" : "list-view"
    let displayAllNotes = this.state.allNotes.map((object,index) => {
      return (
          <div>
          <Card className={cardView} onClick={this.openDialog} style={{backgroundColor:object.color}}> 
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
                {this.handleProperties(object)}
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
           {this.handleCreateNotes()}
        </div>
        <div className="note-div">
          {displayAllNotes}
        </div>
     </div>
  );
}
  }
  
// import React, {Component} from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import { InputBase } from '@material-ui/core';
// import Properties from '../pages/properties';
// import {getNotes,updateNotes} from '../services/noteservice';


// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';

// export default class DisplayNote extends Component {
//     constructor(props){
// super(props);
// this.state = {
//   allNotes:[],
//   noteId:'',
//   noteTitle:'',
//   description:'',
// }
//     }
//     componentDidMount() {
//      this.getAllNotes();
//  };

//  getAllNotes = () =>{
//   getNotes(localStorage.getItem('token')).then(res => {
//     console.log('all notes are' + res.data);
//     this.setState({
//      doescheckfield:false,
//      allNotes: res.data,
//      open:'false',
//      setOpen:'false'
//     });
// }).
//     catch((err) => {
//         console.log('error ' + err);
//     })
//  }

//  handleTitle = (event) => {
//     this.setState({
//       noteTitle: event.target.value
//     })
// }

// handleDescription = (event) => {
//     this.setState({
//       description: event.target.value
//     })
// }

// openDialog =(object)=>{
//   console.log(object.noteId)
//   this.setState({
//     doescheckfield:!this.state.doescheckfield,
//     noteTitle:object.noteTitle,
//     description:object.description
//    })

// };

// closeDialog=()=>{
//   this.setState({
//     doescheckfield:!this.state.doescheckfield,
//    })
// }
// handleSubmit = (noteId) => {
  

//       let data={
//           "title":this.state.noteTitle,
//           "description": this.state.description,
//       }
//       updateNotes(noteId,data).then(res=>{
//         this.getAllNotes();
//           console.log("Response after hitting login api is ",res);
      
          
          
//       }).catch(err=>{
//           console.log("Error after hitting login api  ",err);
        
//       })


// this.setState({
//   doescheckfield:!this.state.doescheckfield
//  })
// }
// render(){
   
// console.log("view porps---", this.props.viewProps);
// const cardView = this.props.viewProps ? "display-card" : "list-view"
//   let displayAllNotes = this.state.allNotes.map((object,index) => {     
//     return (
//         <div>
//         <Card className={cardView}  style={{backgroundColor:object.colour}}> 
//          <div>
//          <CardContent onClick={()=>this.openDialog(object)}>
//          <div>
//             <input style={{border:'none',outline:'none',width:'250px',backgroundColor:object.color}} type="text" 
//              value={object.noteTitle} onChange={this.handleTitle} />
//          </div>
//             <br/>
//           <div>
           
//               <InputBase multiline style={{width:'250px',marginTop:'10px',border:'none', outline:'none', backgroundColor:object.colour}} 
//             value={object.description} onChange={this.handleDescription}/>
//           </div>
//             <br/>
//             </CardContent>
//             <div>
//             <Properties id={object.id}/>
//             </div>
//             </div>  
//             </Card>
        
//             <Dialog open={this.state.doescheckfield} aria-labelledby="form-dialog-title" >
//             <DialogContent style={{backgroundColor:object.color}}>
//           <div>
//           <input style={{border:'none',outline:'none',width:'350px',backgroundColor:object.color}} type="text" 
//              value={this.state.noteTitle} onChange={this.handleTitle} name='title'/>
//           </div>
   
//             <br/>
//           <div>
        
//               <InputBase multiline style={{width:'350px',marginTop:'10px',border:'none', outline:'none', backgroundColor:object.colour}} 
//             value={this.state.description} onChange={this.handleDescription} name='description'/>
//           </div>
//             <br/>
//         </DialogContent>
//         <DialogActions style={{backgroundColor:object.colour}}>
          
//           <div>
//           <Properties id={object.id}/>
//           </div>
//           <div>
//           <Button  color="primary" onClick={()=>this.handleSubmit(object.id)}>
//             Close
//           </Button>
//           </div>
        
//         </DialogActions>
//       </Dialog>
      
//             </div>
//     )
        
// })
// return (
//   <div>
//    <div className="note-div">
//      {displayAllNotes}
//    </div>
// </div>
// );
// }
// }