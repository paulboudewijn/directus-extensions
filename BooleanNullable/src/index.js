import { defineDisplay } from '@directus/shared/utils';
import DisplayBooleanNullable from './boolean-nullable.vue';

export default defineDisplay({
	id: 'boolean-nullable',
	name: 'Boolean (nullable)',
	description: 'three-state boolean',
	types: ['boolean'],
	icon: 'check_box',
	handler: DisplayBooleanNullable,
	options: [
		{
			field: 'labelOn',
			name: '$t:displays.boolean.label_on',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'half',
				options: {
					placeholder: '$t:displays.boolean.label_on_placeholder',
				},
			},
		},
		{
			field: 'labelOff',
			name: '$t:displays.boolean.label_off',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'half',
				options: {
					placeholder: '$t:displays.boolean.label_off_placeholder',
				},
			},
		},
		{
			field: 'iconOn',
			name: '$t:displays.boolean.icon_on',
			type: 'string',
			meta: {
				interface: 'select-icon',
				width: 'half',
			},
			schema: {
				default_value: 'check',
			},
		},
		{
			field: 'iconOff',
			name: '$t:displays.boolean.icon_off',
			type: 'string',
			meta: {
				interface: 'select-icon',
				width: 'half',
			},
			schema: {
				default_value: 'close',
			},
		},
		{
			field: 'colorOn',
			name: '$t:displays.boolean.color_on',
			type: 'string',
			meta: {
				interface: 'select-color',
				width: 'half',
			},
			schema: {
				default_value: '#00C897',
			},
		},
		{
			field: 'colorOff',
			name: '$t:displays.boolean.color_off',
			type: 'string',
			meta: {
				interface: 'select-color',
				width: 'half',
			},
			schema: {
				default_value: '#B0BEC5',
			},
		},
	],
});