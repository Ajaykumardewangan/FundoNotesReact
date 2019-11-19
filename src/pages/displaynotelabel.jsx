import React, { Component } from "react"
import DisplayNoteOnLabel from "./displaynoteonlabel";
import LabelNotesDisplay from './labelnote';

export default class LabelNoteComponent extends Component {

    componentWillMount() {
         this.state.id =  this.props.match.params
         console.log("inside labelNotecom compdidm :",this.state.id.id)
        
     };

    constructor(props){
        super(props);
        this.state = {
            id:'',
            titleNotes: 'getnotesonlabel',  
        }
    }

    render() {
        return(
           <div>
               <DisplayNoteOnLabel name={this.state.titleNotes} history={this.props.history} id={this.state.id.id} ></DisplayNoteOnLabel>
            <LabelNotesDisplay labelId={this.props.match.params.labelId}/>
           </div>
        )
        }
}