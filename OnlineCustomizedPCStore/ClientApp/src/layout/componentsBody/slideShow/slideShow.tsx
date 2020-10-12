import * as React from "react";
import { Component } from "react";
import ImageSlideShow from "./imageSlideShow";
import NodeSlideShow from "./nodeSlideShow";
import ArrowSlideShow from "./arrowSlideShow";

export default class SlideShow extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {this.props.imageSlideShowData.map((image: any, index: number) => {
              return <NodeSlideShow key={index} image={image} />;
            })}
          </ol>
          <div className="carousel-inner">
            {this.props.imageSlideShowData.map((image: any, index: number) => {
              return <ImageSlideShow key={index} image={image} />;
            })}
          </div>
          <ArrowSlideShow />
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        ></div>
      </div>
    );
  }
}
