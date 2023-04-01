import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	width: 300px;
	height: 100vh;
	padding-top: 6rem;
	color: ${COLORS.white};
	background-color: ${COLORS.darkBlue};
	background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
	background-position: center -533px;
	background-repeat: no-repeat;
	transition: transform 0.3s;
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
	padding: 2.6rem;
	border-top: 1px solid ${COLORS.transparentWhite};
`;

const StyledMenuItem = styled.li`
	text-align: center;
	font-size: 1.25rem;
`;

const StyledNavLink = styled(NavLink)`
	font-weight: bold;
`;

export { StyledNav, StyledMenu, StyledMenuItem, StyledNavLink };
