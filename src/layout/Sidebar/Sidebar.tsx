import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps) => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};
