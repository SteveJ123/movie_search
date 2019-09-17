import React, { Component } from 'react';
// import fontawesome from 'font-awesome/css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './SearchBar.css';

 class SearchBar extends Component {

    state = {
      value: ''
    };

    // this.doSearch = this.doSearch.bind(this);

    timeout = null;

    doSearch = (event) => {
      // console.log("dosearch", event.target.value, this);
      // let result = event.target.value;
      this.setState({
        value: event.target.value
      });
      console.log(this.state.value);

      clearTimeout(this.timeout);

      this.timeout = setTimeout(()=>{
        this.props.callback(this.state.value);
      }, 500);
    }


    render() {
        return (
        <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
         {/* <FontAwesome className="rmdb-fa-searchbar" name="search" size="2x" /> */}
         <i className="fa fa-search"></i> 
      
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Searching"
            onChange={this.doSearch}
            value={this.state.value}
          />
          
        </div>
      </div>
        )
    }
}

export default SearchBar;