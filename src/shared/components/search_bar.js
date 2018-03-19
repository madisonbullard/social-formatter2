import React, { Component } from 'react';
import styled from 'react-emotion';
import { Subscribe } from 'unstated';

import { fetchPost } from '../services/api';
import PostContainer from '../containers/post_container';

const StyledSearchBarDiv = styled('div')`
  grid-area: search;
  width: 700px;
  height: 50px;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #292b2c;
  margin: 0;
  & input, button {
    overflow: visible;
    touch-action: manipulation;
  }
  & input, span {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & input {
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem 0 0 .25rem;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }
  & span {
    position: relative;
    font-size: 0;
    white-space: nowrap;
    vertical-align: middle;
    & button {
      border: 1px solid transparent;
      border-radius: .25rem;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-color: #333;
      padding: .5rem 1.5rem;
      font-size: 1rem;
      z-index: 2;
      margin-left: -1px;
      position: relative;
      flex: 1 1 0%;
      -webkit-appearance: button;
      color: ${p => p.theme.white};
      background-color: ${p => p.theme.purple};
      display: inline-block;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      transition: all .2s ease-in-out;
    }
  }
`;

class SearchBar extends Component {
  state = { 
    url: ''
  };

  componentDidMount(){
    this.props.routePost('https://twitter.com/thefader/status/971401860455239680')
  }

  // onInputChange = (url) => {
  //   routePost(url)
  //   this.setState({ url });
  //   const statusIdArray = url.match(/status\/([^\/]+)/); // strip out the status ID from the url
  //   console.log(statusIdArray)
  //   if (statusIdArray){
  //     const vendor = 'tw'
  //     const statusId = statusIdArray[1];
  //     // ROUTE THE THING
  //   } else {
  //     console.warn('improper url. try to handle this error more elegantly at some point.')
  //   }
  // }

  render() {
    return(
      <StyledSearchBarDiv>
        <input
          value={this.state.url}
          onChange={event => { this.props.routePost(event.target.value); this.setState({ url: event.target.value }) }}
          placeholder="Paste tweet or Instagram post URL here"
          autoFocus
        />
        <span>
          <button type="button">Add</button>
        </span>
      </StyledSearchBarDiv> 
    );
  }
}

export default SearchBar;
