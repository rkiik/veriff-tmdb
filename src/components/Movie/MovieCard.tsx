import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './MovieCard.module.scss';

interface MovieCardProps {
    id: string;
    poster_path: string;
    title: string;
    vote_average: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, poster_path, title, vote_average }) => {
    const { favouriteMovies } = useSelector((state: any) => ({
        favouriteMovies: state.movies.favouriteMovies,
    }));

    const favoriteIcon = () => {
        if (!favouriteMovies.includes(id)) return null;
        return <span className={styles.MovieFavourite}></span>;
    };

    const backgroundImageUrl = `http://image.tmdb.org/t/p/w200${poster_path}`;

    return (
        <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.MovieCard}>
                <span className={styles.MovieRating}>{vote_average}</span>
                <div className={styles.MoviePoster} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
                <span className={styles.MovieTitle}>
                    {title}
                    {favoriteIcon()}
                </span>
            </div>
        </Link>
    );
};

export default MovieCard;
