import style from './Filters.module.scss';
import filters from './filters.json';
import classNames from 'classnames';

type IFilter = (typeof filters)[0];

interface FiltersProps {
	filter: number | null;
	setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: FiltersProps) {
	function selectFilter(option: IFilter) {
		if (filter === option.id) return setFilter(null);

		return setFilter(option.id);
	}
	return (
		<div className={style.filters}>
			{filters.map((option: IFilter) => (
				<button
					key={option.id}
					className={classNames({[style.filters__filter]: true,
					[style['filters__filter--active']]: filter === option.id,
					})
					}
					onClick={() => selectFilter(option)}>
					{option.label}
				</button>
			))}
		</div>
	);
}
