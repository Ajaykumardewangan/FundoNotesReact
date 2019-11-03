import React, {Component} from 'react';
import { Dialog } from '@material-ui/core';
import {getLables} from '../services/labelservice';
import Button from '@material-ui/core/Button';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

export default class EditLabel extends Component{
    componentDidMount() {
        getLables(localStorage.getItem('token')).then(res => {
           console.log('all lables are' + res.data);
           this.setState({
               allLabels: res.data
           });
       }).
           catch((err) => {
               console.log('error ' + err);
           })
   };
    constructor(){
        super();
        this.state={
            allLabels:[],
        }
    }
    render(){
        let displayallLables = this.state.allLabels.map((object,index) => {
            return (
                <Button >
                    <LabelOutlinedIcon  />
                    <span className="labeltext">{object.labelName}</span>
                </Button>
            )
        })
        return(
<div className='addLAbelCard'>     
{displayallLables}
</div>
        ) 
    }
}