import Input from '..';

export default {
	component: Input,
	title: 'Input/Size',
	argTypes: {
		helperText: {
			table: {
				disable: true,
			},
		},
		error: {
			table: {
				disable: true,
			},
		},
		disabled: {
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
		value: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = function Template(args) {
	const { size, fullWidth, multiline, row } = args;
	return (
		<Input size={size} fullWidth={fullWidth} multiline={multiline} row={row} />
	);
};

export const Sm = Template.bind({});
Sm.args = {
	size: 'sm',
};

export const Md = Template.bind({});
Md.args = {
	size: 'md',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	...Md.args,
	fullWidth: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
	...Md.args,
	multiline: true,
	row: 4,
};
