import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button, InputAdornment } from '@material-ui/core'
import {registration} from '../services/userservice'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            password: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
    }
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleMobileNumber = (event) => {
        this.setState({
            mobileNumber: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.firstName === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "firstName cannot be empty"
            })
        }
        else if (this.state.lastName === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "lastName cannot be empty"
            })
        }
       else if (this.state.email === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                openSnackBar: true,
                snackBarMsg: 'Please provide a valid email address'
            })
        }
        else if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "password cannot be empty"
            })
        } else if (this.state.mobileNumber === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "mobileNumber cannot be empty"
            })
        }
        else if (!/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(this.state.mobileNumber)) {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Phone Number is  not correct"
            })
        }
        else {
            let data={
                "firstName":this.state.firstName,
                "lastName": this.state.lastName,
                "email":this.state.email,
                "mobileNumber":this.state.mobileNumber,
                "password":this.state.password
            }
            registration(data).then(res=>{
                console.log("Response after hitting login api is ",res);
                this.props.history.push('/login')
                
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
                     <div className="register">
                    <h1>
                        Registration
                   </h1>
                   </div>
                   <div>
                <TextField
                        id="firstName"
                        placeholder="First Name"
                        variant="outlined"
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PersonIcon></PersonIcon></InputAdornment>,
                          }}
                    />
                    </div><br/>
                    <div>
                     <TextField
                        id="lastName"
                        placeholder="Last Name"
                        variant="outlined"
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PersonIcon></PersonIcon></InputAdornment>,
                          }}
                    /> </div><br/>
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
                    /></div><br/>
                    <div>
                    <TextField
                        id="password"
                        type="password"
                        placeholder="************"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handlePassword}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><VisibilityOffIcon></VisibilityOffIcon></InputAdornment>,
                          }}
                    /></div><br/>
                    <div>
                     <TextField
                        id="mobileNumber"
                        placeholder="mobile Number"
                        variant="outlined"
                        value={this.state.mobileNumber}
                        onChange={this.handleMobileNumber}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PhoneIphoneIcon></PhoneIphoneIcon></InputAdornment>,
                          }}
                    /></div> 
                    
                    <div>
                    <Button id = "submit-button" variant="contained" color="primary" onClick={this.handleSubmit}>submit</Button>
                    </div>
                    <br/>
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