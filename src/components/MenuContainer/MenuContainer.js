import React, { Component } from 'react';
import "./MenuContainer.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
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

class MenuContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showCreateBoardModal: false,
            newBoardName: '',
            boardLists: []
        }
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    createBoards = () => {
        this.setState({
            showCreateBoardModal: false,
            boardLists: [...this.state.boardLists, this.state.newBoardName]
        })
    }

    selectBoardType = () => {

    }

    createBoardModal = () => {
        return (
            <Modal
                isOpen={this.state.showCreateBoardModal}
                onRequestClose={() => this.setState({ showCreateBoardModal: false })}
                style={customStyles}
            >
                <h2 style={{ padding: "10px" }}>Create a new board</h2>
                <input
                    type="text"
                    placeholder="New Board Name"
                    onChange={(e) => this.setState({ newBoardName: e.target.value })}
                    style={{ padding: "8px", border: "1px solid blue", width: "27vw" }}
                />
                <div style={{ padding: "15px", display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <input type="radio" onClick={this.selectBoardType} /><span>Main</span>
                    </div>
                    <div>
                        <input type="radio" /><span>Private</span>
                    </div>
                    <div>
                        <input type="radio" /><span>Shareable</span>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancelButton" onClick={() => this.setState({ showCreateBoardModal: false })}>Cancel</button>
                    <button className="createBoardButton" onClick={this.createBoards}>Create Board</button>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <div className="menuContainer">
                    <AiOutlineCaretDown size={13} style={{ padding: '5px' }} />
                    <span style={{ backgroundColor: 'blue', borderRadius: '5px', padding: "2px", margin: '5px' }}>
                        <FaHome style={{ color: 'white' }} />
                    </span>
                    <span style={{ flex: 1, padding: '5px' }}>Main</span>
                    <div onClick={() => this.setState({ showCreateBoardModal: true })}>
                        <MdAddCircleOutline size={20} style={{ color: 'blue', padding: '5px' }} />
                    </div>
                    {this.state.showCreateBoardModal && this.createBoardModal()}
                </div>
                <div className="boards">
                    {
                        this.state.boardLists.length !=0 ? 
                        this.state.boardLists.map((board) => {
                            return (
                                <div className="singleBoard">{board}</div>
                            )
                        })
                        : null
                    }
                </div>
            </div>

        )
    }
}

export default MenuContainer
