import React, { Component } from 'react'
import Header from './header'
import SideBar from './side-bar'

class ToggleState extends Component {

        state = { 
            isSideBarOpen: false
         } 
    
    render() { 
        return (
            <div>
                <Header
                onToggle={this.toggler}/>
                <SideBar  isSideBarOpen={this.state.isSideBarOpen}/>
            </div>
        );
    }

    toggler = () =>this.setState({isSideBarOpen:!this.state.isSideBarOpen})

}
 
export default ToggleState;