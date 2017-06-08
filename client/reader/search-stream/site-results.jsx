/**
 * External Dependencies
 */
import React, { PropTypes } from 'react';
import 'lodash';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getReaderFeedsCountForQuery, getReaderFeedsForQuery } from 'state/selectors';
import QueryReaderFeedsSearch from 'components/data/query-reader-feeds-search';
import { requestFeedSearch } from 'state/reader/feed-searches/actions';
import ReaderInfiniteStream from 'components/reader-infinite-stream';
import { siteRowRenderer } from 'components/reader-infinite-stream/row-renderers';
import withWidth from 'lib/with-width';

class SiteResults extends React.Component {
	static propTypes = {
		query: PropTypes.string,
		requestFeedSearch: PropTypes.func,
		searchResults: PropTypes.array,
		searchResultsCount: PropTypes.number,
		width: PropTypes.number.isRequired,
	};

	fetchNextPage = offset => this.props.requestFeedSearch( this.props.query, offset );

	hasNextPage = offset => offset < this.props.searchResultsCount;

	render() {
		const { query, searchResults, width } = this.props;

		return (
			<div>
				<QueryReaderFeedsSearch query={ query } />
				<ReaderInfiniteStream
					items={ searchResults || [ {}, {}, {}, {}, {} ] }
					width={ width }
					showLastUpdatedDate={ false }
					fetchNextPage={ this.fetchNextPage }
					hasNextPage={ this.hasNextPage }
					rowRenderer={ siteRowRenderer }
				/>
			</div>
		);
	}
}

export default connect(
	( state, ownProps ) => ( {
		searchResults: getReaderFeedsForQuery( state, ownProps.query ),
		searchResultsCount: getReaderFeedsCountForQuery( state, ownProps.query ),
	} ),
	{ requestFeedSearch },
)( localize( withWidth( SiteResults ) ) );
