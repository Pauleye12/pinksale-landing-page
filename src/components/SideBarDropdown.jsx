import React, { Component } from "react";

class SideBarDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  render() {
    return (
      <div className="side-bar-items ">
        <div
          className="side-bar-link"
          onClick={() => {
            this.setState({ dropdownOpen: !this.state.dropdownOpen });
          }}
        >
          <div className=" side-bar-items-content d-flex justify-content-start align-items-center">
            {this.props.content.logo}
            <div className="side-bar-text d-flex justify-content-between align-items-center">
              <div>{this.props.content.label}</div>
              <i class="uil uil-angle-down dropdown"></i>
            </div>
          </div>
        </div>
        <div
          className={`height-toggle ${
            this.state.dropdownOpen ? "height-toggle-open" : ""
          }`}
        >
          {this.props.content.dropdown.map((e, index) => {
            return (
              <a key={index} href="">
                {e}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideBarDropdown;
