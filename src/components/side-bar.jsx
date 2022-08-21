import React, { Component } from "react";
import SideBarComponent from "./SideBarComponents";
import SideBarDropdown from "./SideBarDropdown";
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
import PermanentSideBar from "./permanentSideBar";

class SideBar extends Component {
  state = {
    // you can then remove the id
    //Alright then
    content: [
      { id: 1, logo: <Home />, label: "Home" },
      { id: 2, logo: <Launchpad />, label: "Launchpads", dropdown: [ "Create launchpad", "Create fair launch", "Create dutch auction", "Create subscription pool", "Create token", "Launchpad list"] },
      { id: 3, logo: <PrivateSale />, label: "Private Sale", dropdown: ["Create Private sale","Private Sale Lst"] },
      { id: 4, logo: <PinkLock />, label: "PinkLock", dropdown: ["Create lock", "Token","Liquidity"] },
      { id: 5, logo: <AirDrop />, label: "Airdrop", dropdown: ["Create Airdrop", "Airdrop List"] },
      { id: 6, logo: <LeaderBoard />, label: "Leaderboard" },
      { id: 7, logo: <AntiBot />, label: "Anti-Bot" },
      { id: 8, logo: <MultiSender />, label: "Multi-Sender" },
      { id: 9, logo: <PoolsAlert />, label: "Pools Alert" },
      { id: 10, logo: <KycAudit />, label: "KYC & Audit" },
      { id: 11, logo: <Docs />, label: "Docs" },
      { id: 12, logo: <Telegram />, label: "Telegram" },
      { id: 13, logo: <Twitter />, label: "Twitter" },
    ],
  };

  //  for list items that dont change thier order
  // like this nav links
  // you can use thier index in the array as ID
  // instaed of typing ID
  // you can commet also to reply, ill
  // oh okk

  // im going to write inline style here
  // you can add the classes in css
  // if it is to hide the side bar i already did that sha
  // without state?
  //no, just the css styles
  // soft, noned for inline styles
  // let me show you?? sure boss
  // no vex oo, i just dey experiment
  // no wahala boss,na
  // ee don tey wey i write class based stuff lmao

  render() {
    return (
      <div>
        <div className={`side-bar ${
          this.props.isSideBarOpen ? "side-bar-close" : ""
        } `}
      >
        <div className="content">
          <div className="side-bar-top">
            {this.state.content.map((e, index) => {
              if ("dropdown" in e) {
                return <SideBarDropdown key={index} content={e} />;
              } else {
                return <SideBarComponent key={index} content={e} />;
              }
            })}
          </div>

          <div className="side-bar-bottom">
            <div className="side-bar-bottom-content">
              <div className="top-row d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    className="side-bar-bottom-img"
                    src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png"
                    alt=""
                  />
                  <a href="" className="pinksale-link">
                    PINKSALE
                  </a>
                </div>
                <div className="price">$228.53</div>
              </div>
              <div className="bottom-row d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <img
                    className="side-bar-bottom-img"
                    src="../src/assets/download.png"
                    alt=""
                  />
                  <span>English</span>
                </div>
                <div>
                  <Daylight/>
                  <Stroke/>
                  <Moonlight/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
