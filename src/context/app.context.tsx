import { Genre, GenreList } from '@/interfaces/menu.interface';
import { createContext, ReactNode, useState } from 'react';

export interface IAppContext {
    menu: GenreList;
    setMenu?: (newMenu: GenreList) => void;
}

export const AppContext = createContext<IAppContext>({ menu: { genres: [] } });

export const AppContextProvider = ({
    menu,
    children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
    const [menuState, setMenuState] = useState<GenreList>(menu);

    const setMenu = (newMenu: GenreList) => {
        setMenuState(newMenu);
    };

    return (
        <AppContext.Provider value={{ menu: menuState, setMenu }}>
            {children}
        </AppContext.Provider>
    );
};
