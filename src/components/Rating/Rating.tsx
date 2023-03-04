import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

export const Rating = ({
    isEditable = false,
    rating,
    setRating,
    className,
    ...props
}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.pointer]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    tabindex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                        isEditable &&
                        setRating &&
                        (e.code === 'Enter' || e.code === 'Space') &&
                        changeDisplay(i + 1)
                    }
                />
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        constructRating(i);
        setRating(i);
    };

    return (
        <div
            className={styles.rating}
            {...props}
        >
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};
