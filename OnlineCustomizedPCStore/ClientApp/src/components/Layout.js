import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<div>
				<NavMenu
					handleLogOut={this.props.handleLogOut}
					loggedInStatus={this.props.loggedInStatus}
					user={this.props.user}
					ChangeColorMode={this.props.ChangeColorMode}
					themeMode={this.props.themeMode}
				/>
				<>
					{this.props.children}
				</>
			</div>
		);
	}
}
