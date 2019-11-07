import React, { Component } from "react"
import PrimarySearchAppBar from "./header";


export default class LabelNoteComponent extends Component {

    componentDidMount() {
         this.state.labelId =  this.props.match.params
         console.log("inside labelNotecom compdidm :",this.state.labelId.labelId)
         // Extracted productId from the Route params.
     };

    constructor(props){
        super(props);
        this.state = {
            labelId:'',
            titleNotes: 'getNotesOnLabel',  
        }
    }

    render() {
        return(
           <div>
               <PrimarySearchAppBar name={this.state.titleNotes} history={this.props.history} labelId={this.state.labelId.labelId} ></PrimarySearchAppBar>
           </div>
        )
        }
}
