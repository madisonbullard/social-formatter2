import React, { Component } from 'react';
import styled from 'react-emotion';

import { PostMedia } from '../components/post_media';

export const PostMediaAsComponents = (props) => {
  if (props.post.entities.media && props.post.entities.media.length > 0) {
    const { entities, extended_entities } = props.post;
    if (!extended_entities && entities.media) {
      return (
        <div className={props.className}>
          <PostMedia media={{ url_https: `${entities.media[0].media_url_https}` }} />
        </div>
      );
    } else if (entities.media) {
      let media = [];
      extended_entities.media.forEach((image, index) => {
        media = [...media, <PostMedia key={index} media={{ url_https: `${image.media_url_https}` }} />];
      });
      return (
        <div className={props.className}>
          {media}
        </div>
      );
    }
  } else {
    return null;
  }
};
