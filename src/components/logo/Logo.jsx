import { Link } from 'react-router-dom';

const Logo = ({ src, alt, setOpen }) => (
	<Link to='/' onClick={() => setOpen(false)}>
		<img src={src} alt={alt} />
	</Link>
);

export default Logo;
