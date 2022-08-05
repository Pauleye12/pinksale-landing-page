import React, { Component } from "react";

class SideBarDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="side-bar-items ">
        <a href="" className="side-bar-link">
          <div className=" side-bar-items-content d-flex justify-content-start align-items-center">
            {this.props.content.logo}
            <div className="side-bar-text d-flex justify-content-between align-items-center">
              <div>{this.props.content.label}</div>
              <i class="uil uil-angle-down dropdown"></i>
            </div>
           
          </div>
        </a>
      </div>
    );
  }
}

export default SideBarDropdown;