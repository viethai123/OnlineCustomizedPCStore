import React, { Component, useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Body from './layout/body';
import Payment from './layout/paymentComponent/payment';
import LogInPage from './layout/LoginPage/LogInPage';
import ReactNotification from 'react-notifications-component'
import '../src/App.css';
import Cookies from 'js-cookie'
import AuthApi from './layout/LoginPage/AuthApi'
import HomePage from './layout/HomePage';
import '../src/script.js';
class App extends Component {
	static displayName = App.name;
	constructor(props) {
		super(props)
		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
			user: {},
		}
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
	}
	handleLogin(data) {
		this.setState({
			loggedInStatus: "LOGGED_IN",
			user: data
		})
		this.props.Auth.setAuth(true)
		Cookies.set("id", this.state.user[0].id, { expires: 0.3124 })
		Cookies.set("user", this.state.user[0].name, { expires: 0.3124 })
		//Cookies.set("fullname", this.state.user[0].userFullName, { expires: 0.3124 })
		Cookies.set("password", this.state.user[0].password, { expires: 0.3124 })
	}

	handleLogOut() {
		debugger
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
			user: {}
		})
		this.props.Auth.setAuth(false)
		Cookies.remove('id')
		Cookies.remove('user')
		Cookies.remove('email')
	}


	render() {
		const Home = ({ auth, component: Component, ...props }) => {
			return (
				<Route
					{...props}
					render={(props) => auth ? (
						<Body
							{...props}
							loggedInStatus={this.state.loggedInStatus}
							handleLogOut={this.handleLogOut}
							user={this.state.user}
						/>
					) : <Redirect to='/login' />
					}
				/>
			)
		}
		const Login = ({ auth, component: Component, ...props }) => {
			return (
				<Route
					{...props}
					render={(props) => !auth ? (
						<LogInPage
							{...props}
							handleLogin={this.handleLogin}
							handleLogOut={this.handleLogOut}
							loggedInStatus={this.state.loggedInStatus} />
					) : <Redirect to='/home' />
					}
				/>
			)
		}
		return (
			<div>
				<ReactNotification />

				<Layout
					loggedInStatus={this.state.loggedInStatus}
					handleLogOut={this.handleLogOut}
					user={this.state.user}
				>

					<Route
						exact path={'/'}
						component={Home}
					/>
					<Route path='/homepage' component={HomePage} />
					<Route path='/counter' component={Counter} />
					<Route path='/fetch-data' component={FetchData} />
					<Home
						exact
						path={'/home'}
						component={Body}
						auth={this.props.Auth.auth}
					/>
					<Route path='/cart' component={Payment} />
					<Login
						exact
						path={'/login'}
						component={LogInPage}
						auth={this.props.Auth.auth}
					/>
				</Layout>
			</div>
		);
	}
}
function AppFather(props) {
	const Auth = React.useContext(AuthApi)
	return (
		<div>
			<App
				Auth={Auth}
			/>
		</div>
	);
}


const SupportCookie = () => {
	const [auth, setAuth] = React.useState(false);
	const readCookie = () => {
		const user = Cookies.get("user")
		if (user) {
			setAuth(true);
		}
	}
	React.useEffect(() => {
		readCookie();
	}, [])
	return (
		<div>
			<AuthApi.Provider value={{ auth, setAuth }}>
				<AppFather />
			</AuthApi.Provider>

		</div>
	)

}

export default SupportCookie
