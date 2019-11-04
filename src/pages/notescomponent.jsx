import React, { Component } from "react"
import PrimarySearchAppBar from "./header";

export default class NotesComponent extends Component {
    constructor(props){
        super();
        this.state = {
            titleNotes: 'get_notes',  
        }
    }

    render() {
        return(
           <div>
               <PrimarySearchAppBar name={this.state.titleNotes}></PrimarySearchAppBar>
           </div>
        )
        }
}
