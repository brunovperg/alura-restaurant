import classNames from 'classnames';
import style from './NotFound.module.scss';
import NotFoundImage from 'assets/not_found.svg?react';
import stylesTheme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
   const navigate = useNavigate();
	return (
		<div
			className={classNames({
				[style.container]: true,
				[stylesTheme.container]: true,
			})}>
            <div className={style.back}>
               <button onClick={() => {
                  navigate(-1);
               }}>
                  {'< Voltar'}
               </button>
               </div>
			<NotFoundImage />
		</div>
	);
}
