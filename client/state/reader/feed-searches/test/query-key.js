/**
 * External Dependencies
 */
import { expect } from 'chai';

/**
 * Internal Dependencies
 */

import { requestFeedSearch } from '../actions';
import queryKey from '../query-key';

describe( 'query-key', () => {
	it( 'should generate the expected query keys', () => {
		[
			[ requestFeedSearch( { query: 'one' } ), 'one-X' ],
			[ requestFeedSearch( { query: 'one', offset: 10 } ), 'one-X' ],
			[ requestFeedSearch( { query: 'one', excludeFollowed: false } ), 'one-A' ],
		].forEach( ( [ action, expectedKey ] ) => {
			expect( queryKey( action ) ).to.equal( expectedKey );
		} );
	} );
} );
