import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { GenreList } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Noto_Sans } from 'next/font/google';
import { useState } from 'react';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

function Home({ menu }: HomeProps): JSX.Element {
    const [counter, setCounter] = useState(0);
    const [rating, setRating] = useState(2);

    return (
        <>
            <Htag tag="h1">{counter}</Htag>
            <Button
                appearance="primary"
                onClick={() => setCounter((prevCounter) => prevCounter + 1)}
            >
                Hello
            </Button>
            <Button
                appearance="ghost"
                arrow="right"
            >
                Hello
            </Button>
            <Paragraph size="l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, iusto!
            </Paragraph>
            <Tag
                size="s"
                color="primary"
            >
                Small
            </Tag>
            <Tag
                size="m"
                color="red"
            >
                red
            </Tag>
            <Tag
                size="s"
                color="ghost"
            >
                ghost
            </Tag>
            <Tag
                size="s"
                color="green"
            >
                green
            </Tag>
            <Rating rating={4} />
            <Rating
                rating={rating}
                isEditable={true}
                setRating={setRating}
            />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const url = new URL(process.env.NEXT_PUBLIC_DOMAIN + '/genre/movie/list');

    const { data: menu } = await axios.get<GenreList>(url.toString(), {
        params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
    });

    return {
        props: {
            menu,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: GenreList;
}
