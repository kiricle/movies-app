import { Htag, Paragraph, Tag } from '@/components';
import { GenreList } from '@/interfaces/menu.interface';
import { Movie } from '@/interfaces/Movie.interface';
import { withLayout } from '@/layout/Layout';
import { convertRatingIntoStars } from '@/utils/convertRatingIntoStars';
import axios from 'axios';
import { GetServerSideProps, GetStaticPropsContext } from 'next';
import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import styles from './MoviePage.module.css';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

function MoviePage({ menu, movie, credits }: MoviePageProps): JSX.Element {
    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    const profileBaseURL = 'https://image.tmdb.org/t/p/original/';

    return (
        <article className={styles.movie_article}>
            <Image
                src={poster}
                width={400}
                height={400}
                alt={`${movie.title} poster`}
            />
            <section className={styles.info}>
                <Htag tag="h1">{movie.title}</Htag>
                <div className={styles.meta_info}>
                    <div className={styles.date}>
                        Release date:
                        <Tag color="green">{movie.release_date}</Tag>
                    </div>
                    <div className={styles.rating}>
                        Rating by {movie.vote_count} people&apos;s reviews:
                        {convertRatingIntoStars(movie.vote_average)}
                    </div>
                </div>
                <div className={styles.genres_list}>
                    {movie.genres.map((g) => (
                        <Tag
                            key={g.id}
                            color="primary"
                        >
                            {g.name}
                        </Tag>
                    ))}
                </div>
                <Paragraph className={styles.overview}>
                    {movie.overview}
                </Paragraph>
            </section>

            <section className={styles.cast}>
                <Htag tag="h2">Cast</Htag>
                <div className={styles.cast_list}>
                    {credits.cast.map((c) => (
                        <div key={c.id} className={styles.cast_card}>
                            <Image
                                src={`${profileBaseURL}${c.profile_path}`}
                                width={138}
                                height={175}
                                alt={`${c.name} profile`}
                            />
                            <div className={styles.cast_name}>{c.name}</div>
                            <div>{c.character}</div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}

export default withLayout(MoviePage);

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params)
        return {
            notFound: true,
        };
    try {
        const genresURL = new URL(
            `${process.env.NEXT_PUBLIC_DOMAIN}/genre/movie/list`
        );

        const { data: menu } = await axios.get<GenreList>(
            genresURL.toString(),
            {
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                },
            }
        );

        const movieURL = new URL(
            `${process.env.NEXT_PUBLIC_DOMAIN}/movie/${params.id}`
        );

        const { data: movie } = await axios.get<Movie>(movieURL.toString(), {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const creditsURL = new URL(
            `${process.env.NEXT_PUBLIC_DOMAIN}/movie/${params.id}/credits`
        );

        const { data: credits } = await axios.get<any>(creditsURL.toString(), {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        return {
            props: {
                menu,
                movie,
                credits,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface MoviePageProps extends Record<string, unknown> {
    menu: GenreList;
    movie: Movie;
    credits: {
        cast: {
            id: number;
            name: string;
            character: string;
            profile_path: string;
        }[];
    };
}
