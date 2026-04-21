import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../widgets';
import s from './MainLayout.module.scss';

export default function MainLayout() {
	return (
		<div className={s.wrapper}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
