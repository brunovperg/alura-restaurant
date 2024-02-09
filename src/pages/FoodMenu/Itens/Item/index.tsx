import TagsPlates from 'components/TagsPlates';
import style from './Item.module.scss';
import { Menu } from 'types/Prato';
import { useNavigate } from 'react-router-dom';

type ItemProps = Menu[0];

export default function Item(item: ItemProps) {
	const { id, title, description, photo } = item;
	const navigate = useNavigate(); 
	return (
		<div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
			<div className={style.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={style.item__description}>
				<div className={style.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<TagsPlates {...item} />
			</div>
		</div>
	);
}
