/**
 * Internal dependencies
 */
import { mergeHandlers } from 'state/action-watchers/utils';
import activity from './activity';
import rewind from './rewind';

export default mergeHandlers(
	activity,
	rewind,
);
