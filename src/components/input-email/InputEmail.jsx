import { BUTTONS } from '../../constants/buttons';
import Button from '../button/Button';
import { StyledInput, StyledInputField } from './styles';

const InputEmail = () => {
	return (
		<StyledInputField>
			<StyledInput type='text' placeholder='Enter email address' />
			<Button type={BUTTONS.PRIMARY} href='#'>
				Shedule a Demo
			</Button>
		</StyledInputField>
	);
};

export default InputEmail;
