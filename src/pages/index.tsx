import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { Noto_Sans } from 'next/font/google';
import { useState } from 'react';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

function Home(): JSX.Element {
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