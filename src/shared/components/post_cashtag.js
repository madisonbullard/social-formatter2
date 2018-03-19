import React from 'react';

export const PostCashtag = ({ text, linked = false } = props) => {
  const checkLink = (cashtag) => {
    if (linked) {
      return (
        <a href={`https://twitter.com/search?q=%24${text}&src=ctag`} target="_blank" rel="noopener">
          {cashtag}
        </a>
      );
    }
    return cashtag;
  };
  return checkLink(<span>${text}</span>);
};
