import Button from '../../components/button/Button';
import { StyledCompanyLogo } from '../../components/companyLogo/styles';
import HeaderTop from '../../components/header-top/HeaderTop';
import InputEmail from '../../components/input-email/InputEmail';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { COMPANY_LOGOS } from '../../constants/company-logos';
import { FEATURES } from '../../constants/features';
import {
	StyledBoldLink,
	StyledDarkSection,
	StyledLogos,
	StyledMobile,
	StyledMobiles,
	StyledSection
} from './styles';

const Home = () => {
	return (
		<>
			<StyledSection>
				<HeaderTop location='home' />
				<StyledMobile
					src='/assets/home/desktop/illustration-phone-mockup.svg'
					alt='mobile mockup'
				/>
				<Title title='Start building with our APIs for absolutely free.' />
				<InputEmail />
				<Text>
					Have any questions?{' '}
					<StyledBoldLink to='/contact'>Contact Us</StyledBoldLink>
				</Text>
			</StyledSection>
			<StyledDarkSection>
				<StyledLogos>
					{COMPANY_LOGOS.map(logo => (
						<StyledCompanyLogo key={logo.id} src={logo.logo} alt={logo.alt} />
					))}
				</StyledLogos>
				<Title light={true} title='Who we work with.' />
				<Text light={true}>
					Today, millions of people around the world have successfully connected
					their accounts to apps they love using our API. We provide developers
					with the tools they need to create easy and accessible experiences for
					their users.
				</Text>
				<Button type={BUTTONS.GHOST}>About US</Button>
			</StyledDarkSection>
			<StyledSection>
				<StyledMobiles src='/assets/home/desktop/illustration-easy-to-implement.svg' />
				<Title light={false} title='Easy to implement' />
				<Text light={false}>
					Our API comes with just a few lines of code. You’ll be up and running
					in no time. We built our documentation page to integrate payments
					functionality with ease.
				</Text>
				<StyledMobiles src='/assets/home/desktop/illustration-simple-ui.svg' />
				<Title light={false} title='Simple UI & UX' />
				<Text light={false}>
					Our pre-built form is easy to integrate in your app or website’s
					checkout flow and designed to optimize conversion.
				</Text>
				{FEATURES.map(feauture => (
					<div key={feauture.id}>
						<img src={feauture.icon} alt='' />
						<h2>{feauture.title}</h2>
						<p>{feauture.text}</p>
					</div>
				))}
				<Title light={false} title='Ready to start?' />
				<InputEmail />
			</StyledSection>
		</>
	);
};

export default Home;
