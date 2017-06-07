/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns the current comments view.
 *
 * @param  {Object}    state Global state tree
 * @return {String}    Current comments view
 */
export default function getCommentsView( state ) {
	return get( state, 'ui.comments.view', 'unapproved' );
}
