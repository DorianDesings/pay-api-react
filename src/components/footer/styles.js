import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 22rem;
	padding-block: 2.5rem 3.5rem;
	color: ${COLORS.white};
	background-color: ${COLORS.darkBlue};
	background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
	background-position: center 200px;
	background-repeat: no-repeat;
`;

export { StyledFooter };
