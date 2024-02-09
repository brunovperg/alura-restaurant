import style from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';

export default function DefaultPage() {
	return (
		<>
			<header className={style.header}>
				<div className={style.header__text}>A casa do Código e da Massa</div>
			</header>
			<div className={stylesTheme.container}>
				<Outlet />
			</div>
		</>
	);
}
