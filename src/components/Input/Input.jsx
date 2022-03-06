import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

import Style from './Input.style';

const Input = function inputComponent({
	error,
	helperText,
	startIcon,
	endIcon,
	value,
	size,
	fullWidth,
	multiline,
	row,
	disabled,
}) {
	let input = (
		<Style.Input
			fullWidth={fullWidth}
			size={size}
			multiline={multiline}
			row={row}
			placeholder="Placeholder"
			disabled={disabled}
			defaultValue={value}
		/>
	);

	if (startIcon || endIcon) {
		input = (
			<Style.InputGroup>
				{startIcon && <Icon className="start">{startIcon}</Icon>}
				<Style.Input
					fullWidth={fullWidth}
					size={size}
					multiline={multiline}
					row={row}
					placeholder="Placeholder"
					disabled={disabled}
					className="hasIcon"
					defaultValue={value}
				/>
				{endIcon && <Icon className="end">{endIcon}</Icon>}
			</Style.InputGroup>
		);
	}

	if (multiline) {
		input = <Style.Textarea row={row} placeholder="Placeholder" />;
	}

	return (
		<Style.Container error={error} disabled={disabled}>
			<Style.Label>Label</Style.Label>
			{input}
			{helperText && <Style.Small>{helperText}</Style.Small>}
		</Style.Container>
	);
};

export default Input;

Input.propTypes = {
	error: PropTypes.bool,
	helperText: PropTypes.string,
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	value: PropTypes.string,
	size: PropTypes.string,
	fullWidth: PropTypes.bool,
	multiline: PropTypes.bool,
	row: PropTypes.number,
	disabled: PropTypes.bool,
};

Input.defaultProps = {
	error: false,
	helperText: '',
	startIcon: '',
	endIcon: '',
	value: '',
	size: 'md',
	fullWidth: false,
	multiline: false,
	row: 0,
	disabled: false,
};
