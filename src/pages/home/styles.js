import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMobile = styled.img`
	width: 15rem;
	margin-left: auto;
	margin-right: auto;
`;

const StyledBoldLink = styled(Link)`
	font-weight: bold;
`;

const StyledSection = styled.article`
	padding: 0 1.5rem;
`;

const StyledDarkSection = styled.div`
	padding: 5rem 1.5rem;
	background-color: ${COLORS.darkBlue};
	background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
	background-position: center -650px;
	background-repeat: no-repeat;
`;

const StyledLogos = styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 3.125rem;
`;

const StyledMobiles = styled.img`
	width: 100%;
`;

export {
	StyledMobile,
	StyledBoldLink,
	StyledSection,
	StyledDarkSection,
	StyledLogos,
	StyledMobiles
};
