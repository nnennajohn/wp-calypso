/**
 * Internal dependencies
 */
import {
	WOOCOMMERCE_API_CREATE_PRODUCT,
} from 'woocommerce/state/action-types';

export function createProduct( siteId, product ) {
	return {
		type: WOOCOMMERCE_API_CREATE_PRODUCT,
		payload: { siteId, product },
	};
}

