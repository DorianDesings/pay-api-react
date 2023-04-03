import { BUTTONS } from '../../constants/buttons';
import { GhostButton, PrimaryButton } from './styles';

const Button = ({ type, children }) => {
	if (type === BUTTONS.PRIMARY)
		return <PrimaryButton>{children}</PrimaryButton>;
	if (type === BUTTONS.GHOST) return <GhostButton>{children}</GhostButton>;
};

export default Button;
