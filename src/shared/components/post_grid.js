import React from 'react';
import styled from 'react-emotion';

import { PostUserName } from './post_user_name';
import { PostAsComponents } from '../services/post_as_components';
import { PostScreenName } from './post_screen_name';
import { PostUserImage } from './post_user_image';

const StyledPostGridDiv = styled('div')`
  display: grid;
  grid-template-columns: repeat(${(p) => {
    if (!p.theme.post.fullBleedMedia) {
      return `${Math.round((p.theme.post.width - p.theme.post.paddingX * 2) / 10)}`;
    }
    return `${Math.round((p.theme.post.width - p.theme.post.paddingX * 2) / 10)}`;
  }}, 10px);
  grid-auto-rows: minmax(10px, max-content);
  width: 100%;
  padding: ${(p) => {
    if (!p.theme.post.fullBleedMedia) {
      return '0 0 10px';
    }
    return `0 ${p.theme.post.paddingX}px`;
  }};
  `;

const StyledPostUserImage = styled(PostUserImage)`
  grid-area: 1 / 1 / 6 / 6;
  overflow: hidden;
  & img{
    border-radius: 50%;
  }
  `;

const StyledFlexbox = styled('div')`
  display: flex;
  flex-direction: column;
  grid-row: 1 / 6;
  grid-column: 7 / 38;
  justify-content: center;
  `;

const StyledPostUserName = styled(PostUserName)`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 20px;
  font-size: ${p => p.theme.post.userNameFontSize}px;
  & div{
    display: flex;
    padding-left: 6px;
  }
  `;

const StyledPostScreenName = styled(PostScreenName)`
  & span{
    color: ${p => p.theme.grey};
  }
  & a{
    text-decoration: none;
  }
  font-size: ${p => p.theme.post.screenNameFontSize}px;
  `;

const StyledPostAsComponents = styled(PostAsComponents)`
  grid-row: 7;
  grid-column: 1 / -1;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: .01em;
  & a{
    color: #006DA8;
    text-decoration: none;
  }
  `;

export const PostGrid = props => (
  <StyledPostGridDiv>
    <StyledPostUserImage userImageUrl={props.post.user.profile_image_url_https} imageSize="bigger" />
    <StyledFlexbox>
      <StyledPostUserName user={props.post.user} />
      <StyledPostScreenName screenName={props.post.user.screen_name} />
    </StyledFlexbox>
    <StyledPostAsComponents post={props.post} />
  </StyledPostGridDiv>
);
