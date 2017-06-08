/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import noop from 'lodash/noop';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SectionHeader from 'components/section-header';
import EllipsisMenu from 'components/ellipsis-menu';
import PopoverMenuItem from 'components/popover/menu-item';
import SortableList from 'components/forms/sortable-list';
import EditorMediaModalGalleryEditItem from './edit-item';

const EditorMediaModalGalleryEdit = React.createClass( {
	propTypes: {
		site: React.PropTypes.object,
		settings: PropTypes.object,
		onUpdateSetting: PropTypes.func
	},

	getDefaultProps() {
		return {
			settings: Object.freeze( {} ),
			onUpdateSetting: noop
		};
	},

	onOrderChanged: function( order ) {
		const items = [];

		this.props.settings.items.forEach( ( item, i ) => {
			items[ order[ i ] ] = item;
		} );

		this.props.onUpdateSetting( {
			items: items,
			orderBy: null
		} );
	},

	render() {
		const { site, settings } = this.props;

		if ( ! site || ! settings.items ) {
			return null;
		}

		return (
			<div>
				<SectionHeader>
					<EllipsisMenu position="bottom right">
						<PopoverMenuItem onClick={ this.props.onReverse }>
							{ this.props.translate( 'Reverse order' ) }
						</PopoverMenuItem>
					</EllipsisMenu>
				</SectionHeader>
				<SortableList onChange={ this.onOrderChanged }>
					{ settings.items.map( ( item ) => {
						return (
							<EditorMediaModalGalleryEditItem
								key={ item.ID }
								site={ site }
								item={ item }
								showRemoveButton={ settings.items.length > 1 } />
						);
					} ) }
				</SortableList>
			</div>
		);
	}
} );

export default localize( EditorMediaModalGalleryEdit );
