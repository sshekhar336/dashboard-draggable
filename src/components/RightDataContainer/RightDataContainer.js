import React, { Component } from 'react';
import "./RightDataContainer.css";
import Workspaces from '../Workspaces/Workspaces';
import BoardHeader from '../BoardHeader/BoardHeader';
import ThingsToDo from '../ThingsToDo/ThingsToDo';
import DoneList from '../DoneList/DoneList';

class RightDataContainer extends Component {
    render() {
        return (
            <div className="rightContainer">
                <div className="workspaceContainer">
                    <Workspaces />
                </div>

                <div className="dataContainer">
                    <BoardHeader />
                    <div style={{minHeight: "55vh"}}>
                        <ThingsToDo />
                    </div>
                    <div>
                        <DoneList />
                    </div>



                </div>
            </div>
        )
    }
}

export default RightDataContainer
