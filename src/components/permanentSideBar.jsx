import React, { Component } from "react";

class PermanentSideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="side-bar-items">
        <div className="full-height">
          <a href="" className="side-bar-link">
            <div className=" side-bar-items-content d-flex justify-content-start align-items-center">
              {this.props.content.logo}
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default PermanentSideBar;
