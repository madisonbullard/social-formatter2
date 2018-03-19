import React from 'react';
import { TwitterVerifiedIcon } from './twitter_verified_icon.js';

const verified = (verified = false) => {
  if (verified) {
    return <div><TwitterVerifiedIcon /></div>;
  }
};

export const PostUserName = props => (
  <div className={props.className}>
    {props.user.name}
    {verified(props.user.verified)}
  </div>
);
