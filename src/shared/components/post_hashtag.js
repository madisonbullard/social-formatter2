import React from 'react';

export const PostHashtag = ({ text, linked = false } = props) => {
  const checkLink = (hashtag) => {
    if (linked) {
      return (
        <a href={`https://twitter.com/hashtag/${text}?src=hash`} target="_blank" rel="noopener">
          {hashtag}
        </a>
      );
    }
    return hashtag;
  };
  return checkLink(<span>#{text}</span>);
};
