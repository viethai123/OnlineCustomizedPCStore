/* eslint-disable import/first */
import * as React from "react";
import { Component } from "react";
import SlideShow from "./componentsBody/slideShow/slideShow";
import ComputerComponent from "./componentsBody/computerComponents/computerComponent";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer"
import '../App.css';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class Body extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			imageSlideShowData: [
				{
					id: 1,
					imageURL:
						"https://xgear.vn/wp-content/uploads/2020/07/Summer-Sale-Slider.jpg",
					alt: "First slide",
					isActive: true,
				},
				{
					id: 2,
					imageURL:
						"https://xgear.vn/wp-content/uploads/2020/07/win_spacex.jpg",
					alt: "Second slide",
					isActive: false,
				},
				{
					id: 3,
					imageURL:
						"https://xgear.vn/wp-content/uploads/2020/07/TUF-Gaming-VG27AQ.jpg",
					alt: "Third slide",
					isActive: false,
				},
			],
			computerComponentDatas: [
				{
					id: 1,
					name: "Vi xử lý",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/cpu-icon.284123fe.svg",
					status: false,
				},
				{
					id: 2,
					name: "Bo mạch chủ",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/mother-board-icon.82595f5e.svg",
					status: false,
				},
				{
					id: 3,
					name: "RAM",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/RAM-icon.60ea9105.svg",
					status: false,
				},
				{
					id: 4,
					name: "Ổ HDD",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/hard-disk-icon.f639705d.svg",
					status: false,
				},
				{
					id: 5,
					name: "Ổ SSD",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/ssd-disk-icon.79836a15.svg",
					status: false,
				},
				{
					id: 6,
					name: "VGA",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/grphics-card-icon.7b2bb00c.svg",
					status: false,
				},
				{
					id: 7,
					name: "Nguồn",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/power-icon.43200d33.svg",
					status: false,
				},
				{
					id: 8,
					name: "Vỏ case",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/chassis-icon.76efc8db.svg",
					status: false,
				},
				{
					id: 9,
					name: "Tản nhiệt",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/heat-sink-icon.7de4f64e.svg",
					status: false,
				},
				{
					id: 10,
					name: "Màn hình",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/monitor-icon.ba848ad5.svg",
					status: false,
				},
				{
					id: 11,
					name: "Bàn phím",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/keyboard-icon.87b45d1c.svg",
					status: false,
				},
				{
					id: 12,
					name: "Chuột",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/mouse-icon.144f4d99.svg",
					status: false,
				},
			],
			computerComponentDetailData: [
				{
					id: 1,
					name:
						"CPU INTEL Core i7-9700 (8C/8T, 3.00 GHz up to 4.70 GHz, 12MB) - 1151-v2",
					url:
						"https://lh3.googleusercontent.com/rblY6iBmaZ83VpzgY4IIuZT8eUEFPJWY3G98_rT7AKmUwbI5WhYjB2FtyD6Ml2DHvwfMERIWx-Qc2BroA0aG=w150-rw",
					sku: "190900303",
					price: 8990000,
				},
				{
					id: 2,
					name:
						"CPU AMD Ryzen 5 3500X (6C/6T, 3.6 GHz up to 4.1 GHz, 32MB) - AM4",
					url:
						"https://lh3.googleusercontent.com/UjJTwABDtQ_pDpV2LK48zdOmp0TwrFng9vT0udEvo_v80mkS9b8Ac20G1DoTyB4FDzjCYiFSSxaBetaieu78=w150",
					sku: "191201596",
					price: 3790000,
				},
				{
					id: 3,
					name: "CPU INTEL Pentium G5420 (2C/4T, 3.80 GHz, 4MB) - 1151-v2",
					url:
						"https://lh3.googleusercontent.com/in16EvHftb6G4GtW55IodSIzgbUjd7ZPeTUalbx1CNq81eFBqwaj3bK5e1YyiioD3rnsBqCndEhl8l8XA8Q=w150-rw",
					sku: "190900303",
					price: 1690000,
				},
				{
					id: 4,
					name:
						"CPU AMD Ryzen 5 3500 (6C/6T, 3.6 GHz up to 4.1 GHz, 16MB) - AM4",
					url:
						"https://lh3.googleusercontent.com/LZ25GgiDK-2iUPR61RYozt2blBHxwmJt8OevqyVGnnAxr_PcU_WuUdGxJE9aP_CZOSKwSD7v0-mKCZX0Ze4B=w150-rw",
					sku: "200300647",
					price: 3090000,
				},
				{
					id: 5,
					name:
						"CPU AMD Ryzen 5 3500 (6C/6T, 3.6 GHz up to 4.1 GHz, 16MB) - AM4",
					url:
						"https://lh3.googleusercontent.com/LZ25GgiDK-2iUPR61RYozt2blBHxwmJt8OevqyVGnnAxr_PcU_WuUdGxJE9aP_CZOSKwSD7v0-mKCZX0Ze4B=w150-rw",
					sku: "200302000",
					price: 3090000,
				},
				{
					id: 6,
					name:
						"CPU INTEL Core i9-9900 (8C/16T, 3.10 GHz up to 5.00 GHz, 16MB) - 1151-v2",
					url:
						"https://lh3.googleusercontent.com/kA4MDfhAnD2fSAQdO23MuKlheH6H7KVlmbBeO1DkDpT09CAl7vQZypJZv4aDcoDVD0aB6cOh8EOX1dqbeFY=w150-rw",
					sku: "200400499",
					price: 11990000,
				},
			],
			saveComputerComponent: [
				{
					id: 1,
					name: "Vi xử lý",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/cpu-icon.284123fe.svg",
					status: false,
				},
				{
					id: 2,
					name: "Bo mạch chủ",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/mother-board-icon.82595f5e.svg",
					status: false,
				},
				{
					id: 3,
					name: "RAM",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/RAM-icon.60ea9105.svg",
					status: false,
				},
				{
					id: 4,
					name: "Ổ HDD",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/hard-disk-icon.f639705d.svg",
					status: false,
				},
				{
					id: 5,
					name: "Ổ SSD",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/ssd-disk-icon.79836a15.svg",
					status: false,
				},
				{
					id: 6,
					name: "VGA",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/grphics-card-icon.7b2bb00c.svg",
					status: false,
				},
				{
					id: 7,
					name: "Nguồn",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/power-icon.43200d33.svg",
					status: false,
				},
				{
					id: 8,
					name: "Vỏ case",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/chassis-icon.76efc8db.svg",
					status: false,
				},
				{
					id: 9,
					name: "Tản nhiệt",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/heat-sink-icon.7de4f64e.svg",
					status: false,
				},
				{
					id: 10,
					name: "Màn hình",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/monitor-icon.ba848ad5.svg",
					status: false,
				},
				{
					id: 11,
					name: "Bàn phím",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/keyboard-icon.87b45d1c.svg",
					status: false,
				},
				{
					id: 12,
					name: "Chuột",
					icon:
						"http://static.360buyimg.com/master-of-loader/pc/img/mouse-icon.144f4d99.svg",
					status: false,
				},
			],
			totalPrice: 0,
			UserId: Cookies.get('id'),
		};
	}

	async componentDidMount() {
		debugger
		console.log("Loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
		console.log(this.props.loggedInStatus);
		console.log(this.props.user);
		var UserId = this.props.loggedInStatus == 'LOGGED_IN' ? this.props.user[0].id : this.state.UserId;
		await fetch('api/ComputerComponent/GetUserOptions?UserId=' + UserId)
			.then(response => response.json())
			.then(data => {
				var saveComputerComponent = this.state.saveComputerComponent;
				var totalPrice = this.state.totalPrice;
				data.forEach((i: any) => {
					this.state.saveComputerComponent.forEach((j: any) => {
						if (i.type == j.id) {
							j.product = i;
							j.status = true;
							console.log("lần 1");
							console.log(j.status);
						}
					})
				})

				this.state.saveComputerComponent.forEach((j: any) => {
					this.state.computerComponentDatas.forEach((k) => {
						if (j.id == k.id) {
							k.status = j.status;
						}
					})
				})

				this.state.saveComputerComponent.forEach((j: any) => {
					if (j.product != null) {
						var price = j.product.price ? j.product.price : "0";
						var pricee = price.replace(".", "");
						var priceee = pricee.replace(".", "");
						var priceeee = priceee.replace("đ", "");

						totalPrice +=
							Object.keys(j.product).length === 0
								? 0
								: Number(priceeee) * j.product.quantity;
					}
				})
				this.setState({
					saveComputerComponent,
					totalPrice
				});
				console.log("GetUserOptions")
				console.log(saveComputerComponent);
			})

		await fetch('api/ComputerComponent/ListOfComputerComponent')
			.then(response => response.json())
			.then(data => {
				this.setState({
					computerComponentDetailData: data,
				});
				console.log(this.state.computerComponentDetailData)
			});
	}

	handleChangeStatus = (computer: any) => {
		return (e: any) => {
			//const status = computer.status;
			const { computerComponentDatas } = this.state;
			const index = computerComponentDatas.indexOf(computer);
			this.setState({
				computerComponentDatas: [
					...computerComponentDatas.slice(0, index),
					{
						...computer,
						status: true,
					},
					...computerComponentDatas.slice(index + 1),
				],
			});
		};
	};

	TotalPrice = (computer: any, key: any, item: any) => {
		let saveComputerComponent = this.state.saveComputerComponent;
		var totalPrice = 0;
		var quantity = 1;
		var product = { ...item, quantity };
		saveComputerComponent[key].product = product;
		//console.log(saveComputerComponent[key]);
		saveComputerComponent.forEach((e: any) => {

			if (e.product ? true : false) {
				var price = e.product.price ? e.product.price : "0";
				var pricee = price.replace(".", "");
				var priceee = pricee.replace(".", "");
				var priceeee = priceee.replace("đ", "");
				totalPrice +=
					Object.keys(e.product).length === 0
						? 0
						: Number(priceeee) * e.product.quantity;
			}
		});
		this.setState({
			saveComputerComponent: [...saveComputerComponent],
			totalPrice,
		});
		console.log("TotalPrice");
		console.log(saveComputerComponent);
		console.log(totalPrice);
	};
	IncreaseQuantity = (key: any, quantity: any) => {
		let saveComputerComponent = this.state.saveComputerComponent;
		let totalPrice = 0;
		saveComputerComponent[key].product.quantity += 1;
		saveComputerComponent.forEach((e: any) => {
			if (e.product ? true : false) {
				var price = e.product.price ? e.product.price : "0";
				var pricee = price.replace(".", "");
				var priceee = pricee.replace(".", "");
				var priceeee = priceee.replace("đ", "");
				totalPrice +=
					Object.keys(e.product).length === 0
						? 0
						: Number(priceeee) * e.product.quantity;
			}
		});
		this.setState((prevState: any) => {
			return {
				saveComputerComponent,
				totalPrice: totalPrice,
			};
		});
		//console.log(this.state.totalPrice);
		//console.log(this.state.saveComputerComponent);
	};
	DecreaseQuantity = (key: any, quantity: any) => {

		let saveComputerComponent = this.state.saveComputerComponent;
		let totalPrice = this.state.totalPrice;
		if (saveComputerComponent[key].product.quantity > 0) {
			saveComputerComponent[key].product.quantity -= 1;
		}
		var price = saveComputerComponent[key].product.price;
		var pricee = price.replace(".", "");
		var priceee = pricee.replace(".", "");
		var priceeee = priceee.replace("đ", "");
		totalPrice -= Number(priceeee);
		//saveComputerComponent.forEach((e: any) => {
		//	if (e.product ? true : false) {
		//
		//		var price = e.product.price;
		//		var pricee = price.replace(".", "");
		//		var priceee = pricee.replace(".", "");
		//		var priceeee = priceee.replace("đ", "");
		//		totalPrice = totalPricee - 1
		//			Object.keys(e.product).length === 0
		//				? 0
		//				: Number(priceeee);
		//	}
		//});
		this.setState((prevState: any) => {
			return {
				saveComputerComponent,
				totalPrice: totalPrice,
			};
		});
		console.log(this.state.totalPrice);
		console.log(this.state.saveComputerComponent);
	};
	ResetQuantity = (key: any, item: any, index: any) => {
		let saveComputerComponent = this.state.saveComputerComponent;
		if (saveComputerComponent[key].product ? true : false) {
			if (item.id !== saveComputerComponent[key].id) {
				saveComputerComponent[key].product.quantity = 1;
				this.setState((prevState: any) => {
					return {
						saveComputerComponent,
					};
				});
			}
		}
		// console.log(item);
		// console.log(this.state.ComputerComponent);
	};

	DeleteProduct = (item: any, key: any) => {
		let saveComputerComponent = this.state.saveComputerComponent;
		let totalPrice = this.state.totalPrice;
		const { computerComponentDatas } = this.state;
		if (saveComputerComponent[key].product.quantity === 0) {
			var price = saveComputerComponent[key].product.price;
			var pricee = price.replace(".", "");
			var priceee = pricee.replace(".", "");
			var priceeee = priceee.replace("đ", "");
			totalPrice -= Number(priceeee);
			//saveComputerComponent.forEach((e: any) => {
			//	if (e.product ? true : false) {
			//		var price = e.product.price;
			//		var pricee = price.replace(".", "");
			//		var priceee = pricee.replace(".", "");
			//		var priceeee = priceee.replace("đ", "");
			//		totalPrice =
			//			Object.keys(e.product).length === 0
			//				? 0
			//				: Number(priceeee) * e.product.quantity;
			//	}
			//});
			saveComputerComponent[key].product = {};
			computerComponentDatas[key].status = false;
			//console.log(totalPrice);
			this.setState({ computerComponentDatas, totalPrice });
		}
	};

	async AddUserOption() {
		debugger
		//var QuantityProcessor = saveComputerComponent[0].product.quantity ? saveComputerComponent[0].product.quantity : 0;
		var saveComputerComponent = this.state.saveComputerComponent;

		var ProcessorSku = saveComputerComponent[0].product ? saveComputerComponent[0].product.sku : "0";
		var MainboarSku = saveComputerComponent[1].product ? saveComputerComponent[1].product.sku : "0";
		var RAMSku = saveComputerComponent[2].product ? saveComputerComponent[2].product.sku : "0";
		var HDDSku = saveComputerComponent[3].product ? saveComputerComponent[3].product.sku : "0";
		var SSDSku = saveComputerComponent[4].product ? saveComputerComponent[4].product.sku : "0";
		var VGASku = saveComputerComponent[5].product ? saveComputerComponent[5].product.sku : "0";
		var SourceSku = saveComputerComponent[6].product ? saveComputerComponent[6].product.sku : "0";
		var CaseSku = saveComputerComponent[7].product ? saveComputerComponent[7].product.sku : "0";
		var RadiatorsSku = saveComputerComponent[8].product ? saveComputerComponent[8].product.sku : "0";
		var ScreenSku = saveComputerComponent[9].product ? saveComputerComponent[9].product.sku : "0";
		var KeyboardSku = saveComputerComponent[10].product ? saveComputerComponent[10].product.sku : "0";
		var MouseSku = saveComputerComponent[11].product ? saveComputerComponent[11].product.sku : "0";
		//var HeadphoneSku = saveComputerComponent[12].product ? saveComputerComponent[12].product.sku : "0";
		//var SpeakersSku = saveComputerComponent[13].product ? saveComputerComponent[13].product.sku : "0";

		var UserId = this.state.UserId;
		var message = 0;
		var IsUserChooseOrNot = 0;

		await axios({
			method: 'get',
			url: 'api/UserCart/CheckUserChooseOrNot',
			params: {
				UserId: UserId,
			}
		})
			.then(function (response) {
				console.log(response.data);
				IsUserChooseOrNot = response.data;
			});

		if (IsUserChooseOrNot != 0) { //Nếu chọn thì update, không thì add
			await axios({
				method: 'put',
				url: 'api/ComputerComponent/UpdateUserOption',
				params: {
					ProcessorSku: ProcessorSku,
					MainboarSku: MainboarSku,
					RAMSku: RAMSku,
					HDDSku: HDDSku,
					SSDSku: SSDSku,
					VGASku: VGASku,
					SourceSku: SourceSku,
					CaseSku: CaseSku,
					RadiatorsSku: RadiatorsSku,
					ScreenSku: ScreenSku,
					KeyboardSku: KeyboardSku,
					MouseSku: MouseSku,
					HeadphoneSku: "0",
					SpeakersSku: "0",

					UserId: UserId
				}
			})
				.then(function (response) {
					console.log(response);
					message = response.data;
				});

			await axios({
				method: 'delete',
				url: 'api/Quantity/DeleteProductQuantity',
				params: {
					UserId: UserId
				}
			});
			saveComputerComponent.forEach((computerComponent: any) => {
				if (computerComponent.product != null) {
					axios({
						method: 'post',
						url: 'api/Quantity/AddUserOptionQuantity',
						params: {
							SKU: computerComponent.product.sku,
							Quantity: computerComponent.product.quantity,
							UserId: UserId,
						}
					})
						.then(function (response) {
							console.log(response);
							message = response.data;
						});
				}
			});
		} else {
			await axios({
				method: 'post',
				url: 'api/ComputerComponent/AddUserOption',
				params: {
					ProcessorSku: ProcessorSku,
					MainboarSku: MainboarSku,
					RAMSku: RAMSku,
					HDDSku: HDDSku,
					SSDSku: SSDSku,
					VGASku: VGASku,
					SourceSku: SourceSku,
					CaseSku: CaseSku,
					RadiatorsSku: RadiatorsSku,
					ScreenSku: ScreenSku,
					KeyboardSku: KeyboardSku,
					MouseSku: MouseSku,
					HeadphoneSku: "0",
					SpeakersSku: "0",

					UserId: UserId
				}
			})
				.then(function (response) {
					console.log(response);
					message = response.data;
				});

			saveComputerComponent.forEach((computerComponent: any) => {
				if (computerComponent.product != null) {
					axios({
						method: 'post',
						url: 'api/Quantity/AddUserOptionQuantity',
						params: {
							SKU: computerComponent.product.sku,
							Quantity: computerComponent.product.quantity,
							UserId: UserId,
						}
					})
						.then(function (response) {
							console.log(response);
							message = response.data;
						});
				}
			});
		}
	}

	//async UpdateUserOption() {
	//
	//	var saveComputerComponent = this.state.saveComputerComponent;
	//	var ProcessorSku = saveComputerComponent[0].product.sku ? saveComputerComponent[0].product.sku : "0";
	//	var MainboarSku = saveComputerComponent[1].product.sku ? saveComputerComponent[1].product.sku : "0";
	//	var UserId = 1;
	//	var message = 0;
	//	await axios({
	//		method: 'put',
	//		url: 'api/ComputerComponent/UpdateUserOption',
	//		params: {
	//			ProcessorSku: ProcessorSku,
	//			MainboarSku: MainboarSku,
	//			UserId: UserId
	//		}
	//	})
	//		.then(function (response) {
	//			console.log(response);
	//			message = response.data;
	//		});
	//}

	async GetUserOption() {
		var UserId = this.state.UserId;
		var message = 0;

		await fetch('api/ComputerComponent/GetUserOption?UserID=' + UserId)
			.then(response => response.json())
			.then(data => {
				//data.forEach((option: any) => {
				//	option.products = [];
				//});
				this.setState({
					optionComputerComponent: data,
				});
			});
	}

	render() {
		console.log(this.state.saveComputerComponent)
		return (
			<div className="main">
				<div className="body">
					<div className="container">
						<SlideShow imageSlideShowData={this.state.imageSlideShowData} />
						<div className="css-1c5m4ef">
							<div className="css-l6dpr4">
								{this.state.computerComponentDatas.map(
									(computer: any, key: number) => {
										return (
											<ComputerComponent
												key={key}
												item={computer}
												handleChangeStatus={this.handleChangeStatus(computer)}
												computerComponentDetailData={
													this.state.computerComponentDetailData
												}
												ComputerComponent={this.state.ComputerComponent}
												TotalPrice={(item: any) =>
													this.TotalPrice(computer, key, item)
												}
												IncreaseQuantity={(quantity: any) =>
													this.IncreaseQuantity(key, quantity)
												}
												DecreaseQuantity={(quantity: any) =>
													this.DecreaseQuantity(key, quantity)
												}
												ResetQuantity={(item: any, index: any) =>
													this.ResetQuantity(key, item, index)
												}
												saveComputerComponent={this.state.saveComputerComponent}
												DeleteProduct={(item: any) =>
													this.DeleteProduct(item, key)
												}
												AddUserOption={() => this.AddUserOption()}
											/>
										);
									}
								)}
							</div>
							<div className="css-ecwrjd">
								<div className="css-1rt0dw9">
									<div className="css-1pq650a">
										<div className="card-body css-0">
											<div className="css-1hppjzv">
												Chi phí dự tính:
											<div className="css-rctmk5">
													<div className="css-nel2x3">
														<span className="css-wgeuy1">
															{this.state.totalPrice}
															<span className="css-1ul6wk9">đ</span>
														</span>
													</div>
												</div>
											</div>
											<Link to="/cart">
												<button className="css-1pzezh5">
													Mua ngay
											</button></Link>
											<button className="css-no0qj7">
												<span className="css-1ezgv1" onClick={() => { this.AddUserOption(); }}>Thêm vào giỏ hàng</span>
											</button>
										</div>
									</div>
									{/* <div className="css-i2235u">
                        <div className="card-body css-0"><a target="_blank" href="https://www.messenger.com/t/phongvuvietnam" className="css-587jha"><button className="css-xioocy">Nhận tư vấn từ chuyên gia</button></a></div>
                    </div>
                    <div className="css-ls8jzy"></div> */}
									{/* <a target="_self" href="https://phongvu.vn/promo/desktop" className="css-587jha">
                        <div className="css-13xnpam">
                            <picture>
                                <source srcSet="https://lh3.googleusercontent.com/D0aiGWYu70GoatYafMk0Rqr95IDyrpvFeLRNezzjL2OdDSVyNUW7RDEiPXOcPMpD9DiF8wzIYC9kuQXip-c=rw" type="image/webp">
                                <source srcSet="https://lh3.googleusercontent.com/D0aiGWYu70GoatYafMk0Rqr95IDyrpvFeLRNezzjL2OdDSVyNUW7RDEiPXOcPMpD9DiF8wzIYC9kuQXip-c" type="image/png">
                                <img className="lazyload css-1nd42wv" alt="" data-src="https://lh3.googleusercontent.com/D0aiGWYu70GoatYafMk0Rqr95IDyrpvFeLRNezzjL2OdDSVyNUW7RDEiPXOcPMpD9DiF8wzIYC9kuQXip-c=rw" src="https://lh3.googleusercontent.com/D0aiGWYu70GoatYafMk0Rqr95IDyrpvFeLRNezzjL2OdDSVyNUW7RDEiPXOcPMpD9DiF8wzIYC9kuQXip-c=rw" loading="lazy">
                            </picture>
                        </div>
                    </a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
