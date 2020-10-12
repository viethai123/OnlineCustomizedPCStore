import * as React from "react";
import { Component } from "react";

export default class NodeSlideShow extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={this.props.image.id - 1}
        className={this.props.image.isActive ? "active" : ""}
      ></li>
    );
  }
}
