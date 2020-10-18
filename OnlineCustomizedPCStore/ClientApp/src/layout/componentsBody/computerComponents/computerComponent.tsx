import React, { Component } from "react";
import ComputerComponentDetail from "./computerComponentDetail";

export default class ComputerComponent extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			search: "",
			filterProducts: []
		};
	}
	chooseComputerCoponent = (id: any) => {
		console.log(id);
		var filterItems = this.props.computerComponentDetailData.filter((i: any) => i.type === id);
		var filterProducts = this.state.filterProducts;
		filterProducts = filterItems;
		this.setState({ filterProducts });
		console.log(filterItems);
		console.log(filterProducts);
	}
	updateSearch(event: any) {
		this.setState({ search: event.target.value.substr(0, 50) });
	}

	ShowPopup = () => {
		let isShowPopup = this.state.isShowPopup;
		isShowPopup = !this.state.isShowPopup;
		this.setState({ isShowPopup });
	};

	render() {
		let filterProducts = this.state.filterProducts.filter(
			(product: any) => {
				return (product.name.toLowerCase()).indexOf(
					this.state.search.toLowerCase()) !== -1 || (product.name.toLowerCase()).indexOf(
						this.state.search.toLowerCase()) !== -1;
			}
		);
		const item = this.props.item;
		const saveComputerComponent = this.props.saveComputerComponent[item.id - 1];
		console.log("CC");
		console.log(saveComputerComponent);
		console.log("item");
		console.log(item);
		return (
			<div className="css-j0x69t">
				<div className="card-body css-0">
					<div className="css-1sbsckd">
						<div className="css-16u6ie8">
							<div className="css-x23u6">{item.name}</div>
						</div>
						<div className="css-16u6ie8">
							<div className="css-g73s75">
								{this.props.item.status ? (
									<picture>
										<source
											srcSet={
												saveComputerComponent.product
													? saveComputerComponent.product.url
													: "Error!"
											}
											type="image/webp"
										></source>
										<source
											srcSet={
												saveComputerComponent.product
													? saveComputerComponent.product.name
													: "Error!"
											}
											type="image/png"
										></source>
										<img
											className="lazyload css-jdz5ak"
											alt=""
											data-src={
												saveComputerComponent.product
													? saveComputerComponent.product.name
													: "Error!"
											}
											src={
												saveComputerComponent.product
													? saveComputerComponent.product.name
													: "Error!"
											}
											loading="lazy"
										></img>
									</picture>
								) : (
										<img
											className="css-jdz5ak ls-is-cached lazyloaded"
											alt=""
											data-src={item.icon}
											src={item.icon}
										></img>
									)}
							</div>
						</div>
						<div className="css-1680iyu">
							{this.props.item.status ? (
								<div>
									<a
										href="/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html"
										rel="noreferrer noopener"
										target="_blank"
										className="css-587jha"
									>
										<div className="css-1vrkwu6">
											{saveComputerComponent.product
												? saveComputerComponent.product.name
												: "Error!"}
										</div>
									</a>
									<span className="css-k5lh0a">
										SKU:{" "}
										{saveComputerComponent.product
											? saveComputerComponent.product.sku
											: "Error!"}
									</span>
								</div>
							) : (
									<div>Vui lòng chọn linh kiện</div>
								)}
						</div>
						{this.props.item.status ? (
							<div className="css-114vf0c">
								<div className="css-mx5oai">
									<button
										className="css-1775qfl"
										onClick={() => {
											this.props.DecreaseQuantity(
												saveComputerComponent.product
													? saveComputerComponent.product.name
													: 0
											);
											this.props.DeleteProduct(item);
										}}
									>
										<span
											// size="16"
											color="#1435c3"
											className="css-1hoeh5r"
										>
											-
                    </span>
									</button>
									<div className="css-1hqugw1">
										{saveComputerComponent.product
											? saveComputerComponent.product.quantity
											: "Error!"}
									</div>
									<button
										className="css-1775qfl"
										onClick={() => {
											this.props.IncreaseQuantity(
												saveComputerComponent.product
													? saveComputerComponent.product.name
													: 0
											);
										}}
									>
										<span className="css-139qrut">+</span>
									</button>
								</div>
							</div>
						) : (
								""
							)}
						{this.props.item.status ? (
							<div className="css-114vf0c">
								<div className="css-iarkvp">
									<div className="css-nel2x3">
										<span className="css-wgeuy1">
											{saveComputerComponent.product
												? saveComputerComponent.product.price
												: "Error!"}
											<span className="css-1ul6wk9">đ</span>
										</span>
										<div className="css-1vptl7o">
											<span className="css-1lypflo">
												9.190.000<span className="css-1ul6wk9">đ</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						) : (
								""
							)}
						<div className="css-16u6ie8">
							<button
								id="chooseComputerComponent"
								className="css-7ivzg6"
								onClick={() => { this.ShowPopup(); this.chooseComputerCoponent(this.props.item.id) }}
							>
								{this.props.item.status ? "Sửa" : "Chọn"}
							</button>
							{this.state.isShowPopup ? (
								<div id="computerComponentContent" className="screen-blur">
									<div className="css-1272naz"></div>
									<div className="css-odqcbb">
										<div className="css-u7sw6j">
											<div className="card-body css-0">
												<div className="css-1ce6rfj">
													<div color="#333" className="css-dcbhpa">
														<div className="css-1oycjaj">
															<div color="#333" className="css-wsluue"></div>
															<div color="#333" className="title css-akoccx">
																Bộ lọc
															</div>
														</div>
														<button
															className="close-popup"
															onClick={() => this.ShowPopup()}
														>
															x
														</button>
														<div className="css-bair20"></div>
													</div>
													<div className="css-1509jdm">
														<div className="css-2sxgp5">
															<div className="dropdown css-7q5kcq">
																<button
																	type="button"
																	className="btn dropdown-toggle css-1v2pmh6"
																	data-toggle="dropdown"
																>
																	Button
																</button>
																<div className="dropdown-menu">
																	<div className="dropdown-item">
																		<div className="row">
																			<div className="col">
																				<ul className="list-group list-group-horizontal-sm">
																					<li className="list-group-item">
																						Cras justo odio
																					</li>
																					<li className="list-group-item">
																						Dapibus ac facilisis in
																					</li>
																					<li className="list-group-item">
																						Morbi leo risus
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="css-2sxgp5">
															<div className="dropdown css-7q5kcq">
																<button
																	type="button"
																	className="btn dropdown-toggle css-1v2pmh6"
																	data-toggle="dropdown"
																>
																	Button
																</button>
																<div className="dropdown-menu">
																	<div className="dropdown-item">
																		<div className="row">
																			<div className="col">
																				<ul className="list-group list-group-horizontal-sm">
																					<li className="list-group-item">
																						Cras justo odio
																					</li>
																					<li className="list-group-item">
																						Dapibus ac facilisis in
																					</li>
																					<li className="list-group-item">
																						Morbi leo risus
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="css-2sxgp5">
															<div className="dropdown css-7q5kcq">
																<button
																	type="button"
																	className="btn dropdown-toggle css-1v2pmh6"
																	data-toggle="dropdown"
																>
																	Button
																</button>
																<div className="dropdown-menu">
																	<div className="dropdown-item">
																		<div className="row">
																			<div className="col">
																				<ul className="list-group list-group-horizontal-sm">
																					<li className="list-group-item">
																						Cras justo odio
																					</li>
																					<li className="list-group-item">
																						Dapibus ac facilisis in
																					</li>
																					<li className="list-group-item">
																						Morbi leo risus
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="css-2sxgp5">
															<div className="dropdown css-7q5kcq">
																<button
																	type="button"
																	className="btn dropdown-toggle css-1v2pmh6"
																	data-toggle="dropdown"
																>
																	Button
																</button>
																<div className="dropdown-menu">
																	<div className="dropdown-item">
																		<div className="row">
																			<div className="col">
																				<ul className="list-group list-group-horizontal-sm">
																					<li className="list-group-item">
																						Cras justo odio
																					</li>
																					<li className="list-group-item">
																						Dapibus ac facilisis in
																					</li>
																					<li className="list-group-item">
																						Morbi leo risus
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="css-101xial">
														<div className="css-jusw15">Sắp xếp theo</div>
														<div className="css-1xy69fm">
															<div className="css-mau3c4"> </div>
															<span className="css-f2ehsn">Nổi bật nhất</span>
														</div>
														<div className="css-1xy69fm">
															<div className="css-mau3c4"> </div>
															<span className="css-f2ehsn">Giá tăng dần</span>
														</div>
														<div className="css-1xy69fm">
															<div className="css-mau3c4"> </div>
															<span className="css-f2ehsn">Giá giảm dần</span>
														</div>
														<input
															placeholder="Tìm linh kiện"
															className="css-p6sluc"
															value={this.state.search}
															onChange={this.updateSearch.bind(this)}
														></input>
													</div>
												</div>
												<div
													//  height="22.725"
													className="css-1mhyi09"
												>
													{filterProducts.map(
														(item: any, index: any) => {
															return (
																<ComputerComponentDetail
																	key={index}
																	item={item}
																	handleChangeStatus={() =>
																		this.props.handleChangeStatus(item)
																	}
																	ShowPopup={() => this.ShowPopup()}
																	TotalPrice={() =>
																		this.props.TotalPrice(item, index)
																	}
																	ResetQuantity={() =>
																		this.props.ResetQuantity(item, index)
																	}
																/>
															);
														}
													)}
												</div>
												<div className="css-19zm62v">
													<nav>
														<ul className="css-19x39nn">
															<li
																// disabled=""
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="nextPage"
																className="css-4utbjj"
															>
																<button className="css-9lxisd">
																	<span
																		// size="12"
																		className="css-1szbwkf"
																	></span>
																</button>
															</li>
															<li
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="gotoPage"
																data-content-target="1"
																className="css-13f2byv"
															>
																<button className="css-g0s58m">1</button>
															</li>
															<li
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="gotoPage"
																data-content-target="2"
																className="css-15il98n"
															>
																<button className="css-1gx9tfy">2</button>
															</li>
															<li
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="gotoPage"
																data-content-target="3"
																className="css-15il98n"
															>
																<button className="css-1gx9tfy">3</button>
															</li>
															<li
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="gotoPage"
																data-content-target="4"
																className="css-15il98n"
															>
																<button className="css-1gx9tfy">4</button>
															</li>
															<li
																data-track-content="true"
																data-content-region-name="paging"
																data-content-name="nextPage"
																className="css-1k2r91"
															>
																<button className="css-9lxisd">
																	<span
																		// size="12"
																		className="css-94s669"
																	></span>
																</button>
															</li>
														</ul>
													</nav>
												</div>
											</div>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
