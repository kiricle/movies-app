import { Htag } from '@/components';
import { AppContext } from '@/context/app.context';
import { Genre, GenreList } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ParsedUrlQuery } from 'querystring';
import { useContext } from 'react';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

function Movie({ menu, genre }: GenresProps): JSX.Element {
    const { menu: currentMenu, setMenu } = useContext(AppContext);

    if (!currentMenu && menu && setMenu) {
        setMenu(menu);
    }

    return (
        <>
            <Htag tag="h1">{genre && genre.name}</Htag>
        </>
    );
}

export default withLayout(Movie);

export const getStaticPaths: GetStaticPaths = async () => {
    const url = new URL(process.env.NEXT_PUBLIC_DOMAIN + '/genre/movie/list');

    const { data: menu } = await axios.get<GenreList>(url.toString(), {
        params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
    });

    return {
        paths: menu.genres.map((m) => `/movies/${m.name.toLowerCase()}}`),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<GenresProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params)
        return {
            notFound: true,
        };

    const url = new URL(process.env.NEXT_PUBLIC_DOMAIN + '/genre/movie/list');

    const { data: menu } = await axios.get<GenreList>(url.toString(), {
        params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
    });

    const [genre] = menu.genres.filter(
        (g) => g.name.toLowerCase() === params.genre
    );

    if (genre === undefined)
        return {
            notFound: true,
        };

    return {
        props: {
            menu,
            genre,
        },
    };
};

interface GenresProps extends Record<string, unknown> {
    menu: GenreList;
    genre: Genre;
}
