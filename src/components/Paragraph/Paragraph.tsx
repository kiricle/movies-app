import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
    size = 'm',
    children,
    className,
    ...rest
}: ParagraphProps): JSX.Element => {
    const sizeClass = cn('p', className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
    });

    return (
        <p
            className={sizeClass}
            {...rest}
        >
            {children}
        </p>
    );
};
