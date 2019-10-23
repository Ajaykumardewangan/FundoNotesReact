import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import {registration} from '../services/userservice'
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
                    <h1>
                        Fundo Registration
                   </h1>
                <TextField
                        id="firstName"
                        placeholder="First Name"
                        variant="outlined"
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                    />
                     <TextField
                        id="lastName"
                        placeholder="Last Name"
                        variant="outlined"
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                    /> 
                    <TextField
                        id="email"
                        placeholder="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                     <TextField
                        id="mobileNumber"
                        placeholder="mobile Number"
                        variant="outlined"
                        value={this.state.mobileNumber}
                        onChange={this.handleMobileNumber}
                    /> 
                    <TextField
                        id="password"
                        placeholder="password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handlePassword}
                    />
                    <Button className = "submit-button" onClick={this.handleSubmit}>Register</Button>
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