import React, { Component } from "react"
import PrimarySearchAppBar from "./header";

export default class TrashComponent extends Component {
    constructor(props){
        super();
        this.state = {
            titleNotes: 'get_trash',  
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
