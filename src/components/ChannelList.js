import React, { Component } from "react";
import ChannelListItem from "./ChannelListItem";

class ChannelList extends Component {
    render() {
        let { channels } = this.props;

        return (
            <ul className="list-group">
                {channels.map(channel => {                    
                    return (
                        <ChannelListItem key={channel.id} channel={channel}  />
                    );
                })}
            </ul>
        );
    }
}

export default ChannelList;