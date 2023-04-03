import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 3rem;
	border-radius: 1.5rem;
`;

const PrimaryButton = styled(StyledButton)`
	color: ${COLORS.white};
	background-color: ${COLORS.darkPink};
`;

const GhostButton = styled(StyledButton)`
	color: ${COLORS.white};
	border: 1px solid currentColor;
	background-color: transparent;
	width: 8.125rem;
	margin-left: auto;
	margin-right: auto;
`;

export { PrimaryButton, GhostButton };
