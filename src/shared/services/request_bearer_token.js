import axios from 'axios';

const bearerTokenRequestString = (TWITTER_CONSUMER_KEY, TWITTER_SECRET) => {
  const rawKeyEncode = str => encodeURIComponent(str) // return RFC 1738 encoded string, as per Twitter API docs
		    .replace(/!/g, '%21')
		    .replace(/'/g, '%27')
		    .replace(/\(/g, '%28')
		    .replace(/\)/g, '%29')
		    .replace(/\*/g, '%2A');
  const string = `${rawKeyEncode(TWITTER_CONSUMER_KEY)}:${rawKeyEncode(TWITTER_SECRET)}`;
  const buffer = new Buffer(string);
  const toBase64 = buffer.toString('base64'); // encode string using base64
  return toBase64;
}

export const requestBearerToken = async (TWITTER_CONSUMER_KEY, TWITTER_SECRET) => {
  try {
    const request = await axios.post('https://api.twitter.com/oauth2/token', // setup post request as required by twitter
      'grant_type=client_credentials',
      { headers: {
        Authorization: `Basic ${bearerTokenRequestString(TWITTER_CONSUMER_KEY, TWITTER_SECRET)}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }}
    );
    // console.log('request.data.access_token', request.data.access_token)
    return request.data.access_token
  } catch (error) {
    console.error(error.response.data);
  }
}
