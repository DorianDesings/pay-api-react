import { Link } from 'react-router-dom';
import { MENUS } from '../../constants/menus';
import { SOCIAL } from '../../constants/social';
import { capitalize } from '../../utils/capitalize';
import Logo from '../logo/Logo';
import { StyledFooter } from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<Logo src='/assets/shared/desktop/logo-white.svg' alt='logo' />
			<nav>
				<ul>
					{MENUS.map(menu => (
						<li key={menu.id}>
							<Link to={menu.text}>{capitalize(menu.text)}</Link>
						</li>
					))}
				</ul>
			</nav>
			<ul>
				{SOCIAL.map(icon => (
					<li key={icon.id}>
						<a href='#'>
							<img src={icon.icon} alt='social icon' />
						</a>
					</li>
				))}
			</ul>
		</StyledFooter>
	);
};

export default Footer;
