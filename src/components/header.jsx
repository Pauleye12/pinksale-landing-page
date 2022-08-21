import React, { Component } from 'react'

class Header extends Component {
    constructor(props){
        super(props)

    }
    render() { 
        return (
          <div className="header">
            <nav className="navbar fixed-top shadow-sm">
              <div className="container-fluid">
                <div className="header-left d-flex align-items-center header gap ">
                  <div
                    className="nav-toggler d-flex justify-content-center align-item-center m-0 p-0"
                    onClick={this.props.onToggle}
                    // type="button"
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#offcanvasNavbar"
                    // aria-controls="offcanvasNavbar"
                  >
                    <svg
                      className="navbar-toggler-icon"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  </div>
                  <a className="header-logo-link d-flex justify-content-center align-items-center">
                    <img
                      src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png"
                      alt=""
                      className="header-logo "
                    />
                    <span className="display-none pinksale">PinkSale</span>
                  </a>
                </div>

                <div className="d-flex header-right">
                  <button className="header-options-btn btn border rounded-pill fw-bold pink-bg">
                    <i className="uil uil-plus plus-sign"></i>
                    <span className="display-none">Create</span>
                  </button>
                  <button className="header-options-btn btn border rounded-pill">
                    <img
                      src="https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png"
                      className="select-network-img"
                      alt=""
                    />
                    <span className="display-none black-text fw-bold">
                      BSC MAINNET
                    </span>
                  </button>
                  <button className="btn btn-connect fw-bold rounded-4">
                    Connect
                  </button>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
 
export default Header;