import styled, { css } from 'styled-components';

const Style = {};

Style.Container = styled.div`
	${({ error, theme }) => css`
		display: flex;
		flex-direction: column;

		${Style.Label} {
			color: ${error ? theme.colors['red.600'] : theme.colors['gray.600']};
		}

		span, ${Style.Small} {
			color: ${error ? theme.colors['red.600'] : theme.colors['gray.500']};
		}

		${Style.Input} {
			border: 1px solid
				${error ? theme.colors['red.600'] : theme.colors['gray.500']};

			&:not(.hasIcon):hover {
				border: 1px solid ${theme.colors['gray.600']};
			}
		}

		&:hover {
			${Style.Label}, ${Style.Small} {
				color: ${theme.colors['gray.600']};
			}

			${Style.InputGroup} {
				border: 1px solid
					${error ? theme.colors['red.600'] : theme.colors['gray.600']};
			}
		}

		&:focus-within {
			${Style.Label},
			span {
				color: ${error ? theme.colors['red.600'] : theme.colors['blue.600']};
			}

			${Style.Small} {
				color: ${error ? theme.colors['red.600'] : theme.colors['blue.600']};
			}

			${Style.Input}:not(.hasIcon) {
				border: 1px solid
					${error ? theme.colors['red.600'] : theme.colors['blue.600']};
			}

			${Style.InputGroup} {
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
	${({ theme }) => css`
		width: 200px;
		height: 56px;
		border-radius: 0.5rem;
		padding: 0 0.6rem;
		font-family: 'Noto Sans JP';
		font-weight: 500;

		border: none;
		outline: none;

		&::placeholder {
			font-size: 0.875rem;
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

Style.InputGroup = styled.div`
	max-width: fit-content;
	display: inline-flex;
	align-items: center;
	border-radius: 0.5rem;

	border: 1px solid ${({ theme }) => theme.colors['gray.500']};
	
	input {
		width: 120px;
		height: 50px;
		border: none !important;
	}
	
	span {
		&.start {
			margin-left: 0.6rem;
		}
		&.end {
			margin-right: 0.6rem;
		}
	}
`;

Style.Small = styled.small`
	display: inline-block;
	margin-top: 0.4rem;
	font-size: 0.625rem;
	color: #828282;
`;

export default Style;
