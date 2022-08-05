import React, { Component } from 'react'
import PinkCards from './pinkcards';


class FilledPinkCards extends Component {
    state = { 
        data: [
            { 'id':1, 'image':'https://www.pinkswap.finance/pinkmoon.png', 'header': 'PinkMoon', 'content':'The best launchpad for professional teams.'},
            { 'id':2, 'image':'https://www.pinkswap.finance/pinksale.png', 'header': 'PinkSale', 'content':'Launch a token sale with a few clicks.'},
            { 'id':3, 'image':'https://www.pinkswap.finance/pinkswap.png', 'header': 'PinkSwap', 'content':'Swap tokens and farming $PinkS.'},
            { 'id':4, 'image':'https://www.pinkswap.finance/pinklock.png', 'header': 'PinkLock', 'content':'Locking liquidity on PinkSwap.'},
            { 'id':5, 'image':'https://www.pinkswap.finance/pinkmoon.png', 'header': 'PinkElon', 'content':'The first meme token on PinkMoon.'},
            { 'id':6, 'image':'https://www.pinkswap.finance/pinkwallet.png', 'header': 'PinkWallet', 'content':'Crypto wallet, buy, store, exchange & earn.'},
        ]
     } 
    render() { 
        return (
            <div className='row filledCards card-gap justify-content-center pink-gap'>
                {this.state.data.map((e) => {
                    return(
                        <PinkCards
                        key={e.id}
                        data={e}/>
                    )
                })}
            </div>
        );
    }
}
 
export default FilledPinkCards;