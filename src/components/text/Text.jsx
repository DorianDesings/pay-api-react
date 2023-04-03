import { StyledText } from './styles';

const Text = ({ light, children }) => {
	return <StyledText light={light}>{children}</StyledText>;
};

export default Text;
