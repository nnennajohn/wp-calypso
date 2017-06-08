/**
 * Build a key for feed search queries
 * @param  {object} query The feed search action
 * @return {string} the key
 */
export default function keyBy( query ) {
	const excludeFollowed = query.excludeFollowed ? 'X' : 'A';
	return `${ query.query }-${ excludeFollowed }`;
}
