import { BUTTONS } from '../../constants/buttons';
import { GhostButton, PrimaryButton, SubmitButton } from './styles';

const Button = ({ type, children }) => {
	if (type === BUTTONS.PRIMARY)
		return <PrimaryButton>{children}</PrimaryButton>;

	if (type === BUTTONS.GHOST) return <GhostButton>{children}</GhostButton>;

	if (type === BUTTONS.SUBMIT) return <SubmitButton>{children}</SubmitButton>;
};

export default Button;
