import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps) => {
    return (
        <aside {...props}>
            <Menu />
        </aside>
    );
};
