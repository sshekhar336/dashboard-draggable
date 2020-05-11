import React, { Component } from 'react';
import ReactDragListView from 'react-drag-listview/lib/index.js';
// import "./ThingsToDo.css";
import { FaSortDown, FaRegUserCircle } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateTaskModal: false,
            newTaskName: '',
            thingsTodo: []
        };
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    createTasks = () => {
        this.setState({
            showCreateTaskModal: false,
            thingsTodo: [...this.state.thingsTodo, { title: this.state.newTaskName }]
        })
    }

    createTaskModal = () => {
        return (
            <Modal
                isOpen={this.state.showCreateTaskModal}
                onRequestClose={() => this.setState({ showCreateTaskModal: false })}
                style={customStyles}
            >
                <h2 style={{ padding: "10px" }}>Create a new task</h2>
                <input
                    type="text"
                    placeholder="New Task"
                    onChange={(e) => this.setState({ newTaskName: e.target.value })}
                    style={{ padding: "8px", border: "1px solid blue", width: "27vw" }}
                />
                <div className="buttons">
                    <button className="cancelButton" onClick={() => this.setState({ showCreateTaskModal: false })}>Cancel</button>
                    <button className="createBoardButton" onClick={this.createTasks}>Create Task</button>
                </div>
            </Modal>
        )
    }

    render() {
        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const { thingsTodo } = that.state;
                const item = thingsTodo.splice(fromIndex - 1, 1)[0];
                thingsTodo.splice(toIndex - 1, 0, item);
                that.setState({ thingsTodo });
                console.log(item, "  ", thingsTodo)
            },
            nodeSelector: 'tr',
            handleSelector: 'td'
        };

        return (
            <div>
                <ReactDragListView {...dragProps}>
                    <table style={{
                        paddingRight: "15px",
                        width: "100%"
                    }}>
                        <tbody>
                            <tr>
                                <td style={{ width: "2%"}}>
                                    <span style={{ backgroundColor: 'rgb(184, 173, 27)', borderRadius: '50%', margin: "0 5px" }}>
                                        <FaSortDown style={{ color: 'white' }} />
                                    </span>
                                </td>
                                <td style={{ width: "50%" }}>
                                    <span>
                                        Done
                                    </span>
                                </td>
                                <td style={{textAlign: 'center', verticalAlign: 'bottom'}}><span>Owner</span></td>
                                <td style={{textAlign: 'center', verticalAlign: 'bottom'}}><span>Status</span></td>
                                <td style={{textAlign: 'center', verticalAlign: 'bottom'}}><span>Due date</span></td>
                                <td style={{textAlign: 'center', verticalAlign: 'bottom'}}><span>Priority</span></td>
                                <td onClick={() => this.setState({ showCreateTaskModal: true })}><MdAddCircle /></td>
                            </tr>

                            {this.state.thingsTodo && this.state.thingsTodo.map((item, index) => (
                                <tr key={index} style={{ cursor: 'pointer' }}>
                                    <td></td>
                                    <td style={{ display: 'flex', backgroundColor: 'rgb(219, 213, 213)' }}>
                                        <div style={{ width: "5px", backgroundColor: 'rgb(184, 173, 27)' }}></div>
                                        <span style={{ padding: '5px 8px', flex: 1 }}>{item.title}</span>
                                        <span><FiMessageCircle size="22" style={{ color: 'rgb(117, 106, 106)', padding: "0 8px", height: "100%" }} /></span>
                                    </td>
                                    <td style={{ backgroundColor: 'rgb(219, 213, 213)', textAlign: 'center', verticalAlign: 'bottom' }}>
                                        <span>
                                            <FaRegUserCircle size="22" style={{color: "rgb(117, 106, 106)"}} />
                                        </span>
                                    </td>
                                    <td style={{ backgroundColor: '#c5bfbf',textAlign: 'center', verticalAlign: 'bottom' }}></td>
                                    <td style={{ backgroundColor: 'rgb(219, 213, 213)',textAlign: 'center', verticalAlign: 'bottom'  }}></td>
                                    <td style={{ backgroundColor: '#c5bfbf',textAlign: 'center', verticalAlign: 'bottom'  }}></td>
                                    <td></td>
                                </tr>
                            ))}

                            <tr style={{ cursor: 'pointer' }}>
                                <td></td>
                                <td style={{ display: 'flex' }}>
                                    <div style={{ width: "5px", backgroundColor: 'rgb(184, 173, 27)' }}></div>
                                    <div style={{ padding: '5px 8px', flex: 1 }} onClick={() => this.setState({ showCreateTaskModal: true })}>
                                        +Add
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>


                        </tbody>
                    </table>
                </ReactDragListView>
                {this.state.showCreateTaskModal && this.createTaskModal()}
            </div >
        );
    }
}

export default DoneList
