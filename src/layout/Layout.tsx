import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

import { LayoutProps } from './Layout.props';
import { FC } from 'react';
import { AppContextProvider, IAppContext } from '@/context/app.context';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
    Component: FC<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};
