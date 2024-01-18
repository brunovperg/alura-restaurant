import { useEffect, useState } from 'react';
import Item from './Item';
import style from './Itens.module.scss';
import itens from './itens.json';

interface ItensProps {
	filter: number | null;
	search: string;
	sort: string;
}

export default function Itens({ filter, search, sort }: ItensProps) {
	const [list, setList] = useState(itens);

	useEffect(() => {
		// type and search filter
		const newList = itens.filter((item) => {
			if (filter !== null && item.category.id !== filter) {
				return false;
			}

			if (search !== '') {
				const regex = new RegExp(search, 'i');
				return regex.test(item.title) || regex.test(item.description);
			}

			return true;
		});
		//sort
		setList(() => {
			switch (sort) {
				case 'preco':
					return newList.sort((a, b) => a.price - b.price);
				case 'qtd_pessoas':
					return newList.sort((a, b) => a.serving - b.serving);
				case 'porcao':
					return newList.sort((a, b) => a.size - b.size);
				default:
					return newList;
			}
		});
	}, [filter, search, sort]);

	return (
		<div className={style.itens}>
			{list.map((item) => {
				{
					return <Item key={item.id} {...item} />;
				}
			})}
		</div>
	);
}
