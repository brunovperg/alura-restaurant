import style from './Item.module.scss';
import itens from '../itens.json';
import classNames from 'classnames';

type ItemProps = (typeof itens)[0];

export default function Item(item: ItemProps) {
	const { title, description, category, size, serving, price, photo } = item;
	return (
		<div className={style.item}>
			<div className={style.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={style.item__description}>
				<div className={style.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className={style.item__tags}>
					<div
						className={classNames({
							[style.item__type]: true,
							[style[`item__type__${category.label.toLowerCase()}`]]: true,
						})}>
						{category.label}
					</div>
					<div className={style.item__portion}>{size} g</div>
					<div className={style.item__npeople}>
						Serve {serving} pessoa{serving === 1 ? '' : 's'}
					</div>
					<div className={style.item__value}>R$ {price.toFixed(2)}</div>
				</div>
			</div>
		</div>
	);
}
