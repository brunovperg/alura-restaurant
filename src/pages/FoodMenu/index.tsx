import style from './FoodMenu.module.scss';
import SearchBox from './SearchBox';
import { useState } from 'react';
import Filters from './Filters';
import Sorter from './Sorter';
import Itens from './Itens';
import stylesTheme from 'styles/Theme.module.scss';

export default function FoodMenu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [sort, setSort] = useState('');

	return (
		<section className={style.foodMenu}>
			<h3 className={stylesTheme.title}>Cardápio</h3>
			<SearchBox search={search} setSearch={setSearch} />
			<div className={style.foodMenu__filters}>
				<Filters filter={filter} setFilter={setFilter} />
				<Sorter sort={sort} setSort={setSort} />
			</div>
			<Itens filter={filter} search={search} sort={sort} />
		</section>
	);
}
