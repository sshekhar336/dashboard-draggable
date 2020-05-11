import React, { Component } from 'react';
import "./BoardHeader.css";
import zoomIcon from "../../images/zoom-icon.png";
import { FaStar, FaUserCircle, FaRobot } from "react-icons/fa";
import { RiPhoneCameraLine } from "react-icons/ri";
import { GiPlug } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { AiOutlineTable } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { connect } from 'react-redux';

class BoardHeader extends Component {
    render() {
        return (
            <div className="boardHeader">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>
                        <div className="boardTitleConatiner">
                            <h2>{this.props.currentBoardName}</h2>
                            <FaStar style={{ color: "grey", padding: "5px" }} size={20} />
                        </div>
                        <div>
                            <input tye="text" style={{ border: 'none' }} placeholder="Add board description" />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex', width: "50%", justifyContent: "space-evenly"
                    }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <FaUserCircle size="25" />
                            </div>
                            <div
                                style={{
                                    position: "relative", left: "-7px",
                                    color: "blue",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    border: "1px solid blue",
                                    height: "20px",
                                    padding: "3px"
                                }}>
                                <RiPhoneCameraLine size="16" />
                            </div>
                        </div>
                        <div style={{ border: "1px solid blue", padding: "3px 4px", borderRadius: "10px" }}>
                            <span><GiPlug size={14} style={{ transform: "rotate(270deg)" }} /></span><span> / 0 </span>
                        </div>
                        <div style={{ border: "1px solid blue", padding: "3px 4px", borderRadius: "10px" }}>
                            <span><FaRobot size={14} /></span><span> / 0 </span>
                        </div>
                        <div style={{
                            border: "1px solid blue", padding: "3px 16px", borderRadius: "10px", display: "flex",
                            alignItems: "center",
                            fontSize: "14px"
                        }}>
                            <img src={zoomIcon} style={{ height: "2.5vh", paddingRight: "3px" }} alt="zoom-icon" />
                            <span>Start zoom call</span>
                        </div>
                        <div style={{ border: "1px solid black", display: 'flex', fontSize: "14px", padding: "5px" }}>
                            <span><FiUsers size={14} /> <span>/0</span></span>
                            <div style={{ margin: "2px 5px", backgroundColor: "black", width: "1px" }}></div>
                            <span>Activities/0</span>
                        </div>
                        <div>
                            <GoKebabHorizontal />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        padding: "4px 0", alignItems: "center",
                        display: "flex", fontSize: '12px', flex: '1'
                    }}>
                        <span style={{ padding: "3px" }}><AiOutlineTable size={16} /></span>
                        <select style={{ border: 'none', outline: 'none' }}>
                            <option>Main Table</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <div style={{
                        display: 'flex', alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "50%"
                    }}>
                        <div style={{
                            padding: "4px 0", alignItems: "center",
                            display: "flex", fontSize: '12px'
                        }}>
                            <select style={{
                                borderRadius: "15px",
                                outline: "none",
                                padding: "3px 5px",
                                backgroundColor: "blue",
                                color: "white"
                            }}>
                                <option>New item</option>
                                <option>Existing item</option>
                            </select>
                        </div>
                        <div style={{
                            padding: "4px 17px", alignItems: "center",
                            display: "flex", fontSize: '12px',
                            border: "1px solid",
                            borderRadius: "15px",
                            height: "17px",
                        }}>
                            <input type="text" placeholder="Search / Filter board" style={{ border: 'none' }} />
                        </div>
                        <div>
                            <FaUserCircle size="18" />
                        </div>
                        <div>
                            <IoMdEyeOff size="18" />
                        </div>
                        <div>
                            <MdFilterList size="18" />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentBoardName: state.boardName
    }
}

export default connect(mapStateToProps, null)(BoardHeader)
