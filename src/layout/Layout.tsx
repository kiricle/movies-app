import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

import { LayoutProps } from './Layout.props';
import { FC } from 'react';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(
    Component: FC<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
