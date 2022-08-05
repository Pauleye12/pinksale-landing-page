import React, { Component } from 'react';
import FilledCards from './FilledCards';
import FilledPinkCards from './FilledPinkCards';
import FilledTabs from './filledTabs';


class Introduction extends Component {
    render() { 
        return (
            <div className='marginTop'>
                <h1>
                    The Launchpad Protocol for Everyone!
                </h1>
                <div className='protocol-text d-flex'>
                        <p className='text-center'>
                            PinkSale helps everyone to create their own tokens and token sales in few seconds. 
                        </p>
                        <p className='text-center'>
                        Tokens created on pinksale will be verified and published on explorer websites
                        </p>
                   
                </div>
               

                <div className='center-btns'>
                    <button className="btn btn-create-now fw-bold rounded-4 me-3">Create Now</button>
                    <button className="btn btn-learn-more fw-bold rounded-4 ms-3">Learn more</button>
                </div>

                <FilledTabs/>

                <div className='token-sales'>
                    <h1>
                        A Suite of Tools for Token Sales.
                    </h1>
                    <p className='token-sales-text'>
                    A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!
                    </p>
                </div>

                <FilledCards/>

                <div className='growing-protocol'>
                    <h1>
                    A Growing Protocol Ecosystem.
                    </h1>
                    <p className='token-sales-text'>
                    We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!
                    </p>

                    <FilledPinkCards/>
                </div>

                <div className='disclaime-wrapper'>
                    <div className='disclaimer'>
                    Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Introduction;