/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { COMMENTS_FILTER_VIEW_SET } from 'state/action-types';
import { setCommentsView } from '../actions';

describe( 'actions', () => {
	describe( 'setCommentsView()', () => {
		it( 'should return an action object', () => {
			const action = setCommentsView( 'all' );

			expect( action ).to.eql( {
				type: COMMENTS_FILTER_VIEW_SET,
				view: 'all',
				redirect: true
			} );
		} );

		it( 'should return an action object with redirect', () => {
			const action = setCommentsView( 'trash', false );

			expect( action ).to.eql( {
				type: COMMENTS_FILTER_VIEW_SET,
				view: 'trash',
				redirect: false
			} );
		} );
	} );
} );
