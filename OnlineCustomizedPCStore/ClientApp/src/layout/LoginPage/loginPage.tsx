import * as React from 'react'
import { Component } from 'react'
import LogInContent from './LogInContent'
import axios from 'axios'

export default class LogInPage extends Component<any, any>{
	constructor(props: any) {
		super(props)
		this.state = {
		}
		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogOutClick = this.handleLogOutClick.bind(this);
	};

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push("/home")
	}

	handleLogOutClick() {
		this.props.handleLogOut();
	}

	render() {
		return (
			<div className="container-fluid">
				{this.props.loggedInStatus == "LOGGED_IN" ?
					<button onClick={() => this.handleLogOutClick()}>Log Out</button> :
					<div>
						<LogInContent handleSuccessfulAuth={this.handleSuccessfulAuth} />
					</div>
				}
			</div>
		)
	}
}