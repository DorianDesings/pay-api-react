import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledText = styled.p`
	text-align: center;
	line-height: 1.75rem;
	color: ${({ light }) => (light ? COLORS.white : COLORS.darkBlue)};
`;

export { StyledText };
