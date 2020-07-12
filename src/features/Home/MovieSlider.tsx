import React from 'react';
import MovieCard from '../../components/Movie/MovieCard';
import styles from './MovieSlider.module.scss';
import { Movie } from '../../types/movie';

interface MovieSliderProps {
    Movies: Movie[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ Movies }) => (
    <>
        <div className={`${styles.movies}`}>
            {Movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    </>
);

export default MovieSlider;
