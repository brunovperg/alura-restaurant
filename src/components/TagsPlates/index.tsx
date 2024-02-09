import classNames from 'classnames';
import style from './TagsPlates.module.scss';
import { Plate } from 'types/Prato';

export default function TagsPlates({ category, size, serving, price }: Plate) {
	return (
		<div className={style.tags}>
			<div
				className={classNames({
					[style.tags__type]: true,
					[style[`tags__type__${category.label.toLowerCase()}`]]: true,
				})}>
				{category.label}
			</div>
			<div className={style.tags__portion}>{size} g</div>
			<div className={style.tags__npeople}>
				Serve {serving} pessoa{serving === 1 ? '' : 's'}
			</div>
			<div className={style.tags__value}>R$ {price.toFixed(2)}</div>
		</div>
	);
}
