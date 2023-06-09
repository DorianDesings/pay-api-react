import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledInputField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-block: 1.5rem;
`;

const StyledInput = styled.input`
	height: 3rem;
	padding-left: 1.65rem;
	border: none;
	border-radius: 1.5rem;
	box-shadow: 10px 10px 25px ${COLORS.transparentBlue};
`;

export { StyledInputField, StyledInput };
