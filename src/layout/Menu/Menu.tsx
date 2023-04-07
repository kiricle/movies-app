import { AppContext } from '@/context/app.context';
import { useContext } from 'react';
import styles from './Menu.module.css';

export const Menu = () => {
    const { menu, setMenu } = useContext(AppContext);

    return (
        <ol>
            {menu.genres.map((m) => (
                <li key={m.id}>{m.name}</li>
            ))}
        </ol>
    );
};
