import { useState } from 'react';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import ToggleMenu from '../toggle-menu/ToggleMenu';
import { HeaderTop } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<HeaderTop>
				<Logo
					setOpen={setOpen}
					src='/assets/shared/desktop/logo.svg'
					alt='logo'
				/>
			</HeaderTop>
			<ToggleMenu open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</header>
	);
};

export default Header;
