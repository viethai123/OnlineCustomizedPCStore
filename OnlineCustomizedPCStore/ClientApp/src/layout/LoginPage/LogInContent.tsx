/* eslint-disable import/first */
import * as React from 'react'
import { Component } from 'react'
import axios from 'axios';



class LogInContent extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: '',
            usersign: '',
            passsign: '',
            username: '',
            password: '',
            userFullName: '',
            userEmail: '',
            isActive: false,
            data: [],
            inputClass: false,
            inputClass2: false,
            inputClass3: false,
            inputClass4: false,
            inputClass5: false,
            inputClass6: false,
            closeSignIn: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.userSignUp = this.userSignUp.bind(this);
        this.checkUserName = this.checkUserName.bind(this);
    }

    public async handleChange(event) {
        await this.setState({
            [event.target.name]: event.target.value
        })
    }

    public isActive = () => {
        var isActive = this.state.isActive;
        var closeSignIn = this.state.closeSignIn;
        this.setState({
            isActive: !isActive, closeSignIn: !closeSignIn
        })
    }

    public userSignUp() {
        debugger
        const { usersign, passsign, userFullName, userEmail, data } = this.state;
        if (data !== 0 || usersign == '' || passsign == '') {
            alert("Please fullfill username and password.")
        }
        else {
            axios({
                method: 'post',
                url: 'api/UserAccount/AddUserAccount',
                params: {
                    Name: usersign,
                    Password: passsign,
                    Email: userEmail,
                },
                withCredentials: true
            }).then(response => {
                if (response.data !== 1) {
                    alert("Fail to create account")
                }
                else {
                    alert("Create account success.")
                    this.setState({ isActive: false, closeSignIn: true })
                }
            })
        }
    };

    public async userLogIn() {
        var username = this.state.username;
        var password = this.state.password;
        await axios({
            method: 'get',
            url: 'api/UserAccount/CheckAccountLogin',
            params: {
                Name: username,
                Password: password,
            },
        }).then(response => {
            if (response.data[0] == null) {
                alert("Incorrect username or password. Please try again");
            }
            else {
                this.props.handleSuccessfulAuth(response.data)
            }
        })
    };

    public async checkUserName() {
        var username = this.state.usersign;
        if (username == '') {
            alert('Please fill in username')
        }
        else {
            await axios({
                method: 'post',
                url: 'api/UserAccount/CheckUserName',
                params: {
                    userName: username,
                },
            }).then(response => {
                if (response.data.length !== 0) {
                    alert("This user name is available")
                }
                else {
                    alert("You can use this username.")
                    this.setState({ data: response.data.length })
                }
            })
        }
    }

    focus() {
        this.setState({
            inputClass: true
        })
    }

    focus2() {
        this.setState({
            inputClass2: true
        })
    }

    focus3() {
        this.setState({
            inputClass3: true
        })
    }

    focus4() {
        this.setState({
            inputClass4: true
        })
    }

    focus5() {
        this.setState({
            inputClass5: true
        })
    }

    focus6() {
        this.setState({
            inputClass6: true
        })
    }

    render() {
        const inputs = document.querySelectorAll('.u-input');

        function focusFunc(this:any) {
            let parent = this.parentNode.parentNode;
            parent.classList.add('focus');
        }

        function blurFunc(this: any) {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove('focus');
            }

        }

        inputs.forEach(input => {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFunc);
        })

        var inputone = this.state.inputClass ? 'input-div one focus' : 'input-div one';
        var inputtwo = this.state.inputClass2 ? 'input-div two focus' : 'input-div two';
        var input1 = this.state.inputClass3 ? 'input-div three focus' : 'input-div three';
        var input2 = this.state.inputClass4 ? 'input-div four focus' : 'input-div four';
        var input3 = this.state.inputClass5 ? 'input-div five focus' : 'input-div five';
        var input4 = this.state.inputClass6 ? 'input-div six focus' : 'input-div six';
        console.log(this.state.passsign)
        console.log(this.state.usersign)
        return (
            <div className="container-fluid-login">
                {this.state.closeSignIn ?
                    <div className="container login">
                        <div className="login-container">
                            <div className="form">
                                <h2>LOG IN</h2>
                                <div className={inputone} onClick={() => this.focus()}>
                                    <div className="i">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h5>Username</h5>
                                        <input
                                            className="box-none u-input"
                                            type="text"
                                            name="username"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className={inputtwo} onClick={() => this.focus2()}>
                                    <div className="i">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h5>Password</h5>
                                        <input
                                            className="box-none u-input"
                                            type="password"
                                            name="password"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <button className="login-a" onClick={() => this.isActive()}>Register an account</button>
                                <input type="submit" className="login-btn" value="Login" onClick={() => { this.userLogIn() }} />
                            </div>
                        </div>
                    </div> : null
                }
                {this.state.isActive ?
                    <div className="container">
                        <div className="container login">
                            <div className="login-container">
                                <div className="form">
                                    <h2>SIGN UP</h2>
                                    <form>
                                        <div className={input1} onClick={() => this.focus3()}>
                                            <div className="i">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <h5>Full name</h5>
                                                <input
                                                    className="box-none u-input"
                                                    type="text"
                                                    name="userFullName"
                                                    value={this.state.userFullName}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={input2} onClick={() => this.focus4()}>
                                            <div className="i">
                                                <i className="fa fa-lock" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <h5>Username</h5>
                                                <input
                                                    className="box-none u-input"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    name="usersign"
                                                    value={this.state.usersign}
                                                    required
                                                />

                                            </div>
                                        </div>
                                        <button className="check-btn" type="submit" onClick={() => this.checkUserName()}>Check UserName</button>
                                        <div className={input3} onClick={() => this.focus5()}>
                                            <div className="i">
                                                <i className="fa fa-lock" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <h5>Password</h5>
                                                <input
                                                    className="box-none u-input"
                                                    type="text"
                                                    name="passsign"
                                                    value={this.state.passsign}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={input4} onClick={() => this.focus6()}>
                                            <div className="i">
                                                <i className="fa fa-lock" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <h5>Email Address</h5>
                                                <input
                                                    className="box-none u-input"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="userEmail"
                                                    value={this.state.userEmail}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="login-btn" onClick={this.userSignUp}>Sign up</button>
                                        <button type="submit" className="login-btn" onClick={() => this.isActive()}>Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
            </div>
        )
    }
}
export default LogInContent