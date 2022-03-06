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
		size: {
			table: {
				disable: true
			}
		}
	},
};

const Template = function Template(args) {
	const { error, disabled, value } = args;
	return <Input error={error} disabled={disabled} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
	value: "Text"
};

export const Error = Template.bind({});
Error.args = {
	error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
