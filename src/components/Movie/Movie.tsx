import { convertRatingIntoStars } from '@/utils/convertRatingIntoStars';
import Image from 'next/image';
import { Button } from '../Button/Button';
import styles from './Movie.module.css';
import { MovieProps } from './Movie.props';

export const Movie = ({
    id,
    genre_ids,
    title,
    vote_average,
    poster_path,
    overview,
}: MovieProps): JSX.Element => {
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

    function truncateOverview(overview: string): string {
        return overview.length < 500
            ? overview
            : `${overview.substring(0, 500).trim()}...`;
    }

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
                    <p className={styles.overview}>
                        {truncateOverview(overview)}
                    </p>
                    <Button
                        appearance="primary"
                        className={styles.btn}
                    >
                        Learn more
                    </Button>
                </div>
            </section>
        </>
    );
};
