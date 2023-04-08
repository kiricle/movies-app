import { AppContext } from '@/context/app.context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import cn from 'classnames';

import styles from './Menu.module.css';

export const Menu = () => {
    const { menu, setMenu } = useContext(AppContext);
    const router = useRouter();

    return (
        <ol className={styles.menu}>
            {menu &&
                menu.genres.map((m) => (
                    <li
                        className={styles.menu__item}
                        key={m.id}
                    >
                        <Link
                            className={cn(styles.menu__link, {
                                [styles.menu__link_active]:
                                    decodeURIComponent(router.asPath) ===
                                    `/movies/${m.name.toLowerCase()}`,
                            })}
                            href={`/movies/${m.name.toLowerCase()}`}
                        >
                            {m.name}
                        </Link>
                    </li>
                ))}
        </ol>
    );
};
