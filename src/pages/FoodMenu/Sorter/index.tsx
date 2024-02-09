import { useState } from 'react';
import style from './Sorter.module.scss';
import options from './options.json';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface SorterProps {
	sort: string;
	setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sort, setSort }: SorterProps) {
	const [opened, setOpened] = useState(false);
    const sortName = sort && options.find((option) => option.value === sort)?.nome;

	return (
		<button
			onBlur={() => {
				setOpened(false);
			}}
			onClick={() => {
				setOpened(!opened);
			}}
			className={classNames({
				[style.sorter]: true,
				[style['sorter--active']]: sort !== '',
			})}>
			<span>{sortName || 'Ordenar Por'}</span>
			{opened ? (
				<MdKeyboardArrowUp size={22} />
			) : (
				<MdKeyboardArrowDown size={22} />
			)}
			<div
				className={classNames({
					[style.sorter__options]: true,
					[style['sorter__options--active']]: opened,
				})}>
				{options.map((option) => (
					<div
						className={style.sorter__option}
						key={option.value}
						onClick={() => {
							setSort(option.value);
							setOpened(false);
						}}>
						{option.nome}
					</div>
				))}
			</div>
		</button>
	);
}
