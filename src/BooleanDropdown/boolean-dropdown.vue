<template>
	<v-notice v-if="!choices" type="warning">
		{{ t('choices_option_configured_incorrectly') }}
	</v-notice>
	<v-select v-else
			  :model-value="value"
			  :items="choices"
			  :disabled="disabled"
			  :show-deselect="allowNone"
			  :placeholder="placeholder"
			  @update:model-value="$emit('input', $event)">
		<template v-if="icon" #prepend>
			<v-icon :name="icon" />
		</template>
	</v-select>
</template>

<script lang="ts">
    import { useI18n } from 'vue-i18n';
	import { defineComponent, PropType } from 'vue';

	type Option = {
		text: string;
		value: string | number | boolean;
		children?: Option[];
	};

	export default defineComponent({
		props: {
			disabled: {
				type: Boolean,
				default: false,
			},
			value: {
				type: String,
				default: null,
			},
            labelOn: {
                type: String,
                default: "on",
            },
            labelOff: {
                type: String,
                default: "off",
            },
			icon: {
				type: String,
				default: null,
			},
			allowNone: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
                default: null
			},
		},
        data(props) {
            const { t } = useI18n();

			return {
                choices: [{ "value": true, "text": props.labelOn }, { "value": false, "text": props.labelOff }]
            }
		},
        setup(props) {
			const { t } = useI18n();

            return { t };
        },
		emits: ['input'],
	});
</script>
