/**
 * Internal dependencies
 */
import {
	COMMENTS_FILTER_VIEW_SET,
} from 'state/action-types';
import { combineReducers } from 'state/utils';

export function view( state = 'unapproved', { type, view: filter } ) {
	if ( type === COMMENTS_FILTER_VIEW_SET ) {
		return filter;
	}
	return state;
}

export default combineReducers( {
	view
} );
