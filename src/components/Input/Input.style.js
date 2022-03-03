import styled, { css } from 'styled-components';

const Style = {};

Style.Container = styled.div`
	${({ error, theme }) => css`
		display: flex;
		flex-direction: column;

		label {
			color: ${error ? theme.colors['red.600'] : theme.colors['gray.600']};
		}

		input {
			border: 1px solid
				${error ? theme.colors['red.600'] : theme.colors['gray.500']};
		}

		span {
			color: ${error ? theme.colors['red.600'] : theme.colors['gray.500']};
		}

		&:hover {
			label,
			span {
				color: ${theme.colors['gray.600']};
			}
		}

		&:focus-within {
			label,
			span {
				color: ${error ? theme.colors['red.600'] : theme.colors['blue.600']};
			}

			input {
				border: 1px solid
					${error ? theme.colors['red.600'] : theme.colors['blue.600']};
			}
		}
	`}
`;

Style.Label = styled.label`
	display: inline-block;
	margin-bottom: 0.3rem;
	font-size: 0.75rem;
	font-weight: 400;
`;

Style.Input = styled.input`
	${({ disabled, theme }) => css`
		width: 200px;
		height: 56px;
		border-radius: 0.5rem;
		padding: 0 0.6rem;
		font-family: 'Noto Sans JP';
		font-weight: 500;

		&::placeholder {
			font-size: 0.875rem;
		}

		&:hover {
			border: 1px solid
				${disabled
					? `${theme.colors['gray.300']}`
					: `${theme.colors['gray.600']}`};
		}

		&:disabled {
			pointer-events: none;
			border: 1px solid ${theme.colors['gray.300']};
			background-color: ${theme.colors['gray.200']};
		}

		&:focus {
			outline: none;

			label {
				color: ${theme.colors['red.600']};
			}
		}
	`}
`;

Style.Span = styled.span`
	display: inline-block;
	margin-top: 0.4rem;
	font-size: 0.625rem;
`;

export default Style;
