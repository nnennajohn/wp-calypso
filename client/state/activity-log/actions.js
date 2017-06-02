/**
 * Internal dependencies
 */
import {
	ACTIVITY_LOG_ERROR,
	ACTIVITY_LOG_REQUEST,
	ACTIVITY_LOG_UPDATE,
	REWIND_STATUS_ERROR,
	REWIND_STATUS_REQUEST,
	REWIND_STATUS_UPDATE,
} from 'state/action-types';

export function activityLogError( siteId, error ) {
	return {
		type: ACTIVITY_LOG_ERROR,
		siteId,
		error,
	};
}

export function activityLogRequest( siteId ) {
	return {
		type: ACTIVITY_LOG_REQUEST,
		siteId,
	};
}

export function activityLogUpdate( siteId, data ) {
	return {
		type: ACTIVITY_LOG_UPDATE,
		siteId,
		data,
	};
}

export function getRewindStatus( siteId ) {
	return {
		REWIND_STATUS_REQUEST,
		siteId,
	};
}

export function updateRewindStatus( siteId, status ) {
	return {
		type: REWIND_STATUS_UPDATE,
		siteId,
		status,
	};
}

export function rewindStatusError( siteId, error ) {
	return {
		type: REWIND_STATUS_ERROR,
		siteId,
		error,
	};
}
