import React, { Component } from "react"
import PrimarySearchAppBar from "./header";

export default class ArchiveComponent extends Component {
    constructor(props){
        super();
        this.state = {
            titleNotes: 'get_archivednotes',  
        }
    }

    render() {
        return(
           <div>
               <PrimarySearchAppBar name={this.state.titleNotes} history={this.props.history}></PrimarySearchAppBar>
           </div>
        )
        }
}
