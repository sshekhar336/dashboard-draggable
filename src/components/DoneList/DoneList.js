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

const { DragColumn } = ReactDragListView;

class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateTaskModal: false,
            newTaskName: '',
            showCreateColumnModal: false,
            newColumnName: '',
            newColumnDatatype: '',
            thingsTodo: [],
            columnLists: [
                {
                    title: "Owner",
                    icon: <FaRegUserCircle size="22" style={{ color: "rgb(117, 106, 106)" }} />,
                    backgroundColor: 'rgb(219, 213, 213)'
                },
                {
                    title: "Status",
                    icon: "",
                    backgroundColor: '#c5bfbf'
                },
                {
                    title: "Due date",
                    icon: "",
                    backgroundColor: "rgb(219, 213, 213)"
                },
                {
                    title: "Priority",
                    icon: "",
                    backgroundColor: '#c5bfbf'
                }
            ]
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

    createColumn = () => {
        this.setState({
            showCreateColumnModal: false,
            columnLists: [...this.state.columnLists, { title: this.state.newColumnName, datatype: this.state.newColumnDatatype, icon: "", backgroundColor: 'rgb(219, 213, 213)' }]
        })
    }

    createColumnModal = () => {
        return (
            <Modal
                isOpen={this.state.showCreateColumnModal}
                onRequestClose={() => this.setState({ showCreateColumnModal: false })}
                style={customStyles}
            >
                <h2 style={{ padding: "10px" }}>Create a Column</h2>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        placeholder="New Column name"
                        onChange={(e) => this.setState({ newColumnName: e.target.value })}
                        style={{ padding: "8px", border: "1px solid blue", width: "27vw" }}
                    />
                </div>
                <div style={{ padding: "10px" }}>
                    <input
                        type="text"
                        placeholder="Datatype"
                        onChange={(e) => this.setState({ newColumnDatatype: e.target.value })}
                        style={{ padding: "8px", border: "1px solid blue", width: "27vw" }}
                    />
                </div>
                <div className="buttons">
                    <button className="cancelButton" onClick={() => this.setState({ showCreateColumnModal: false })}>Cancel</button>
                    <button className="createBoardButton" onClick={this.createColumn}>Create Column</button>
                </div>
            </Modal>
        )
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
            },
            nodeSelector: 'tr',
            handleSelector: 'td'
        };

        const dragProps2 = {
            onDragEnd(fromIndex, toIndex) {
                const { columnLists } = that.state;
                const item = columnLists.splice(fromIndex - 2, 1)[0];
                columnLists.splice(toIndex - 2, 0, item);
                that.setState({ columnLists });
            },
            nodeSelector: 'td',
            handleSelector: 'td'
        };

        return (
            <div>
                <DragColumn {...dragProps2}>
                    <ReactDragListView {...dragProps}>
                        <table style={{
                            paddingRight: "15px",
                            width: "100%"
                        }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "2%" }}>
                                        <span style={{ backgroundColor: 'rgb(184, 173, 27)', borderRadius: '50%', margin: "0 5px" }}>
                                            <FaSortDown style={{ color: 'white' }} />
                                        </span>
                                    </td>
                                    <td style={{ width: "50%" }}><span>Done</span></td>
                                    {
                                        this.state.columnLists.length !== 0 ?
                                            this.state.columnLists.map((col, index) => {
                                                return (
                                                    <td key={index} style={{ textAlign: 'center', verticalAlign: 'bottom' }}><span>{col.title}</span></td>
                                                )
                                            }) : null
                                    }
                                    <td onClick={() => this.setState({ showCreateColumnModal: true })}><MdAddCircle /></td>
                                </tr>

                                {this.state.thingsTodo && this.state.thingsTodo.map((item, index) => (
                                    <tr key={index} style={{ cursor: 'pointer' }}>
                                        <td></td>
                                        <td style={{ display: 'flex', backgroundColor: 'rgb(219, 213, 213)' }}>
                                            <div style={{ width: "5px", backgroundColor: 'blue' }}></div>
                                            <span style={{ padding: '5px 8px', flex: 1 }}>{item.title}</span>
                                            <span><FiMessageCircle size="22" style={{ color: 'rgb(117, 106, 106)', padding: "0 8px", height: "100%" }} /></span>
                                        </td>
                                        {
                                            this.state.columnLists.length !== 0 ?
                                                this.state.columnLists.map((col, index) => {
                                                    if (index === 0) {
                                                        return (
                                                            <td style={{ backgroundColor: col.backgroundColor, textAlign: 'center', verticalAlign: 'bottom' }}>
                                                                <span>
                                                                    {col.icon}
                                                                </span>
                                                            </td>
                                                        )
                                                    }
                                                    if (index === 1 || index === 3 || index === 2) {
                                                        return <td style={{ backgroundColor: col.backgroundColor, textAlign: 'center', verticalAlign: 'bottom' }}>
                                                            <span>
                                                                {col.icon}
                                                            </span>
                                                        </td>
                                                    }
                                                    else {
                                                        return <td key={index} style={{ backgroundColor: 'rgb(219, 213, 213)', textAlign: 'center', verticalAlign: 'bottom' }}>
                                                            <span>
                                                                {col.icon}
                                                            </span>
                                                        </td>
                                                    }
                                                })
                                                : null
                                        }

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
                    {this.state.showCreateColumnModal && this.createColumnModal()}
                </DragColumn>
            </div >
        );
    }
}

export default DoneList
