/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { COMMENTS_FILTER_VIEW_SET } from 'state/action-types';
import comments, { view } from '../reducer';

describe( 'comments', () => {
	it( 'should export expected reducer keys', () => {
		expect( comments( undefined, {} ) ).to.have.keys( [
			'view'
		] );
	} );

	describe( 'view()', () => {
		it( 'should default to unapproved', () => {
			const state = view( undefined, {} );
			expect( state ).to.equal( 'unapproved' );
		} );

		it( 'should track current view', () => {
			const state = view( undefined, {
				type: COMMENTS_FILTER_VIEW_SET,
				view: 'all'
			} );

			expect( state ).to.equal( 'all' );
		} );
	} );
} );
