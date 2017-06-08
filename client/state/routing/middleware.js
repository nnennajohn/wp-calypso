/**
 * External dependencies
 */
import debugFactory from 'debug';
import page from 'page';

/**
 * Internal dependencies
 */
import localforage from 'lib/localforage';
import { isOutsideCalypso } from 'lib/url';
import { ROUTE_SET, COMMENTS_FILTER_VIEW_SET } from 'state/action-types';
import { getSelectedSiteSlug } from 'state/ui/selectors';

const debug = debugFactory( 'calypso:restore-last-location' );
const LAST_PATH = 'last_path';

export const restoreLastLocation = () => {
	let hasInitialized = false;

	return ( next ) => ( action ) => {
		if ( action.type !== ROUTE_SET || ! action.path ) {
			return next( action );
		}

		localforage.getItem( LAST_PATH ).then(
			( lastPath ) => {
				if ( ! hasInitialized &&
						lastPath && lastPath !== '/' &&
						action.path === '/' &&
						! isOutsideCalypso( lastPath ) ) {
					debug( 'redir to', lastPath );
					page( lastPath );
				} else if ( action.path !== lastPath &&
						! isOutsideCalypso( action.path ) ) {
					debug( 'saving', action.path );
					localforage.setItem( LAST_PATH, action.path );
				}

				if ( ! hasInitialized ) {
					hasInitialized = true;
				}

				return next( action );
			},
			() => next( action )
		);
	};
};

export default restoreLastLocation;

const handler = ( dispatch, action, getState ) => {
	switch ( action.type ) {
		case COMMENTS_FILTER_VIEW_SET:
			const siteSlug = getSelectedSiteSlug( getState() );
			if ( action.redirect ) {
				page( `/comments/${ action.view }/${ siteSlug }` );
			}
			return;
	}
};

export const routingMiddleware = ( { dispatch, getState } ) => ( next ) => ( action ) => {
	handler( dispatch, action, getState );
	return next( action );
};
