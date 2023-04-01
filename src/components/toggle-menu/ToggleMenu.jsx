import { StyledMenuIcon } from './styles';

const ToggleMenu = ({ open, setOpen }) => {
	return (
		<StyledMenuIcon
			onClick={() => setOpen(!open)}
			src={
				open
					? '/assets/shared/mobile/close.svg'
					: '/assets/shared/mobile/menu.svg'
			}
			alt='icon menu'
		/>
	);
};

export default ToggleMenu;
