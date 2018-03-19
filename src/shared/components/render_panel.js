import React, { Component } from 'react';
import styled from 'react-emotion';
import { Subscribe } from 'unstated';

import PostContainer from '../containers/post_container';
import Post from './post';

const StyledRenderPanelDiv = styled('div')`
  grid-area: render;
  background-color: #676970;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #6D7076 25%, transparent 25%), linear-gradient(-45deg, #6D7076 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #6D7076 75%), linear-gradient(-45deg, transparent 75%, #6D7076 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;
const StyledNoInputDiv = styled('div')`
  color: #EDF4FC;
  max-width: 80%;
`;

const awaitContent = (post) => {
  if (!post) {
    return <StyledNoInputDiv>Add a post from Twitter by pasting the URL of the post in the field above.</StyledNoInputDiv>;
  }
  return (
    <Post />
  );
};

export const RenderPanel = props => (
  <Subscribe to={[PostContainer]}>
    {
      postStore => {
        return(
          <StyledRenderPanelDiv>
            {/*awaitContent(selectedPost.post)*/}
            <Post post={props.post} postStore={postStore}/>
          </StyledRenderPanelDiv>
        )
      }
    }
  </Subscribe>
);
