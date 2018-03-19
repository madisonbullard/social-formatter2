import React, { Component, Fragment } from 'react';
import { IntlProvider, FormattedDate, FormattedTime } from 'react-intl';
import styled from 'react-emotion';
import PostButtons from './post_buttons';

const StyledDateDiv = styled('div')`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.post.screenNameFontSize}px;
  & span{
    white-space: pre-wrap;
    color: ${p => p.theme.grey};
  }
`;

const StyledStatsDiv = styled('div')`
  display: flex;
  padding: 10px 0;
  margin-top: 10px;
	border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  white-space: pre-wrap;
  color: ${p => p.theme.grey};
  & div:first-child{
  	margin-right: 10px;
  }
 	& span{
 		font-weight: bold;
 		color: ${p => p.theme.black};
 	}
`;

const parseTwitterDate = ({ created_at }) => new Date(Date.parse(created_at.replace(/( \+)/, ' UTC$1')));

const DateOutput = ({ date }) => (
  	<IntlProvider locale="en">
    <StyledDateDiv>
      <FormattedTime
        value={date}
        hour="numeric"
        minute="numeric"
      />
      <span> - </span>
      <FormattedDate
        value={date}
        day="numeric"
      />
      <span> </span>
      <FormattedDate
        value={date}
        month="short"
      />
      <span> </span>
      <FormattedDate
        value={date}
        year="numeric"
      />
    </StyledDateDiv>
  </IntlProvider>
);

const SocialStats = ({ favorite_count = 0, retweet_count = 0 }) => (
  <StyledStatsDiv>
    <div>
      <span>{retweet_count}</span> Retweets
    </div>
    <div>
      <span>{favorite_count}</span> Likes
    </div>
  </StyledStatsDiv>
);

class PostDetails extends Component {
  constructor(props) {
    super(props);
    const date = parseTwitterDate(props.post);
    this.state = { date };
  }

  render() {
  	const { className, post } = this.props;
  	return (
      <div className={className}>
	      <DateOutput date={this.state.date} />
	      <SocialStats {...post} />
	      <PostButtons {...post} />
	    </div>
    );
  }
}

export default PostDetails;
