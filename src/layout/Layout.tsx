import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

import { LayoutProps } from "./Layout.props";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};
