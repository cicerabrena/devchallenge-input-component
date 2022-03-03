import Input from '..';

export default {
	component: Input,
	title: 'Input/Border',
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
