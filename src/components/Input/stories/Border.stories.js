import Input from '..';

export default {
	component: Input,
	title: 'Input/Border',
	argTypes: {
		error: {
			table: {
				disable: true,
			},
		},
		helperText: {
			table: {
				disable: true,
			},
		},
		startIcon: {
			table: {
				disable: true,
			},
		},
		endIcon: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = function Template(args) {
	const { error, disabled } = args;
	return <Input error={error} disabled={disabled} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
	error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
