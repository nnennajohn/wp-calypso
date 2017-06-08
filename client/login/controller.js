/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import WPLogin from './wp-login';
import MagicLogin from './magic-login';

export default {
	login( context, next ) {
		const { lang, path, params } = context;

		context.renderCacheKey = `login:${ lang }`;
		context.primary = (
			<WPLogin locale={ lang } path={ path } twoFactorAuthType={ params.twoFactorAuthType } />
		);

		next();
	},
	magicLogin( context, next ) {
		context.renderCacheKey = 'magiclogin';
		context.primary = <MagicLogin />;

		next();
	}
};
