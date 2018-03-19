import React, { Component } from 'react';
import styled from 'react-emotion';
import { Route } from 'react-router-dom';
import { Subscribe } from 'unstated';

import PostContainer from '../containers/post_container';

import { PostGrid } from './post_grid';
import { PostUserName } from './post_user_name';
import { PostAsComponents } from '../services/post_as_components';
import { PostMediaAsComponents } from '../services/post_media_as_components';
import { PostScreenName } from './post_screen_name';
import { PostUserImage } from './post_user_image';
import PostDetails from './post_details';

const StyledPostContainerDiv = styled('div')`
  width: ${props => props.theme.post.width}px;
  padding: ${(props) => {
    if (!props.theme.post.fullBleedMedia) {
      return `${props.theme.post.paddingY}px ${props.theme.post.paddingX}px`;
    }
    return `${props.theme.post.paddingY}px 0 0`;
  }};
  margin: .5rem 0;
  border-radius: ${props => props.theme.post.borderRadius}px;
  background-color: ${props => props.theme.post.backgroundColor.hex};
  overflow: hidden;
`;

const StyledPostMediaAsComponents = styled(PostMediaAsComponents)`
  padding: ${(props) => {
    if (!props.theme.post.fullBleedMedia) {
      return '0px';
    }
    return `${props.theme.post.paddingY}px 0 0`;
  }};
  max-height: ${props => props.theme.post.width - props.theme.post.paddingX * 2}px;
  border-radius: ${(props) => {
    if (!props.theme.post.fullBleedMedia) {
      return '5px';
    }
    return '0px';
  }};
  overflow: hidden;
`;

const StyledPostDetails = styled(PostDetails)`
  grid-row: auto;
  grid-column: 1 / -1;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.post.screenNameFontSize}px;
  & span{
    white-space: pre-wrap;
    color: ${props => props.theme.grey};
  }
  padding: ${(props) => {
    if (!props.theme.post.fullBleedMedia) {
      return '0px';
    }
    return `0 ${props.theme.post.paddingX}px ${props.theme.post.paddingY}px`;
  }};
`;

class Post extends Component {
  // getInitialData = () => {
  //   let post
  //   if (__isBrowser__) {
  //     post = window.__INITIAL_DATA__
  //     delete window.__INITIAL_DATA__
  //   } else {
  //     post = this.props.staticContext.data
  //   }
  //   console.log('hihihihi', post)
  //   return post
  // }

  // state = {
  //   post: __isBrowser__ ? window.__INITIAL_DATA__ : this.props.staticContext.data,
  //   loading: this.getInitialData() ? false : true,
  // }

  componentDidMount(){
    if (this.props.post) {
      // fetchPost(this.props.match.params.id)
      this.props.postStore.setPost(this.props.post)
    }
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log('post componentWIllReceiveProps', this.props, nextProps)
  //   const { match } = this.props

  //   if (nextProps.match.params.id !== match.params.id) {
  //     fetchPost(nextProps.match.params.id)
  //   }
  // }



  render() {
    // return(
    //   <Subscribe to={[PostContainer]}>
    //     { 
    //       postStore => {
            console.log('props.store', this.props.postStore)
            const { state: { selectedPost: { id, service } } } = this.props.postStore
            console.log('id', id, 'service', service)
            return(
              <Route path={`/${service}/${id}`} render={() => (
                <StyledPostContainerDiv>
                  <PostGrid post={this.props.post} />
                  <StyledPostMediaAsComponents post={this.props.post} />
                  <StyledPostDetails post={this.props.post} />
                </StyledPostContainerDiv>
              )}/>
            )
    //       }
    //     }
    //   </Subscribe>
    // )
  }
};

export default Post