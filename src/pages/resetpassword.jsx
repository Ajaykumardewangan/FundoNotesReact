import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button, InputAdornment } from '@material-ui/core'
import {resetPassword } from '../services/userservice'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export default class ResetPassword extends React.Component {

    
    componentDidMount() {
       this.state1.token =  this.props.match.params
        // Extracted productId from the Route params.
    };

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            snackBarMsg: '',
            openSnackBar: false,
        }
        this.state1 = {
            token: ''
            }
    }

    handlepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleConfirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "email cannot be empty"
            })
        }
        else if (this.state.confirmPassword === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "password cannot be empty"
            })
        }
        else {
            let data = {
                "password": this.state.password,
                "confirmPassword": this.state.confirmPassword
            }
            resetPassword(data, this.state1.token).then(res => {
                console.log("Response after hitting login api is ", res);
                this.props.history.push('/login')

            }).catch(err => {
                console.log("Error after hitting login api  ", err);
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
                            <center>Reset Password</center>
                        </h1>
                        <TextField
                            id="password"
                            type="password"
                            placeholder="password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handlepassword}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><VisibilityOffIcon></VisibilityOffIcon></InputAdornment>,
                              }}
                        /> <br /> <br /> <br />

                        <TextField
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            variant="outlined"
                            value={this.state.confirmPassword}
                            onChange={this.handleConfirmPassword}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><VisibilityOffIcon></VisibilityOffIcon></InputAdornment>,
                              }}
                        />
                        <div>
                        <Button id = "submit-button" variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
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