import React from 'react';
import "./LeftMenuContainer.css";
import logo from "../../images/monday_logo_icon.png";
import { FiBell, FiSearch } from "react-icons/fi";
import { FaDownload, FaUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineQuestion } from "react-icons/ai"

function LeftMenuContainer() {
    return (
        <div className="leftMenu">
            <div className="topMenu">
                <div className="logo-icon icon-padding">
                    <img src={logo} alt="logo" style={{ height: "6vh", width: "3vw" }} />
                </div>
                <div className="notification-icon icon-padding">
                    <FiBell style={{ color: 'white' }} size={22} />
                </div>
                <div className="download-icon icon-padding">
                    <FaDownload style={{ color: 'white' }} size={20} />
                </div>
            </div>
            <div className="bottomMenu">
                <div className="calender-icon icon-padding">
                    <MdDateRange style={{ color: 'white' }} size={22} />
                </div>
                <div className="friend-icon icon-padding">
                    <AiOutlineUserAdd style={{ color: 'white' }} size={22} />
                </div>
                <div className="search-icon icon-padding">
                    <FiSearch style={{ color: 'white' }} size={22} />
                </div>
                <div className="question-icon icon-padding">
                    <AiOutlineQuestion style={{ color: 'white' }} size={22} />
                </div>
                <div className="user-icon icon-padding">
                    <FaUserCircle style={{ color: 'white' }} size={25} />
                </div>
            </div>
            <div className="upgrade-button">Upgrade</div>
        </div>
    )
}

export default LeftMenuContainer
