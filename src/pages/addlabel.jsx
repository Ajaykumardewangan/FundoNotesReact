import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {getLables} from '../services/labelservice'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

export default class AddLabel extends Component {
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
    constructor(propes){
        super(propes);
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
<div>
<Card className='addLAbelCard' style={{width:'200px'}}>
<CardContent>
Label Note 
 </CardContent>
 
<div>
    <input placeholder='enter label name' type='email' style={{width:'150px',height:'10px', border:'none', outline:'none'}} />
</div>
{displayallLables}
<div>
    
    </div>
    </Card>
</div>
        )
    }
}