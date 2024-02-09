import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
export default function Admin() {
	const { id } = useParams();
	if (id !== 'buneco') {
		return <NotFound />;
	}
	return (
		<>
			<h1>Área Restrita {id}</h1>
			<Home />
		</>
	);
}
