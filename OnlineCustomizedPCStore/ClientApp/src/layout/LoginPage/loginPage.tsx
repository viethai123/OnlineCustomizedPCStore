import * as React from "react";
import { Component } from "react";
import "../../script";
export default class LoginPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
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

					<button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
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

					<button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
					<a href="#" id="cancel_signup"><i className="fas fa-angle-left"></i> Back</a>
				</form>
				<br></br>

			</div>
		);
	}
}
