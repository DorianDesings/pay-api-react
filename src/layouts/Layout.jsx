import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<footer>FOOTER</footer>
		</>
	);
};

export default Layout;
