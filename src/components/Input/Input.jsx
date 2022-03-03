import PropTypes from 'prop-types';

import Style from './Input.style';

const Input = function inputComponent({ error, helperText, disabled }) {
	return (
		<Style.Container error={error} disabled={disabled}>
			<Style.Label>Label</Style.Label>
			<Style.Input
				placeholder="Placeholder"
				disabled={disabled}
			/>
			{helperText && <Style.Span>{helperText}</Style.Span>}
		</Style.Container>
	);
};

export default Input;

Input.propTypes = {
	error: PropTypes.bool,
	helperText: PropTypes.string,
	disabled: PropTypes.bool,
};

Input.defaultProps = {
	error: false,
	helperText: '',
	disabled: false,
};
