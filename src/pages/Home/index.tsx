import menu from 'data/menu.json';
import style from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/our_home.png';
import { useNavigate } from 'react-router-dom';
import { Plate } from 'types/Prato';

export default function Home() {
	let recomendedPlates = [...menu];
	recomendedPlates = recomendedPlates
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);

	const navigate = useNavigate();

	function redirectDetails(plate: Plate) {
		navigate(`/prato/${plate.id}`, { state: { plate } });
	}
	return (
		<section>
			<h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
			<div className={style.recomendeds}>
				{recomendedPlates.map((item) => (
					<div key={item.id} className={style.recomended}>
						<div className={style.recomended__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button
							className={style.recomended__button}
							onClick={() => redirectDetails(item)}>
							Ver Mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTheme.title}>Nossa Casa</h3>
			<div className={style.ourPlace}>
				<img src={ourHome} alt='Casa do Aluroni' />
				<div className={style.ourPlace__address}>
					Rua Vergueiro, 3165 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}
