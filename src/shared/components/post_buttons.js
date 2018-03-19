import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';

import PostIcons from './post_icons';

const StyledPostButtons = styled('div')`
  display: flex;
  margin-top: 10px;
`

const StyledButtonContainer = styled('div')`
  min-width: 80px;
`

const StyledButton = styled('button')`
  display: flex;
  align-content: center;
  border: 0;
  color: rgb(101, 119, 134);
  font-size: 16px;
  height: 19px;
  line-height: 20px;
  overflow-x: visible;
  overflow-y: visible;
  padding: 0 2px;
  text-align: center;
`

const StyledDataDiv = styled('div')`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Helvetica';
  margin-left: 9px;
  text-align: left;
  color: rgb(101, 119, 134);
`

class PostButtons extends Component {
  render() {
  	const { className, favorite_count = 0, retweet_count = 0 } = this.props;
  	return (
      <StyledPostButtons className={className}>
        <PostIcons render={({ Reply, Retweet, Like, Message }) => (
          <Fragment>
            <StyledButtonContainer>
              <StyledButton>
                <Reply />
                <StyledDataDiv>
                  <span></span>
                </StyledDataDiv>
              </StyledButton>
            </StyledButtonContainer>
            <StyledButtonContainer>
              <StyledButton>
                <Retweet />
                <StyledDataDiv>
                  <span>{retweet_count}</span>
                </StyledDataDiv>
              </StyledButton>
            </StyledButtonContainer>
            <StyledButtonContainer>
              <StyledButton>
                <Like />
                <StyledDataDiv>
                  <span>{favorite_count}</span>
                </StyledDataDiv>
              </StyledButton>
            </StyledButtonContainer>
            <StyledButtonContainer>
              <StyledButton>
                <Message />
              </StyledButton>
            </StyledButtonContainer>
          </Fragment>
        )}/>
      </StyledPostButtons>
    );
  }
}

export default PostButtons;
