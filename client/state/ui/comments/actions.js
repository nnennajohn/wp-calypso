/**
 * Internal dependencies
 */
import { COMMENTS_FILTER_VIEW_SET } from 'state/action-types';

/**
 * Returns an action object used in signalling that the comments
 * view should be updated.
 *
 * @param  {String}  view - unapproved|approved|spam|trash|all
 * @param  {Boolean} redirect - signals if we should modify the current url
 * @return {Object}  Action object
 */
export function setCommentsView( view, redirect = true ) {
	return {
		type: COMMENTS_FILTER_VIEW_SET,
		view,
		redirect
	};
}
