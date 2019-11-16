// import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import {getLables} from '../services/labelservice'
// import Typography from '@material-ui/core/Typography';
// import { Divider } from '@material-ui/core';
// import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

// export default class AddLabel extends Component {
//     componentDidMount() {
//         getLables(localStorage.getItem('token')).then(res => {
//            console.log('all lables are' + res.data);
//            this.setState({
//                allLabels: res.data
//            });
//        }).
//            catch((err) => {
//                console.log('error ' + err);
//            })
//    };
//     constructor(propes){
//         super(propes);
//         this.state={
//             allLabels:[],
//         }
//     }
//     render(){
//         let displayallLables = this.state.allLabels.map((object,index) => {
//             return (
//                 <Button >
//                     <LabelOutlinedIcon  />
//                     <span className="labeltext">{object.labelName}</span>
//                 </Button>
//             )
//         })
//         return(
// <div>
// <Card className='addLAbelCard' style={{width:'200px'}}>
// <CardContent>
// Label Note 
//  </CardContent>
 
// <div>
//     <input placeholder='enter label name' type='email' style={{width:'150px',height:'10px', border:'none', outline:'none'}} />
// </div>
// {displayallLables}
// <div>
    
//     </div>
//     </Card>
// </div>
//         )
//     }
// }


import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Paper,Popper } from '@material-ui/core';
import {getLables} from '../services/labelservice'
import { addLabelOnNotes } from '../services/noteservice';


export default class addlabel extends Component {
    componentDidMount() {
        this.getAllLAbels();
    };

    getAllLAbels = () => {
        getLables(localStorage.getItem('token')).then(res => {
            console.log('all lables are' + res.data);
            this.setState({
                allLabels: res.data
            });
        }).catch((err) => {
                console.log('error ' + err);
            })
    }
    constructor(props){
        super(props);
        this.state={
            anchorEl:null,
            setAnchorEl:false,
            allLabels:[],
            noteId:this.props.id,
        }
    }
 

    handleClick =(e)=> {
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target
        });
    
    };

   handleClose = () => {
       this.setState({
        anchorEl:!this.state.anchorEl
       })
  };

  handleInputChange =(labelName)=>{

    let data={
      "labelName":labelName,   
  }
    
   this.setState({
     isChecked:!this.state.isChecked,
    })

    console.log("selected label",data)
   
    addLabelOnNotes(data,this.props.noteId)
    .then(res=>{
   console.log("success");
   
    }).catch((err) => {
      console.log('error ' + err)
  })
 
 }

render(){
  let displayallLables = this.state.allLabels.map((object, index) => {
    return (
      <Button>
      <input type="checkbox"
     onChange={()=>this.handleInputChange(object.labelName)}
     value={this.state.check}
   />
       <span className="labeltext" >{object.labelName}</span>
   </Button>
    )
})
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>this.handleClick(e)}>
        add label
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
     style={{zIndex:'9999'}}
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem  className="labelEdit">
    {displayallLables}  
        </MenuItem>
       
      </Menu>
    </div>
  );
}
}