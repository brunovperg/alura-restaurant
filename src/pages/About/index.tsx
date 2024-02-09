import style from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import house from 'assets/about/casa.png';
import pasta1 from 'assets/about/massa1.png';
import pasta2 from 'assets/about/massa2.png';
const images = [pasta1, pasta2];
export default function About() {
	return (
		<section>
			<h3 className={stylesTheme.title}>Sobre</h3>
			<div className={style.about}>
				<img src={house} alt='Casa Aluroni' />
				<div className={style.about__text}>
					<p>
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
						Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
						pelos ingredientes tradicionais da culinária Italiana, frescos e de
						excelente qualidade para que sua experiência seja ainda mais
						intensa!
					</p>
					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo
						com o seu gosto!
					</p>
					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de
						vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
						carne ou massa!
					</p>
				</div>
			</div>
			<div className={style.images}>
				{images.map((image, index) => (
					<div key={index} className={style.images__image}>
						<img src={image} alt='Massa' />
					</div>
				))}
			</div>
		</section>
	);
}
