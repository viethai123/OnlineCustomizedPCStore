import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import UserProfile from '../layout/LoginPage/UserProfile';
import Cookies from 'js-cookie';

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
			user: Cookies.get('user')
		};
	}

	componentDidMount() {
		const script = document.createElement("script");
		script.src = "../script.js";
		script.async = true;
		document.body.appendChild(script);
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	handleLogOutClick() {
		//this.props.handleLogOut();
		console.log("handleLogOut");
	}

	render() {
		return (
			<header>
				<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
					<Container>
						<NavbarBrand tag={Link} to="/">OnlineCustomizedPCStore</NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
							<ul className="navbar-nav flex-grow">
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/homepage">HomePage</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/home">CustomizedPCs</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} className="text-dark" to="/cart">Cart</NavLink>
								</NavItem>
								{this.props.loggedInStatus == "NOT_LOGGED_IN" && this.state.user == null ?
									<NavItem>
										<NavLink tag={Link} className="text-dark" to="/LoginPage">User Log In</NavLink>
									</NavItem> :
									<NavItem>
										<NavLink className="text-dark">
											<UserProfile
												loggedInStatus={this.props.loggedInStatus}
												user={this.props.user}
												handleLogOut={this.props.handleLogOut}
											/>
										</NavLink>
									</NavItem>
								}
							</ul>
						</Collapse>
					</Container>
				</Navbar>
			</header>

		);
	}
}
