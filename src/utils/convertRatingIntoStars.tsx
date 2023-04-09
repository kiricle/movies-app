import { Rating } from '@/components/Rating/Rating';

export const convertRatingIntoStars = (rating: number): JSX.Element => {
    const stars = Math.round(rating / 2);

    return <Rating rating={stars} />;
};
