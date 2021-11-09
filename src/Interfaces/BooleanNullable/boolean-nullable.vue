<template>
	<v-checkbox block
				:icon-on="iconOn"
				:icon-off="iconOff"
				:label="label"
				:model-value="value"
				:indeterminate="value === null"
				:disabled="disabled"
				:style="{
					'--v-checkbox-color': color,
				}"
				@click.stop="toggleInput" />
</template>

<script lang="ts">
    import { useI18n } from 'vue-i18n';
	import { defineComponent } from 'vue';

	export default defineComponent({
		props: {
			value: {
				type: Boolean,
				default: null,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			label: {
				type: String,
				default: null
			},
			iconOn: {
				type: String,
				default: 'check_box',
			},
			iconOff: {
				type: String,
				default: 'check_box_outline_blank',
			},
			color: {
				type: String,
				default: '#00C897',
			},
		},
		emits: ['input'],
		setup(props, context) {
            const { t } = useI18n();

			const toggleInput = () => {
				if (props.value === null) {
					context.emit('input', true);
				} else if (props.value === false) {
					context.emit('input', null);
				} else {
					context.emit('input', false);
				}
			};

			props.label = t('enabled');

            return { t, toggleInput };
		},
	});
</script>
