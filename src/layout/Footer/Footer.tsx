import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ ...props }: FooterProps) => {
    return (
        <footer {...props}>
            <span className={styles.copyright}>
                OwlTop &copy; 2022-{new Date().getFullYear()} Все права защищены
            </span>
            <li className={styles.footer__list}>
                <a
                    href="#"
                    className={styles.footer__link}
                >
                    Пользовательское соглашение
                </a>
                <a
                    href="#"
                    className={styles.footer__link}
                >
                    Политика конфиденциальности
                </a>
            </li>
        </footer>
    );
};
