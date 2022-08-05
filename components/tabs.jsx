import React, { Component } from 'react'

class Tabs extends Component {
    
    render() { 
        return (
            <div className=' col-sm-5 col-lg-2 rounded bg-white shadow padding-tabs '>
                <div>
                    <p className='value'>{this.props.inputs.value}</p>
                    <p className='text'>{this.props.inputs.text}</p>
                </div>
                
            </div>
        );
    }
}
 
export default Tabs;