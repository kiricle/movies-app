import { Htag, Button, Paragraph, Tag } from '@/components';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Button
                appearance="primary"
                arrow="down"
            >
                Hello
            </Button>
            <Button
                appearance="ghost"
                arrow="down"
            >
                Hello
            </Button>
            <Paragraph size='l'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, iusto!
            </Paragraph>
            <Tag size='s' color='primary'>Small</Tag>
            <Tag size='m' color='red'>red</Tag>
            <Tag size='s' color='ghost'>ghost</Tag>
            <Tag size='s' color='green'>green</Tag>
        </>
    );
}
