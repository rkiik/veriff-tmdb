export interface Movie {
    id: string;
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    original_title: string;
    overview: string;
    release_date: string;
    runtime: number;
    poster_path: string;
    title: string;
    tagline: string;
    vote_average: number;
    videos: VideosResult;
    release_dates: ReleaseDatesResponse;
}

export interface Genre {
    id: string;
    name: string;
}

interface VideosResult {
    results: Video[];
}

export interface Video {
    id: string;
    key: string;
    name: string;
}

export interface ReleaseDatesResponse {
    results: ReleaseDates[];
}

export interface ReleaseDates {
    iso_3166_1: string;
    release_dates: ReleaseDate[];
}

interface ReleaseDate {
    certification: string;
    release_date: string;
}
