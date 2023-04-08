export interface MovieProps {
    title: string;
    id: number;
    vote_average: number;
    genre_ids: number[];    
    poster_path: string | null;
    overview: string;
}