import React, { Component } from 'react';
import "./Workspaces.css";
import { GoKebabHorizontal } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import MenuContainer from "../MenuContainer/MenuContainer";

class Workspaces extends Component {
    render() {
        return (
            <div className="workspace">
                <div className="workspace-title">
                    <span style={{ flex: 1, color: 'blue' }}>Workspaces</span>
                    <GoKebabHorizontal style={{ flex: 0.2 }} size={19} />
                </div>
                <div className="search-boards">
                    <FiSearch size="15" />
                    <input style={{ border: 'none', marginLeft: '3px' }} type="search" placeholder="Filter boards..." />
                </div>
                <div style={{flex: 1}}>
                    <MenuContainer />
                </div>
                <div className="dashboardContainer">
                    <span>Dashboards</span>
                </div>
                <div>
                    <div style={{border: "1px solid black", padding: "8px", display: 'flex', alignItems: 'center', justifyContent: "space-around", margin: "8px", borderRadius: "10px"}}>
                        <span>Get the mobile app</span>
                        <FaGooglePlay size="16" />
                        <FaApple size="19" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Workspaces
