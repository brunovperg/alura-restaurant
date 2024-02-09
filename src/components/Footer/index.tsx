import style from './Footer.module.scss';
import Logo from 'assets/logo.svg?react';
export default function Footer() {
	return (
		<footer className={style.footer}>
			<Logo />
		</footer>
	);
}
