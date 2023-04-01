import { StyledButton, StyledInput, StyledInputField } from './styles';

const InputEmail = () => {
	return (
		<StyledInputField>
			<StyledInput type='text' placeholder='Enter email address' />
			<StyledButton href='#'>Shedule a Demo</StyledButton>
		</StyledInputField>
	);
};

export default InputEmail;
