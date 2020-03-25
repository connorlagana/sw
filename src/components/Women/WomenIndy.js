import React, { Component } from "react";

class WomenIndy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  componentDidMount() {
    console.log("hello world");
    console.log(this.state);
    // this.setState({
    //   item: this.props.item
    // });
  }

  render() {
    return (
      <div className="WomenIndy">
        {/* <div>Hello World</div> */}
        {/* <img src={this.state.firstPic} /> */}
      </div>
    );
  }
}

export default WomenIndy;
