import Input from '..';

export default {
	component: Input,
	title: 'Input/Icon',
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
	},
};

const Template = function Template(args) {
	const { startIcon, endIcon } = args;
	return <Input startIcon={startIcon} endIcon={endIcon} />;
};

export const Start = Template.bind({});
Start.args = {
	startIcon: 'phone',
};

export const End = Template.bind({});
End.args = {
	endIcon: 'lock',
};
