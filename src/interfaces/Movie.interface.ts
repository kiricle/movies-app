export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genres: [
        {
            id: number;
            name: string;
        }
    ]; 
}