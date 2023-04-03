import { StyledTitle } from './styles';

const Title = ({ title, light }) => {
	return <StyledTitle light={light}>{title}</StyledTitle>;
};

export default Title;
