import { useState } from 'react';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import ToggleMenu from '../toggle-menu/ToggleMenu';
import { StyledHeader } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledHeader>
			<Logo
				setOpen={setOpen}
				src='/assets/shared/desktop/logo.svg'
				alt='logo'
			/>
			<ToggleMenu open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</StyledHeader>
	);
};

export default Header;
