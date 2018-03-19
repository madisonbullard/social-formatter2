import twttr from 'twitter-text';
import React, { Component } from 'react';
import styled from 'react-emotion';

import { PostUrl } from '../components/post_url';
import { PostHashtag } from '../components/post_hashtag';
import { PostCashtag } from '../components/post_cashtag';
import { PostText } from '../components/post_text';
import { PostUserMention } from '../components/post_user_mention';

const parsePost = (props) => {
  const { entities, full_text } = props.post;
  console.log(props.post)

  let mediaEntityUrl = [],
    slicedText = []; // used to filter out media urls from tweet text

  if (entities.media && entities.media.length > 0) {
    entities.media.forEach((mediaEntity) => {
      mediaEntityUrl = [...mediaEntityUrl, `${mediaEntity.url}`];
    });
  }

  const entitiesWithIndices = twttr.extractEntitiesWithIndices(full_text);
  console.log(entitiesWithIndices)

  if (entitiesWithIndices.length < 1) {
    return <PostText key={'string0'} text={full_text} />; // if there are no entities in the tweet, just return the text
  }

  if (entitiesWithIndices[0].indices[0] != 0) { // if there is text before the first entity, add a PostText component to slicedText array
    const tweetTextBeforeFirstEntity = full_text.substring(0, entitiesWithIndices[0].indices[0]);
    slicedText = [{
      indices: [0, entitiesWithIndices[0].indices[0]],
      content: <PostText key={'string0'} text={tweetTextBeforeFirstEntity} />,
    }];
  }

  let indexMax = 0; // used to determine the highest index value of any entity in the tweet string to check whether tweet ends with entity or regular text

  entitiesWithIndices.forEach((entity, index) => { // for each item in entitiesWithIndices that is a hashtag, cashtag, url, or user mention, replace with corresponding component
    // console.log(`entity${index}:`, entity)
    if (entity.hasOwnProperty('screenName')) {
      const key = `userMention${entity.indices[0]}`;
      slicedText = [...slicedText, {
        indices: [entity.indices[0], entity.indices[1]],
        content: <PostUserMention key={key} screenName={entity.screenName} linked />,
      }];
    } else if (entity.hasOwnProperty('url')) {
      if (mediaEntityUrl.indexOf(entity.url) == -1) { // if the URL is NOT found in the list of media URLs (i.e. if the url is not just a link to a twitter image), add a PostUrl component to slicedText array
        let displayUrl;
        for (const el of entities.urls) { // iterate over entities.url and find this entity's display_url by checking for matching initial indicies
          if (entity.indices[0] == el.indices[0]) {
            displayUrl = el.display_url;
          }
        }
        const key = `url${entity.indices[0]}`;
        slicedText = [...slicedText, {
          indices: [entity.indices[0], entity.indices[1]],
          content: <PostUrl key={key} url={entity.url} displayUrl={displayUrl} linked />,
        }];
      }
    } else if (entity.hasOwnProperty('hashtag')) {
      const key = `hashtag${entity.indices[0]}`;
      slicedText = [...slicedText, {
        indices: [entity.indices[0], entity.indices[1]],
        content: <PostHashtag key={key} text={entity.hashtag} linked />,
      }];
    } else if (entity.hasOwnProperty('cashtag')) {
      const key = `cashtag${entity.indices[0]}`;
      slicedText = [...slicedText, {
        indices: [entity.indices[0], entity.indices[1]],
        content: <PostCashtag key={key} text={entity.cashtag} linked />,
      }];
    }
    if (entity.indices[1] > indexMax) { // if this entity's terminating index is the greatest value so far, make indexMax = THAT_INDEX
      indexMax = entity.indices[1];
    }
    if (entitiesWithIndices[index + 1] && entity.indices[1] < entitiesWithIndices[index + 1].indices[0]) { // if there is another entity after this one, and if there is plain text between this entity and that next entity, add a PostText component to slicedText array
      const tweetTextString = full_text.substring(entity.indices[1], entitiesWithIndices[index + 1].indices[0]);
      slicedText = [...slicedText, {
        indices: [entity.indices[1] + 1, entitiesWithIndices[index + 1].indices[0]],
        content: <PostText key={`string${entity.indices[1]}`} text={tweetTextString} />,
      }];
    } else if (index == entitiesWithIndices.length - 1 && mediaEntityUrl.length == 0 && full_text.length - entity.indices[1] > 0) { // if there is plain text at the very end of the tweet, and no media entity present (which would add a media url to the end of the tweet), add a PostText component to slicedText array
      const tweetTextString = full_text.substring(entity.indices[1], full_text.length);
      slicedText = [...slicedText, {
        indices: [entity.indices[1] + 1, full_text.length],
        content: <PostText key={`string${entity.indices[1]}`} text={tweetTextString} />,
      }];
    } else if (index == entitiesWithIndices.length - 1 && mediaEntityUrl.length > 0 && full_text.length - entity.indices[1] > 0) { // if there is a media entity present in the tweet, and if there is plain text between the final non-media entity and media media entity's url, add a PostText component to slicedText array
      const tweetTextString = full_text.substring(entity.indices[1], full_text.length - mediaEntityUrl[0].length);
      slicedText = [...slicedText, {
        indices: [indexMax + 1, full_text.length - mediaEntityUrl[0].length],
        content: <PostText key={`string${entity.indices[1]}`} text={tweetTextString} />,
      }];
    }
  });

  slicedText.sort((a, b) => ((a.indices[0] > b.indices[0]) ? 1 : ((b.indices[0] > a.indices[0]) ? -1 : 0))); // sort slicedText by ascending initial index of each component

  const tweetAsComponents = slicedText.map(item => item.content);

  console.log('tweetAsComponents:', tweetAsComponents)

  return tweetAsComponents;
};

export const PostAsComponents = props => (
  <div className={props.className}>
    {parsePost(props)}
  </div>
);
