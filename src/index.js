/* eslint-disable */
import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from "jquery";
import FilterButtons from "./components/FilterButtons";
import SearchBar from "./components/SearchBar";
import ChannelList from "./components/ChannelList";
import './index.css';

const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];



class App extends Component {
  constructor() {
    super();
    this.state = {      
      channels: [],
      filter: "",
      show: "All"
    }
    this.handleFilterChannelNames = this.handleFilterChannelNames.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentWillMount() {         
    channels.forEach(user => {
      let object;      
      let urlForChannels = `${"https://wind-bow.gomix.me/twitch-api/channels/"}${user}${"?callback=?"}`;
      let urlForStrems = `${"https://wind-bow.gomix.me/twitch-api/streams/"}${user}${"?callback=?"}`;
      $.getJSON(urlForStrems, data => {
        if (data.stream) {
          object = Object.assign({}, {
            status: "online",
            game: data.stream.game            
          })                                              
        }
      });
      $.getJSON(urlForChannels, data => {
        object = Object.assign({}, object, {
          logo: data.logo,
          name: data.name,
          url: data.url,
          id: data._id
        })
               
        this.setState({ channels: this.state.channels.concat(object)})                
      });     
    })          
  }
  
  handleFilterChannelNames(filterText) {
    this.setState({
      filter: filterText
    })
  }

  handleShow(show) {
    this.setState({ show: show})
  }

  render() {
    let { channels, filter, show } = this.state;
    switch(show) {      
      case "Online":
        channels = channels.filter(channel => channel.status);
        break;
      case "Offline":
        channels = channels.filter(channel => !channel.status);     
    }

    if(filter){
      channels = channels.filter(channel =>
        channel.name.toLowerCase()
        .includes(filter.toLowerCase()))
    }     

    return (      
      <div>
        <h1 className="text-center text-primary">Twitch TV </h1>
        <SearchBar onFilterChannelNames={this.handleFilterChannelNames} />
        <FilterButtons onHandleShow={this.handleShow} />
        <ChannelList channels={channels} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
