/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { getCommentsView } from '../';

describe( 'getCommentsView()', () => {
	it( 'should return unapproved if there is no information yet', () => {
		const view = getCommentsView( undefined );
		expect( view ).to.equal( 'unapproved' );
	} );

	it( 'should return the current view if set', () => {
		const view = getCommentsView( {
			ui: {
				comments: {
					view: 'all',
				},
			},
		} );
		expect( view ).to.equal( 'all' );
	} );
} );
