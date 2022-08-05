import React, { Component } from 'react'
import Tabs from './tabs';

class FilledTabs extends Component {
    state = { 
        inputs: [
            {"id":1, "value": "$221.1M", "text": "Total Liqudity Raised"},
            {"id":2, "value": "11604", "text": "Total Projects"},
            {"id":3, "value": "1.2M", "text": "Total Participants"},
            {"id":4, "value": "$223.9M", "text": "Total Values Locked"}
        ]
     } 
    render() { 
        return (
            <div className='wrapper row justify-content-center align-items-center gap'>
                
                    {this.state.inputs.map((e) =>{
                        return(
                            <Tabs
                            key={e.id} 
                            inputs={e}
                            />
                        )
                    })}
            </div>
            
        );
    }
}
 
export default FilledTabs ;