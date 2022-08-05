import React, { Component } from 'react'
import Cards from './Cards';


class FilledCards extends Component {
        state = {
            data:[
                {'id':1, 'title':'Standard', 'content':'Mint standard tokens on ETH, BSC, AVAX, Fantom, polygon.'},
                {'id':2, 'title':'Deflationary', 'content':'Generate deflationary tokens with tax and/or charity functions.'},
                {'id':3, 'title':'Customization', 'content':'Create a token sale for your own custom token easily.'},
                {'id':4, 'title':'Launchpad', 'content':'Use the token you mint to create a launchpad with just a few clicks.'},
                {'id':5, 'title':'Branding', 'content':'Adding logo, social links, description, listing on PinkSale.'},
                {'id':6, 'title':'Management', 'content':'The portal to help you easily update content for your launchpad.'},
                {'id':7, 'title':'Community', 'content':'Promote your launchpad to thousands of buyers on PinkSale.'},
                {'id':8, 'title':'Locking', 'content':'Lock your liquidity to PinkSwap, PancakeSwap after presale.'}
            ]
        }
    
    render() { 
        return (
            <div className='row justify-content-center card-gap filledCards'>
                {this.state.data.map((e) =>{
                    return(
                        <Cards
                        key={e.id}
                        data={e}
                        />
                    )
                })}
                
            </div>
        );
    }
}
 
export default FilledCards;