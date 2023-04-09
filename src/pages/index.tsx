import { Htag } from '@/components';
import { Movie } from '@/components/Movie/Movie';
import { MovieProps } from '@/components/Movie/Movie.props';
import { GenreList } from '@/interfaces/menu.interface';
import { MoviesFetch } from '@/interfaces/MoviesFetch.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Noto_Sans } from 'next/font/google';
import { useRouter } from 'next/router';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

function Home({ menu, topRatedMovies }: HomeProps): JSX.Element {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
                <div>Loading...</div>
            </>
        );
    }

    return (
        <>
            <Htag tag='h1'>Top Rated Movies</Htag>
            {topRatedMovies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    genre_ids={movie.genre_ids}
                />
            ))}
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const genreURL = new URL(
        process.env.NEXT_PUBLIC_DOMAIN + '/genre/movie/list'
    );

    const { data: menu } = await axios.get<GenreList>(genreURL.toString(), {
        params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
    });

    const moviesURL = new URL(
        process.env.NEXT_PUBLIC_DOMAIN + '/movie/top_rated'
    );

    const { data: topRatedMovies } = await axios.get<MoviesFetch>(
        moviesURL.toString(),
        {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        }
    );

    return {
        props: {
            menu,
            topRatedMovies: topRatedMovies.results,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: GenreList;
    topRatedMovies: MovieProps[];
}
