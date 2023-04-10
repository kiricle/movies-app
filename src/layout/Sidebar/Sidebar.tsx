import { Logo } from '@/components/Logo/Logo';
import { Menu } from '../Menu/Menu';
import { SearchBar } from './SearchBar/SearchBar';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps) => {
    return (
        <aside {...props}>
            <Logo />
            <SearchBar />
            <Menu />
        </aside>
    );
};
