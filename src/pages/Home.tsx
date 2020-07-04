import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrending } from '../api/tmdbClient';
import MovieCard from '../components/Movie/MovieCard';
import Header from '../components/Header/Header';
import { addListener } from "cluster";

export default function Home() {
    const [trendingMovies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const { data } = await getTrending('movie', 'week');
            setMovies(data.results);
        };

        fetchTrendingMovies();
    }, []);

    const movies = trendingMovies.map((movie: any) => <MovieCard key={movie.id} {...movie} />);
    
    const validSearch = (movies: any) => {
        setMovies(movies);
    }

    return (
        <main>
            <Header onSearch={validSearch}/>
            <section className={`content`}>
                {movies}
            </section>
        </main>
    );
};
