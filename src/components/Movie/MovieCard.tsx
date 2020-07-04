import React from 'react';
import { Link } from "react-router-dom";
import styles from './MovieCard.module.scss';
import { setFavouriteMovie } from '../../store/actions';
import { connect } from 'react-redux';

function MovieCard({ setFavouriteMovie, id, title, poster_path }: {
    setFavouriteMovie: (movieID: string) => void;
    poster_path: string;
    id: string;
    title: string;
}) {
    const backgroundImageUrl = `http://image.tmdb.org/t/p/w200${poster_path}`;

    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.MovieCard}>
                <div className={styles.MoviePoster} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
                <div>{title}</div>
                <div onClick={() => setFavouriteMovie(id)}>Favourite me!</div>
            </div>
        </Link>
    );
};

const mapDispatchToProps = { setFavouriteMovie }

export default connect(null, mapDispatchToProps)(MovieCard);