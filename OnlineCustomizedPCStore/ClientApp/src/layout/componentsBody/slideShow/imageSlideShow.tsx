import * as React from "react";
import { Component } from "react";

export default class ImageSlideShow extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={
          this.props.image.isActive ? "carousel-item active" : "carousel-item"
        }
      >
        <img
          className="d-block w-100"
          src={this.props.image.imageURL}
          alt={this.props.image.alt}
        ></img>
      </div>
    );
  }
}
