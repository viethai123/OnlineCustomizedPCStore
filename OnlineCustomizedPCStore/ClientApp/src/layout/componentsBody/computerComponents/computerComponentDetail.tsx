import * as React from "react";
import { Component } from "react";

export default class ComputerComponentDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="css-oy8cxd">
        <div className="card-body css-0">
          <div className="css-1sbsckd">
            <div className="css-16u6ie8">
              <div className="css-g73s75">
                <picture>
                  <source
                    srcSet={this.props.item.url}
                    type="image/webp"
                  ></source>
                  <source
                    srcSet={this.props.item.url}
                    type="image/png"
                  ></source>
                  <img
                    className="lazyload css-jdz5ak"
                    alt=""
                    data-src={this.props.item.url}
                    src={this.props.item.url}
                    loading="lazy"
                  ></img>
                </picture>
              </div>
            </div>
            <div className="css-1680iyu">
              <div>
                <a
                  href="/bo-vi-xu-ly-cpu-intel-core-i79700-12m-cache-up-to-47ghz-s190900303.html"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="css-587jha"
                >
                  <div className="css-1vrkwu6">
                    {this.props.item.name}
                  </div>
                </a>
                <span className="css-k5lh0a">SKU: {this.props.item.sku}</span>
              </div>
            </div>
            <div className="css-114vf0c">
              <div className="css-iarkvp">
                <div className="css-nel2x3">
                  <span className="css-wgeuy1">
                    {this.props.item.price}
                    <span className="css-1ul6wk9">đ</span>
                  </span>
                  <div className="css-1vptl7o">
                    <span className="css-1lypflo">
                      9.190.000
                      <span className="css-1ul6wk9">đ</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-16u6ie8">
              <button className="css-7ivzg6" onClick={() => {this.props.handleChangeStatus(); this.props.ShowPopup();  this.props.ResetQuantity(); this.props.TotalPrice();}}>Chọn</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
