import React, { Component } from "react";

class FilterButtons extends Component {
    handleShow(text) {
        this.props.onHandleShow(text)
    }
    render() {
        return (
            <div className="button-group">
                <button className="btn btn-primary" onClick={() => this.handleShow("All")}>All</button>
                <button className="btn btn-success" onClick={() => this.handleShow("Online")}>Online</button>
                <button className="btn btn-danger" onClick={() => this.handleShow("Offline")}>Offline</button>
            </div>
        );
    }
}

export default FilterButtons;