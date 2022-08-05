import React, { Component } from 'react'

class PinkCards extends Component {
    constructor(props){
        super(props)
    } 
    render() { 
        return (
            <div className='bg-white rounded width shadow col-sm-5 col-lg-3 '>
                <img className='card-img' src={this.props.data.image} alt="" />
                <div className='card-text'>
                    <h3>{this.props.data.header}</h3>
                    <p> {this.props.data.content}</p>
                </div>
            </div>
        );
    }
}
 
export default PinkCards;