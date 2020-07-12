import React, { useState, useEffect } from 'react';
import { getTrending } from '../../api/tmdbClient';
import MovieSlider from './MovieSlider';
import Navigation from '../../components/Navigation/Navigation';
import Header from './Header';
import Switch from '../../components/Ui/Switch';
import styles from './Home.module.scss';

const HomePage: React.FC = () => {
    const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
    const [searchedMovies, setSearchedMovies] = useState<any[]>([]);
    const [trendingPeriod, setTrendingPeriod] = useState(false); // stupid solution, false === 'day', true === 'week'

    const fetchTrendingMovies = async () => {
        const { data } = await getTrending('movie', trendingPeriod ? 'day' : 'week');
        setTrendingMovies(data.results);
    };

    useEffect(() => {
        fetchTrendingMovies();
    }, [trendingPeriod]);

    const validSearch = (movies: any) => {
        setSearchedMovies(movies);
    };

    return (
        <main>
            <Navigation />
            <Header onSearch={validSearch} />
            <section className="content">
                {!!searchedMovies.length && (
                    <div>
                        <h2>Search Results</h2>
                        <MovieSlider Movies={searchedMovies} />
                    </div>
                )}
                <div className={styles.TrendingHeader}>
                    <h2>Trending</h2>
                    <Switch
                        isOn={trendingPeriod}
                        offText="Today"
                        onText="This week"
                        handleToggle={() => setTrendingPeriod(!trendingPeriod)}
                    />
                </div>
                <MovieSlider Movies={trendingMovies} />
            </section>
        </main>
    );
};

export default HomePage;
