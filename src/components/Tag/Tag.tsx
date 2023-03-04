import { TagProps } from './TagProps';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({
    size = 'm',
    children,
    href,
    color = 'ghost',
    className,
    ...props
}: TagProps): JSX.Element => {
    const classes = cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
        [styles.grey]: color === 'grey',
    });

    return (
        <div
            className={classes}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : children}
        </div>
    );
};
