import DefaultPage from 'components/DefaultPage';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import About from 'pages/About';
import Admin from 'pages/Admin';
import FoodMenu from 'pages/FoodMenu';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Plate from 'pages/Plate/intex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<DefaultPage />}>
						<Route index element={<Home />} />
						<Route path='cardapio' element={<FoodMenu />} />
						<Route path='sobre' element={<About />} />
					</Route>
					<Route path="/admin/:id" element={<Admin />} />
					<Route path='prato/:id' element={<Plate />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}
