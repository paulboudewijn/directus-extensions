import { defineInterface } from '@directus/shared/utils';
<<<<<<< HEAD:src/BooleanExample/index.ts
import InterfaceBooleanExample from './boolean.vue';

export default defineInterface({
	id: 'boolean-example',
	name: '$t:interfaces.boolean.toggle',
	description: '$t:interfaces.boolean.description',
	icon: 'check_box',
	component: InterfaceBooleanExample,
=======
import InterfaceBooleanNullable from './boolean-nullable.vue';

export default defineInterface({
	id: 'boolean',
	name: '$t:interfaces.boolean.nullable',
	description: '$t:interfaces.boolean.description',
	icon: 'check_box',
	component: InterfaceBooleanNullable,
>>>>>>> 69c6771784f280f893f4b99dab5667989e3a464c:src/BooleanNullable/index.js
	types: ['boolean'],
	group: 'selection',
	recommendedDisplays: ['boolean'],
	options: [
		{
			field: 'iconOn',
			name: '$t:icon_on',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-icon',
			},
			schema: {
				default_value: 'check_box',
			},
		},
		{
			field: 'iconOff',
			name: '$t:icon_off',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-icon',
			},
			schema: {
				default_value: 'check_box_outline_blank',
			},
		},
		{
			field: 'label',
			name: '$t:label',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
				options: {
					placeholder: '$t:interfaces.boolean.label_placeholder',
				},
			},
			schema: {
				default_value: '$t:interfaces.boolean.label_default',
			},
		},
		{
			field: 'color',
			name: '$t:color',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-color',
			},
			schema: {
				default_value: '#00C897',
			},
		},
	],
});
