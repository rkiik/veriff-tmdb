import React, { useState, useEffect } from 'react';
import MovieHeader from './MovieHeader';
import CastSlider from './CastSlider';
import MovieSlider from '../Home/MovieSlider';
import Navigation from '../../components/Navigation/Navigation';
import { useRouteMatch } from 'react-router-dom';
import { getMovie, getSimilarMovies, getRecommendations } from '../../api/tmdbClient';
import { Movie } from '../../types/movie';

const MoviePage: React.FC<Movie> = () => {
    const {
        params: { id: movieId },
    } = useRouteMatch();
    const [movie, setMovie]: [any, any] = useState({});
    const [similarMovies, setSimilarMovies]: [any, any] = useState([]);
    const [recommendedMovies, setRecommendedMovies]: [any, any] = useState([]);

    const fetchMovie = async () => {
        const { data } = await getMovie(movieId);
        setMovie(data);
    };

    const fetchSimilarMovies = async () => {
        const { data } = await getSimilarMovies(movieId);
        setSimilarMovies(data.results);
    };

    const fetchRecommendations = async () => {
        const { data } = await getRecommendations(movieId);
        setRecommendedMovies(data.results);
    };

    useEffect(() => {
        Promise.all([fetchMovie(), fetchSimilarMovies(), fetchRecommendations()]);
    }, []);

    return (
        <main>
            <Navigation />
            {!!Object.keys(movie).length && <MovieHeader {...movie} />}
            <section className="content">
                {!!Object.keys(movie).length && (
                    <div>
                        <h2>Cast</h2>
                        <CastSlider cast={movie.credits.cast} />
                    </div>
                )}

                {!!similarMovies.length && (
                    <div>
                        <h2>Similar movies</h2>
                        <MovieSlider Movies={similarMovies} />
                    </div>
                )}

                {!!recommendedMovies.length && (
                    <div>
                        <h2>Recommended movies</h2>
                        <MovieSlider Movies={recommendedMovies} />
                    </div>
                )}
            </section>
        </main>
    );
};

export default MoviePage;
