import { Link } from 'react-router-dom';
import style from './Menu.module.scss';
import Logo from 'assets/logo.svg?react';

export default function Menu() {
	const routes = [
		{
			label: 'Início',
			to: '/',
		},
		{
			label: 'Cardapio',
			to: '/cardapio',
		},
		{
			label: 'Sobre',
			to: '/sobre',
		},
	];

	return (
		<nav className={style.menu}>
			<Link to={'/'}>
			<Logo />
			</Link>
			<ul className={style.menu__list}>
				{routes.map((route, index) => (
					<li key={index} className={style.menu__link}>
						<Link to={route.to}>{route.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
