import React, { Component } from 'react'

import { ReactComponent as Home } from "../assets/Home.svg";
import { ReactComponent as Launchpad } from "../assets/Launchpad.svg";
import { ReactComponent as PrivateSale } from "../assets/privateSale.svg";
import { ReactComponent as PinkLock } from "../assets/pinkLock.svg";
import { ReactComponent as AirDrop } from "../assets/airDrop.svg";
import { ReactComponent as LeaderBoard } from "../assets/leaderBoard.svg";
import { ReactComponent as AntiBot } from "../assets/antiBot.svg";
import { ReactComponent as MultiSender } from "../assets/multiSender.svg";
import { ReactComponent as PoolsAlert } from "../assets/poolsAlert.svg";
import { ReactComponent as KycAudit } from "../assets/kycAudit.svg";
import { ReactComponent as Docs } from "../assets/docs.svg";
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Daylight } from "../assets/daylight.svg";
import { ReactComponent as Stroke } from "../assets/stroke.svg";
import { ReactComponent as Moonlight } from "../assets/moonlight.svg";
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