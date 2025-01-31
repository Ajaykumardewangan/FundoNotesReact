import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button, InputAdornment } from '@material-ui/core'
import {forgetPassword} from '../services/userservice'
import EmailIcon from '@material-ui/icons/Email';

export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            resetPasswordUrl: 'http://localhost:3000/resetpassword/:',
            snackBarMsg: '',
            openSnackBar: false,
        }
    }
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.email === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }
        else {
            let data={
                "email":this.state.email,
                "resetPasswordUrl":this.state.resetPasswordUrl
            }
            forgetPassword(data).then(res=>{
                console.log("Response after hitting login api is ",res);
                this.props.history.push('/resetpassword')
                
            }).catch(err=>{
                console.log("Error after hitting login api  ",err);
            })
        }
    }
    handleClose = () => {
        this.setState({
            openSnackBar: false
        })
    }
    render() {
        return (
            <div className="login-container">
                <Card className="login-card">
                 <div> 
                <h1>
                   <center>Forget Paswd</center>
                </h1>
                <div>
                    <TextField
                        id="email"
                        placeholder="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon></EmailIcon></InputAdornment>,
                          }}
                    /> </div>
                    <div>
                    <Button id = "submit-button" variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
                    </div>
                    <div className="page_link">
                    <a href="registration">Registration</a>
                    <a href="login">Login</a>
                    </div>
                 </div>  
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackBarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}>
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}