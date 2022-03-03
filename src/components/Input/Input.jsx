import PropTypes from 'prop-types';

import Style from './Input.style';

const Input = function inputComponent({ error, disabled }) {
	return (
		<Style.Container error={error}>
			<Style.Label>Label</Style.Label>
			<Style.Input
				placeholder="Placeholder"
				error={error}
				disabled={disabled}
			/>
			<Style.Span />
		</Style.Container>
	);
};

export default Input;

Input.propTypes = {
	error: PropTypes.bool,
	disabled: PropTypes.bool,
};

Input.defaultProps = {
	error: false,
	disabled: false,
};
