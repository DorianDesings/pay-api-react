import { MENUS } from '../../constants/menus';
import { capitalize } from '../../utils/capitalize';
import { StyledMenu, StyledMenuItem, StyledNav, StyledNavLink } from './styles';

const Menu = ({ open, setOpen }) => {
	return (
		<StyledNav open={open}>
			<StyledMenu>
				{MENUS.map(menu => (
					<StyledMenuItem key={menu.id}>
						<StyledNavLink onClick={() => setOpen(false)} to={menu.text}>
							{capitalize(menu.text)}
						</StyledNavLink>
					</StyledMenuItem>
				))}
			</StyledMenu>
		</StyledNav>
	);
};

export default Menu;
