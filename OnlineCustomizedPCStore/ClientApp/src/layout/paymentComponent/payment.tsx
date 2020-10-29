import React, { Component } from "react";

export default class Payment extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			ComputerComponent: {
				id: 0,
				url: "",
				name: "",
				sku: "",
				quantity: 1,
				price: 0,
			},
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
					price: "11.990.000",
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
			optionComputerComponent: [],
			totalPrice: 0
		};
	}

	async componentDidMount() {
		var UserId = 1;
		debugger
		//await fetch('api/ComputerComponent/GetUserOptions?UserId=' + UserId)
		//	.then(response => response.json())
		//	.then(data => {
		//		//data.forEach((option: any) => {
		//		//	option.products = [];
		//		//});
		//		console.log(data);
		//		this.setState({
		//			optionComputerComponent: data,
		//		});
		//	});
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
	}



	ShowPopup = () => {
		let isShowPopup = this.state.isShowPopup;
		isShowPopup = !this.state.isShowPopup;
		this.setState({ isShowPopup });
	};

	ChoooseComputerComponent = (item: any) => {
		var ComputerComponent = this.state.ComputerComponent;
		ComputerComponent.id = item.id;
		ComputerComponent.url = item.url;
		ComputerComponent.name = item.name;
		ComputerComponent.sku = item.sku;
		ComputerComponent.price = item.price;
		this.setState({
			ComputerComponent,
		});
		//console.log(this.state.ComputerComponent);
	};

	render() {
		return (
			<div className="body">
				<div className="container">
					<div className="css-1c5m4ef">
						<div className="css-l6dpr4">
							{this.state.saveComputerComponent.map((item: any, index: any) => {
								return (
									<div className="css-j0x69t">
										<div className="card-body css-0">
											<div className="css-1sbsckd">
												<div className="css-16u6ie8">
													<div className="css-x23u6">{item.name}</div>
												</div>
												<div className="css-16u6ie8">
													<div className="css-g73s75">
														{
															item.product ?
																<picture>
																	<source srcSet={item.product ? item.product.url : ""} type="image/webp"></source>
																	<source srcSet={item.product ? item.product.name : ""} type="image/png"></source>
																	<img className="lazyload css-jdz5ak" alt="" data-src={item.product ? item.product.name : ""} src={item.product ? item.product.name : ""} loading="lazy"></img>
																</picture>
																:
																<img
																	className="css-jdz5ak ls-is-cached lazyloaded"
																	alt=""
																	data-src={item.icon}
																	src={item.icon}
																></img>
														}
													</div>
												</div>
												{
													item.product ?
														<>
															<div className="css-1680iyu">
																<div>
																	<a href="/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html" rel="noreferrer noopener" target="_blank" className="css-587jha">
																		<div className="css-1vrkwu6">{item.product ? item.product.name : ""}</div>
																	</a>
																	<span className="css-k5lh0a">{item.product ? item.product.sku : ""}</span>
																</div>
															</div>
															<div className="css-114vf0c">
																<div className="css-mx5oai">
																	<button className="css-1775qfl"><span color="#1435c3" className="css-1hoeh5r">x</span></button>
																	<div className="css-1hqugw1">{item.product ? item.product.quantity : ""}</div>
																	{/*<button className="css-1775qfl"><span className="css-139qrut">+</span></button>*/}
																</div>
															</div>
															<div className="css-114vf0c">
																<div className="css-iarkvp">
																	<div className="css-nel2x3">
																		<span className="css-wgeuy1">{item.product ? item.product.price : ""}<span className="css-1ul6wk9">đ</span></span>
																		<div className="css-1vptl7o"><span className="css-1lypflo">9.190.000<span className="css-1ul6wk9">đ</span></span></div>
																	</div>
																</div>
															</div>
															<div className="css-16u6ie8"><button id="chooseComputerComponent" className="css-7ivzg6">Xóa</button></div>
														</>
														:
														<div className="css-1680iyu">
															<div>Vui lòng chọn linh kiện</div>
														</div>
												}

											</div>
										</div>
									</div>
								)
							})}
						</div>
						<div className="css-8xcfft">
							<div className="css-1odjv61">
								<div className="card-header css-0">
									<h5>Thanh toán</h5>
								</div>
								<div className="card-body css-0">
									<div className="css-nouyrl">
										<table className="css-qc9cbn">
											<tbody>
												<tr>
													<td color="#848788" className="css-8ogxmh">
														Tạm tính
													</td>
													<td className="css-1xrkmkn">
														<span className="css-htm2b9">
															79.995.000 <span className="css-1angbw">đ</span>
														</span>
													</td>
												</tr>
												<tr>
													<td color="#848788" className="css-13izjcd">
														Phí vận chuyển
													</td>
													<td className="css-fsu5pb">
														<span className="css-htm2b9">
															0 <span className="css-1angbw">đ</span>
														</span>
													</td>
												</tr>
												<tr>
													<td color="#848788" className="css-13izjcd">
														Khuyến mãi
													</td>
													<td className="css-fsu5pb">
														<span className="css-htm2b9">
															4.970.000 <span className="css-1angbw">đ</span>
														</span>
													</td>
												</tr>
												<tr>
													<td color="#848788" className="css-13izjcd">
														Thành tiền
													</td>
													<td className="css-aafp0n">
														<span className="css-htm2b9">
															{this.state.totalPrice} <span className="css-1ul6wk9">đ</span>
														</span>
													</td>
												</tr>
											</tbody>
										</table>
										<div className="css-1jfkofq">(Đã bao gồm VAT)</div>
									</div>
								</div>
								<div className="card-footer css-0">
									<button className="css-epgzji">
										THANH TOÁN
									<span className="help">Bạn cần đăng nhập để tiếp tục</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
