import * as React from "react";
import { Component } from "react";

class BuildComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
	render() {
		var item = this.props.item;
		console.log(item);
		var ImageProduct = item.imageProduct;
        return (
			<li className="logGroup logGroup__card" onClick={() => {this.props.ChooseCompletedBuild(); this.props.UpdateOptionUser();}}>
				<a href="/home" className="logGroup__target" />
				<div className="logGroup__content--wrapper1">
					<p className="log__author"><a href="#" className="userAvatar"><img src={item.avatar} /></a><a href="#">{item.name}</a></p>
					<a href="/home" className="log__image" style={{ backgroundImage: `url(${ImageProduct})`}} />
					<h1 className="log__title"><a href="/home">{item.title}</a></h1>
					<ul className="log__keyProducts list-unstyled">
						<li className="build__specs">{item.processorSku}</li>
						<li className="build__specs">{item.vgaSku}</li>
					</ul>
				</div>
				<div className="logGroup__content--wrapper2">
					<div className="log__numbers">
						<p className="log__price">$1638.88+</p>
						<p className="log__links">
							<span className="log__link--followers">
								<svg className="icon shape-arrow-up"><use xlinkHref="#shape-arrow-up" /></svg>3
                            </span>
							<span className="log__link--comments">
								<svg className="icon shape-comment"><use xlinkHref="#shape-comment" /></svg>3
                            </span>
						</p>
					</div>
				</div>
			</li>
        );
    }
}

export default BuildComponent;
