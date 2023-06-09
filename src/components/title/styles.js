import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledTitle = styled.h2`
	font-size: 2.25rem;
	margin-block: 0;
	letter-spacing: -0.25px;
	font-weight: lighter;
	text-align: center;
	color: ${({ light }) => (light ? COLORS.white : COLORS.darkBlue)};
`;

export { StyledTitle };
