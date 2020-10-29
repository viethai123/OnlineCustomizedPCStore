import * as React from "react";
import { Component } from "react";
import axios from 'axios';
import "../../script";
export default class LoginPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			id: '',
			usersign: 'Hai',
			passsign: '123',
			username: '',
			password: '',
			userEmail: 'viethai@gmail.com',
			isActive: false,
			data: 1,
		};
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push("/home")
	}

	//handleLogOutClick() {
	//	this.props.handleLogOut();
	//}

	public SignUp() {
		debugger
		const { usersign, passsign, userEmail, data } = this.state;
		if (/*data !== 0 || usersign == '' || passsign == ''*/ false) {
			//alert("Please fullfill username and password.")
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

	public async SignIn() {
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

	render() {
		return (
			<div id="logreg-forms">
				<form className="form-signin">
					<h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: "center" }}> Sign in</h1>
					{/*<div className="social-login">
						<button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
						<button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
					</div>
					<p style={{ textAlign: "center" }}> OR  </p>*/}
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address"></input>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password"></input>

					<button className="btn btn-success btn-block" type="submit" onClick={() => this.SignIn()}><i className="fas fa-sign-in-alt"></i> Sign in</button>
					<a href="#" id="forgot_pswd">Forgot password?</a>
					<hr></hr>
					{/*<!-- <p>Don't have an account!</p>  -->*/}
					<button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i> Sign up New Account</button>
				</form>

				<form action="/reset/password/" className="form-reset">
					<input type="email" id="resetEmail" className="form-control" placeholder="Email address"></input>
					<button className="btn btn-primary btn-block" type="submit">Reset Password</button>
					<a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
				</form>

				<form action="/signup/" className="form-signup">
					{/*<div className="social-login">
						<button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
					</div>
					<div className="social-login">
						<button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
					</div>

					<p style={{ textAlign: "center" }}>OR</p>*/}

					<input type="text" id="user-name" className="form-control" placeholder="Full name"></input>
					<input type="email" id="user-email" className="form-control" placeholder="Email address" required></input>
					<input type="password" id="user-pass" className="form-control" placeholder="Password" required></input>
					<input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required></input>

					<button className="btn btn-primary btn-block" type="submit" onClick={() => this.SignUp()}><i className="fas fa-user-plus"></i> Sign Up</button>
					<a href="#" id="cancel_signup"><i className="fas fa-angle-left"></i> Back</a>
				</form>
				<br></br>

			</div>
		);
	}
}
