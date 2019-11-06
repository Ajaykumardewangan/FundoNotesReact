import React,{ Component } from "react"
import { Button } from "@material-ui/core"
import {deleteNote,trashNotes} from "../services/noteservice"

export default class TrashProperties extends Component {
    constructor(props){
        super(props);
          this.state  = {
          noteId:props.id,
        }
    }

    handleDeletePermanent = () => {
        deleteNote(this.state.noteId).then(result =>{
            console.log('permanent deleted notes');
            }).catch((err) => {
                console.log('error ' + err);
            })
       
    }
    handleRestore = () => {
        console.log('inside close method of proprties: ');
        console.log(this.state.noteId);
        trashNotes(localStorage.getItem('token'),this.state.noteId).then(res=>{
            console.log("Response after hitting login api is ",res);
            
        }).catch(err=>{
            console.log("Error after hitting login api  ",err);
        })
    }

   render(){
       return(
           <div className = "trash-property">
                 <Button onClick={this.handleDeletePermanent}>Delete</Button>
                 <Button onClick={this.handleRestore}>Restore</Button>
           </div>
       )
   }
}
