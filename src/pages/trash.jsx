import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import { IconButton, InputBase } from '@material-ui/core';
import { updateinTrash, deleteNote,fetchTrashNote } from '../services/noteservice';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextareaAutosize } from '@material-ui/core';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip'
export default class Trash extends Component {
    constructor(props){
        super(props);
        this.state = {
          allNotes:[],
          noteId:'',
          title:'',
          description:'',
          anchorEl:'',
          doescheckfield:false,
        }
    }
    
   
    componentDidMount (){
  this.trashNotes();
    };
    trashNotes=()=>{
        fetchTrashNote().then(res=>{
            console.log('all notes are' + res.data);
            this.setState({
             doescheckfield:!this.state.doescheckfield,
             allNotes: res.data,
             title:'',
             description:'',
             
            })
        }).catch((err) => {
            console.log('error ' + err);
        })
  }
  handleDelete =(object)=>{
      deleteNote(object.id).then(res=>{
        window.location.reload();
         console.log('deleted noteid---'+object.id)
      }).catch((err) => {
        console.log('error ' + err);
    })
  }
  handleRestore=(object)=>{
    updateinTrash(object.id).then(res=>{
      window.location.reload();
        console.log('archive noteid false---'+object.id)
    }).catch((err) => {
      console.log('error ' + err);
  })
  }
  closeDialog=()=>{
    this.setState({
      doescheckfield:!this.state.doescheckfield,
     })
  }

    render() {
        let displayNotes = this.state.allNotes.map((object, index)=>{

            return (       
                <div className="displaynote" >
                  <div className="archivenotes"> 
              
               <Card>
            <div>
              <CardContent >
                <div>
                  <input style={{ border: 'none', outline: 'none', width: '300px' }} type="text" value={object.title} />
                </div>
                <br />
                <div>
                  <InputBase multiline style={{ width: '300px', margin: '10px', border: 'none', outline: 'none' }}
                    value={object.description} />
                </div>
                <br />
                
                <div className="restorecss">
                   <IconButton>
                      <Button onClick={()=>this.handleRestore(object)}>
                       < RestoreFromTrashIcon /> 
                     </Button> 
                     <Button onClick={()=>this.handleDelete(object)} >
                     <DeleteIcon/>
                     </Button>    
                   </IconButton>    
                </div>
              </CardContent>
            </div>
           
          </Card>
              </div>      
                 </div>   
              )
        })
        return (
            <div>
             <div className="note-div">
               {displayNotes}
             </div> 
          </div>
          );
       
    }
}