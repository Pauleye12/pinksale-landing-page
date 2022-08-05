import React, { Component } from "react";
import SideBarComponent from "./SideBarComponents";
import SideBarDropdown from "./SideBarDropdown";
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
import PermanentSideBar from "./permanentSideBar";

class SideBar extends Component {
  state = {
    // you can then remove the id
    //Alright then
    content: [
      { id: 1, logo: <Home />, label: "Home" },
      { id: 2, logo: <Launchpad />, label: "Launchpads", dropdown: "" },
      { id: 3, logo: <PrivateSale />, label: "Private Sale", dropdown: "" },
      { id: 4, logo: <PinkLock />, label: "PinkLock", dropdown: "" },
      { id: 5, logo: <AirDrop />, label: "Airdrop", dropdown: "" },
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