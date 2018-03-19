// import 'babel-polyfill';
import fetch from 'isomorphic-fetch'

import { requestBearerToken } from './request_bearer_token';

export function fetchPopularRepos (language = 'all') {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
};

export async function fetchPost (url = 'https://twitter.com/thefader/status/971401860455239680') {
  if(!__isBrowser__){

  	const { TWITTER_CONSUMER_KEY, TWITTER_SECRET } = process.env;
    console.log(TWITTER_SECRET, TWITTER_CONSUMER_KEY)
  	const token = async () => await requestBearerToken(TWITTER_CONSUMER_KEY, TWITTER_SECRET);
    const statusIdArray = url.match(/status\/([^\/]+)/); // strip out the status ID from the url
    const statusId = statusIdArray[1];
  	return await fetch(`https://api.twitter.com/1.1/statuses/show.json?id=${statusId}&tweet_mode=extended`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${await token()}`
      }
    }).then((data) => data.json())
      .then((tweet) => {
        console.log(tweet)
        return tweet
      })
      .catch((error) => {
        console.warn(error)
        return null
      });
  };
};

