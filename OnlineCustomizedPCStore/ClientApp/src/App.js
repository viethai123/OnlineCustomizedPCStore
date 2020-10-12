import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Body from './layout/body';
import Payment from './layout/paymentComponent/payment';
import LoginPage from './layout/LoginPage/loginPage';

import './custom.css'

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/counter' component={Counter} />
				<Route path='/fetch-data' component={FetchData} />
				<Route path='/home' component={Body} />
				<Route path='/cart' component={Payment} />
				<Route path='/login' component={LoginPage} />
			</Layout>
		);
	}
}
