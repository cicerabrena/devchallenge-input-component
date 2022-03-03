import Input from '..';

export default {
	component: Input,
	title: 'Input/Text',
	argTypes: {
		disabled: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = function Template(args) {
	const { helperText, error } = args;
	return <Input helperText={helperText} error={error} />;
};

export const Default = Template.bind({});
Default.args = {
	helperText: 'Some interesting text',
};

export const WithError = Template.bind({});
WithError.args = {
	...Default.args,
	error: true,
};
