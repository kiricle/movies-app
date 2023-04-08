import { MovieProps } from './Movie.props';
import styles from './Movie.module.css';
import Image from 'next/image';
import { Rating } from '../Rating/Rating';
import { Button } from '../Button/Button';

export const Movie = ({
    id,
    genre_ids,
    title,
    vote_average,
    poster_path,
    overview,
}: MovieProps): JSX.Element => {
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

    const convertRatingIntoStars = (rating: number): JSX.Element => {
        const stars = Math.round(rating / 2);

        return <Rating rating={stars} />;
    };

    return (
        <>
            <section className={styles.movie}>
                {poster_path && (
                    <Image
                        className={styles.poster}
                        src={poster}
                        alt={title}
                        width={400}
                        height={400}
                    />
                )}
                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.rating}>
                        {convertRatingIntoStars(vote_average)}
                    </div>
                    <p className={styles.overview}>{overview}</p>
                    <Button appearance="primary" className={styles.btn}>Learn more</Button>
                </div>
            </section>
        </>
    );
};
