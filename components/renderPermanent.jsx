import React, { Component } from 'react'

import { ReactComponent as Home } from "../src/assets/Home.svg";
import { ReactComponent as Launchpad } from "../src/assets/Launchpad.svg";
import { ReactComponent as PrivateSale } from "../src/assets/privateSale.svg";
import { ReactComponent as PinkLock } from "../src/assets/pinkLock.svg";
import { ReactComponent as AirDrop } from "../src/assets/airDrop.svg";
import { ReactComponent as LeaderBoard } from "../src/assets/leaderBoard.svg";
import { ReactComponent as AntiBot } from "../src/assets/antiBot.svg";
import { ReactComponent as MultiSender } from "../src/assets/multiSender.svg";
import { ReactComponent as PoolsAlert } from "../src/assets/poolsAlert.svg";
import { ReactComponent as KycAudit } from "../src/assets/kycAudit.svg";
import { ReactComponent as Docs } from "../src/assets/docs.svg";
import { ReactComponent as Telegram } from "../src/assets/telegram.svg";
import { ReactComponent as Twitter } from "../src/assets/twitter.svg";
import { ReactComponent as Daylight } from "../src/assets/daylight.svg";
import { ReactComponent as Stroke } from "../src/assets/stroke.svg";
import { ReactComponent as Moonlight } from "../src/assets/moonlight.svg";
import PermanentSideBar from './permanentSideBar';

class RenderPermanent extends Component {
    state = { 
        content: [
            { logo: <Home />},
            { logo: <Launchpad />},
            { logo: <PrivateSale />},
            { logo: <PinkLock />},
            { logo: <AirDrop />},
            { logo: <LeaderBoard />},
            { logo: <AntiBot />},
            { logo: <MultiSender /> },
            { logo: <PoolsAlert />},
            { logo: <KycAudit />},
            { logo: <Docs />},
            { logo: <Telegram />},
            { logo: <Twitter />},
          ],
     } 
    render() { 
        return (
            <div className='permanent permanent-hide'>
                <div className="top-permanent side-bar-top">
                    {this.state.content.map((e, index)=>{
                    return <PermanentSideBar
                    key={index}
                    content={e}/>
                    })}
                </div>
              
               <div className='bottom-permanent'>
               <div>
                  <Daylight/>
                  <Stroke/>
                  <Moonlight/>
                </div>
               </div>
            </div>
        );
    }
}
 
export default RenderPermanent;