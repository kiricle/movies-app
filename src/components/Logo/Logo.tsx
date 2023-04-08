import Link from 'next/link';
import LogoSVG from '@/../public/logo.svg';
import styles from './Logo.module.css';

export const Logo = (): JSX.Element => {
    return (
        <Link href='/'>
            <LogoSVG className={styles.logo}/>
        </Link>
    );
};
