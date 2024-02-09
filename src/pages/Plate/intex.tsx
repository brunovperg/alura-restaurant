import style from './Plate.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import menu from 'data/menu.json';
import TagsPlates from 'components/TagsPlates';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function Plate() {
	const { id } = useParams();

	const plate = menu.find((plate) => plate.id === Number(id));

	const navigate = useNavigate();

	if (!plate) {
		return <NotFound />;
	}

	return (
		<Routes>
			<Route path='*' element={<DefaultPage />}>
				<Route
					index
					element={
						<>
							<button
								className={style.back}
								onClick={() => {
									navigate(-1);
								}}>
								{'< Voltar'}
							</button>
							<section className={style.container}>
								<h1 className={style.title}>{plate.title}</h1>
								<div className={style.image}>
									<img src={plate.photo} alt={plate.title} />
								</div>
								<div className={style.content}>
									<p className={style.content__description}>
										{plate.description}
									</p>
									<TagsPlates {...plate} />
								</div>
							</section>
						</>
					}
				/>
			</Route>
		</Routes>
	);
}
