import { CgSearch } from 'react-icons/cg';
import style from './SearchBox.module.scss';

interface SearchBoxProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBox({ search, setSearch }: SearchBoxProps) {
	return (
		<div className={style.SearchBox}>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Buscar'
			/>
            <CgSearch size={20}
            color='#4C4D5E'
            />
		</div>
	);
}
