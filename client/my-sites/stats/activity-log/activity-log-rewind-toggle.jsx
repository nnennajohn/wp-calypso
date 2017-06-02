/**
 * External dependencies
 */
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';

class ActivityLogRewindToggle extends Component {
	static propTypes = {
		isActive: PropTypes.bool.isRequired,
		isToggling: PropTypes.bool.isRequired,
	};

	static defaultProps = {
		isActive: false,
		isToggling: false,
	};

	// FIXME
	handleToggle = () => {}

	render() {
		const {
			isActive,
			isToggling,
			translate,
		} = this.props;

		const buttonText = isActive
			? translate( 'Deactivate Rewind' )
			: translate( 'Activate Rewind' );

		return (
			<Button
				primary={ isActive }
				className={ classNames( 'activity-log__rewind-toggle', {
					'is-busy': isToggling,
				} ) }
				onClick={ this.handleToggle }
				compact={ true }
			>
				{ buttonText }
			</Button>
		);
	}
}

export default localize( ActivityLogRewindToggle );
