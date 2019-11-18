import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button, InputAdornment } from '@material-ui/core'
import {login} from '../services/userservice';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
    }
    
    handleemail = (event) => {
        if(event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            
        }
        this.setState({
            email: event.target.value
        })
    }

    handlepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.email === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }
        else if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "password cannot be empty"
            })
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                openSnackBar: true,
                snackBarMsg: 'Please provide a valid email address'
            })
        }
        else {
            let data={
                "email":this.state.email,
                "password":this.state.password
            }
            login(data).then(res=>{
                console.log("Response after hitting login api is ",res);
                localStorage.setItem('token', res.data.msg)
                localStorage.setItem('email',this.state.email);
                console.log('token hai : ', res.data.msg);
                this.props.history.push('/header')  
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
                        <center>Fundoo Login</center>
                    </h1>
                    <TextField
                        id="email"
                        placeholder="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleemail}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon></EmailIcon></InputAdornment>,
                          }}
                    /> <br/> <br/> <br/>
                    <TextField
                        type="password"
                        id="password"
                        placeholder="********"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handlepassword}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><VisibilityOffIcon></VisibilityOffIcon></InputAdornment>,
                          }}
                    />
                    <div>
                    <Button id = "submit-button" variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
                    </div>
                    <div className="page_link">
                       <a href="registration">Registration</a>
                       <a href="forgetpassword">Forget Password</a>
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