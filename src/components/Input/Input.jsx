import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

import Style from './Input.style';

const Input = function inputComponent({
	error,
	helperText,
	startIcon,
	endIcon,
	disabled,
}) {
	return (
		<Style.Container error={error} disabled={disabled}>
			<Style.Label>Label</Style.Label>
			{startIcon || endIcon ? (
				<Style.InputGroup className="input-group">
					{startIcon && <Icon className="start">{startIcon}</Icon>}
					<Style.Input
						placeholder="Placeholder"
						disabled={disabled}
						className="hasIcon"
					/>
					{endIcon && <Icon className="end">{endIcon}</Icon>}
				</Style.InputGroup>
			) : (
				<Style.Input placeholder="Placeholder" disabled={disabled} />
			)}
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
	disabled: PropTypes.bool,
};

Input.defaultProps = {
	error: false,
	helperText: '',
	startIcon: '',
	endIcon: '',
	disabled: false,
};
