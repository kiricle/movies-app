import { Logo } from '@/components/Logo/Logo';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps) => {
    return (
        <aside {...props}>
            <Logo />
            <Menu />
        </aside>
    );
};
