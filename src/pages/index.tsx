import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary' arrow='down'>Hello</Button>
            <Button appearance='ghost' arrow='down'>Hello</Button>
        </>
    );
}
