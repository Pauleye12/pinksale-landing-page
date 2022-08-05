import React, { Component } from 'react'

class Header extends Component {
    constructor(props){
        super(props)

    }
    render() { 
        return (
            <div className='header'>
                <nav className="navbar fixed-top shadow-sm">
                    <div className="container-fluid">
                        <div className='header-left d-flex align-items-center header gap '>
                            <button className="navbar-toggler d-flex justify-content-center align-item-center m-0 p-0" onClick={this.props.onToggle} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className='header-logo-link d-flex justify-content-center align-items-center'>
                                <img src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png" alt="" className='header-logo ' />
                                <span className='display-none pinksale'>PinkSale</span>
                            </a>
                        </div>
                            
                        

                        <div className='d-flex header-right'>
                            <button className='header-options-btn btn border rounded-pill fw-bold pink-bg'>
                                <i className="uil uil-plus plus-sign"></i>
                                <span className='display-none'>Create</span>
                            </button>
                            <button className='header-options-btn btn border rounded-pill'>
                                <img src="https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png" className='select-network-img' alt="" />
                                <span className='display-none black-text fw-bold'>BSC MAINNET</span>
                            </button>
                            <button className='btn btn-connect fw-bold rounded-4'>Connect</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Header;