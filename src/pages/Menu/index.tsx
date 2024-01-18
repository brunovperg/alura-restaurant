// import Button from 'components/Button';
import style from './Menu.module.scss';
import Logo from 'assets/logo.svg?react';
import SearchBox from './SearchBox';
import { useState } from 'react';
import Filters from './Filters';
import Sorter from './Sorter';
import Itens from './Itens';


export default function Menu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [sort, setSort] = useState('');

	return (
		<main>
			<nav className={style.menu}>
				<Logo />
			</nav>
			<header className={style.header}>
				<div className={style.header__text}>A casa do codigo e da Massa</div>
			</header>
			<section className={style.foodMenu}>
				<h3 className={style.foodMenu__title}>Cardápio</h3>
				<SearchBox search={search} setSearch={setSearch} />
				<div className={style.foodMenu__filters}>
					<Filters filter={filter} setFilter={setFilter} />
					<Sorter sort={sort} setSort={setSort}  />
				</div>
					<Itens filter={filter} search={search} sort={sort} />
			</section>
		</main>
	);
}
