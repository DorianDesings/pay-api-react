import InputEmail from '../../components/input-email/InputEmail';
import Title from '../../components/title/Title';
import { StyledMobile } from './styles';

const Home = () => {
	return (
		<>
			<StyledMobile
				src='/assets/home/desktop/illustration-phone-mockup.svg'
				alt='mobile mockup'
			/>
			<Title title='Start building with our APIs for absolutely free.' />
			<InputEmail />
		</>
	);
};

export default Home;