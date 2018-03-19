import React from 'react';

import { PostUserMention } from './post_user_mention';

export const PostScreenName = props => (
  <div className={props.className}>
    <PostUserMention screenName={props.screenName} />
  </div>
);
