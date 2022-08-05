import React, { Component } from 'react'

class Cards extends Component {
    constructor(props){
        super(props)

    }
    render() { 
        return (
            <div className='col-sm-5 col-lg-2 rounded width shadow bg-white'>
                <img className='card-img' src="https://www.pinkswap.finance/pinkmoon.png" alt="" />
                <div className='card-text'>
                    <h3>{this.props.data.title}</h3>
                    <p>{this.props.data.content}</p>
                </div>
            </div>
        );
    }
}
 
export default Cards;