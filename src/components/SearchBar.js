import React, { Component } from 'react';


class SearchBar extends Component {
  constructor() {
    super();
    this.handleFilterChannelNames = this.handleFilterChannelNames.bind(this);
  }

  handleFilterChannelNames(e) {
      this.props.onFilterChannelNames(e.target.value);
  }  
  render() {   
    return (
      <div className="well search-bar" >
        <span className="glyphicon glyphicon-search search_icon" />        
        <input onChange={this.handleFilterChannelNames} className="form-control input_search" ></input>
      </div>
    );
  }
}

export default SearchBar;

