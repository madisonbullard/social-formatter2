import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import { Subscribe } from 'unstated';

import { fetchPost } from '../services/api';
import PostContainer from '../containers/post_container';
import StyleContainer from '../containers/style_container';

import { Header } from './header';
import { RenderPanel } from './render_panel';
import { FormatPanel } from './format_panel';

class DesignView extends Component {
  getInitialData = () => {
    let post
    if (__isBrowser__) {
      post = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      post = this.props.staticContext.data
    }
    console.log('hihihihi', post)
    return post
  }

  state = {
    post: __isBrowser__ ? window.__INITIAL_DATA__ : this.props.staticContext.data,
    loading: this.getInitialData() ? false : true,
  }

  componentDidMount(){
    if (!this.state.post) {
      fetchPost(this.props.match.params.id)
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('design_view componentWIllReceiveProps', this.props, nextProps)
    const { match } = this.props

    if (nextProps.match.params.id !== match.params.id) {
      fetchPost(nextProps.match.params.id)
    }
  }

  // getPost(id) {
  //   this.setState(() => ({
  //     loading: true
  //   }))

  //   this.props.fetchInitialData(id)
  //     .then((post) => this.setState(() => ({
  //       post,
  //       loading: false,
  //     })))
  // }

  // handleValueChange = (param, value) => {
  //   this.setState({
  //     postTheme: {
  //       post: {
  //         ...this.state.postTheme.post,
  //         [param]: value,
  //       },
  //     },
  //   });
  //   console.log(`${param}:`, value);
  // }

  render() {
    return (
      <Subscribe to={[PostContainer, StyleContainer]}>
        {(postStore, styleStore) => {
          const { state: { tweetStyles }, updateStyle } = styleStore
            // { state: { selectedPost, posts } } = postStore,
          return (
            <Fragment>
              {/*<Header tweetURL={this.getTweet} tweet={this.state.tweet} postTheme={this.state.postTheme} />*/}
              <FormatPanel theme={tweetStyles} onInputChange={updateStyle} />
              <RenderPanel post={this.state.post}/>
            </Fragment>
          )  
        }}
      </Subscribe>
    );
  }
}

export default DesignView;