import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import BuildComponent from "./BuildComponent";

class CompletedBuild extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			CompletedBuilds: [],
			CompletedBuild: {
				ProcessorSku: "",
				MainboarSku: "",
				RAMSku: "",
				HDDSku: "",
				SSDSku: "",
				VGASku: "",
				SourceSku: "",
				CaseSku: "",
				RadiatorsSku: "",
				ScreenSku: "",
				KeyboardSku: "",
				MouseSku: "",
				HeadphoneSku: "",
				SpeakersSku: ""
			}
		};
	}

	async componentDidMount() {
		debugger
		await fetch('api/CompletedBuild/ListOfCompletedBuild')
			.then(response => response.json())
			.then(data => {
				this.setState({
					CompletedBuilds: data,
				});
				console.log(this.state.CompletedBuilds)
			});
	}

	ChooseCompletedBuild = (item: any) => {
		debugger
		var CompletedBuild = this.state.CompletedBuild;
		CompletedBuild.ProcessorSku = item.processorSku;
		CompletedBuild.MainboarSku = item.mainboarSku;
		CompletedBuild.RAMSku = item.ramSku;
		CompletedBuild.HDDSku = item.hddSku;
		CompletedBuild.SSDSku = item.ssdSku;
		CompletedBuild.VGASku = item.vgaSku;
		CompletedBuild.SourceSku = item.sourceSku;
		CompletedBuild.CaseSku = item.caseSku;
		CompletedBuild.RadiatorsSku = item.radiatorsSku;
		CompletedBuild.ScreenSku = item.screenSku;
		CompletedBuild.KeyboardSku = item.keyboardSku;
		CompletedBuild.MouseSku = item.mouseSku;
		CompletedBuild.HeadphoneSku = item.headphoneSku;
		CompletedBuild.SpeakersSku = item.speakersSku;
		this.setState({ CompletedBuild });
		console.log(CompletedBuild)
	}

	async UpdateOptionUser() {
		debugger
		var UserId = 1;
		var CompletedBuild = this.state.CompletedBuild;
		var message = 0;
		await axios({
			method: 'put',
			url: 'api/ComputerComponent/UpdateUserOption',
			params: {
				ProcessorSku: CompletedBuild.ProcessorSku,
				MainboarSku: CompletedBuild.MainboarSku,
				RAMSku: CompletedBuild.RAMSku,
				HDDSku: CompletedBuild.HDDSku,
				SSDSku: CompletedBuild.SSDSku,
				VGASku: CompletedBuild.VGASku,
				SourceSku: CompletedBuild.SourceSku,
				CaseSku: CompletedBuild.CaseSku,
				RadiatorsSku: CompletedBuild.RadiatorsSku,
				ScreenSku: CompletedBuild.ScreenSku,
				KeyboardSku: CompletedBuild.KeyboardSku,
				MouseSku: CompletedBuild.MouseSku,
				HeadphoneSku: CompletedBuild.HeadphoneSku,
				SpeakersSku: CompletedBuild.SpeakersSku,

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
				UserId: 1
			}
		});
		await axios({
			method: 'post',
			url: 'api/Quantity/AddCompletedBuildOption',
			params: {
				ProcessorSku: CompletedBuild.ProcessorSku,
				MainboarSku: CompletedBuild.MainboarSku,
				RAMSku: CompletedBuild.RAMSku,
				HDDSku: CompletedBuild.HDDSku,
				SSDSku: CompletedBuild.SSDSku,
				VGASku: CompletedBuild.VGASku,
				SourceSku: CompletedBuild.SourceSku,
				CaseSku: CompletedBuild.CaseSku,
				RadiatorsSku: CompletedBuild.RadiatorsSku,
				ScreenSku: CompletedBuild.ScreenSku,
				KeyboardSku: CompletedBuild.KeyboardSku,
				MouseSku: CompletedBuild.MouseSku,
				HeadphoneSku: CompletedBuild.HeadphoneSku,
				SpeakersSku: CompletedBuild.SpeakersSku,

				Quantity: 1,
				UserId: UserId
			}
		})
			.then(function (response) {
				console.log(response);
				message = response.data;
			});
	}

	render() {
		return (
			<section className="main-wrapper xs-col-12">
				<div className="wrapper wrapper__pageTitle">
					<section className="xs-col-11 lg-col-9 xl-col-8 xs-mx-auto">
						<h1 className="pageTitle">Completed Builds</h1>
					</section>
				</div>
				<div className="wrapper wrapper__pageContent ">
					<section className="xs-col-11 xs-mx-auto">
						<div className="wrapper--columns clearfix">
							<div className="main-content">
								<div className="block">
									<section id="module-subTitle">
										<div className="subTitle">
											<div className="subTitle__header xs-col-12">
												<h2>Completed Builds</h2>
											</div>
											<div className="subTitle__form">
												<form>
													<label className="form-label xs-inline">Sort by</label>
													<select className="select xs-inline" id="userbuild_sort">
														<option value="recent">Date Posted (Newest)</option>
														<option value="-recent">Date Posted (Oldest)</option>
														<option value="rating">Highest Rated</option>
														<option value="price">Highest Price</option>
													</select>
												</form>
												<form>
													<label className="form-label xs-inline"><svg className="icon shape-search"><use xlinkHref="#shape-search" /></svg></label>
													<input type="text" className="text-input inactive_search" placeholder="Builds" id="userbuild_search" />
												</form>
											</div>
										</div>
									</section>
									<ul id="userbuild_list" className="logGrid list-unstyled">
										{this.state.CompletedBuilds.map((item: any, key: any) => {
											return (
												<BuildComponent
													key={key}
													item={item}
													ChooseCompletedBuild={() => this.ChooseCompletedBuild(item)}
													UpdateOptionUser={() => this.UpdateOptionUser()}
												/>
											)
										})}
									</ul>
								</div>
								<div className="block" id="page_button_row_bot">
									{/* Pagination Module */}
									<section id="module-pagination">
										<ul className="pagination list-unstyled xs-text-center">
											<li><a href="?page=1" className="pagination--current">1</a></li>
											<li><a href="?page=2">2</a></li>
											<li><a href="?page=3">3</a></li>
										</ul>
									</section>
									{/* End Pagination Module */}
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		);
	}
}

export default CompletedBuild;
