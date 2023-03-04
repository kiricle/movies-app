import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
    appearance,
    arrow,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    const classes = cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
    });

    return (
        <button
            className={classes}
            {...props}
        >
            {children}
            {arrow !== undefined && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                        [styles.right]: arrow === 'right',
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
