import React, { useState } from 'react';
import dayjs from 'dayjs';
import styles from './MovieHeader.module.scss';
import MovieTrailer from '../MovieTrailer';
import { useSelector, useDispatch } from 'react-redux';
import { setFavouriteMovie, removeFavouriteMovie } from '../../../store/actions';
import VeriffModal from '../../../components/Veriff/Modal';
import { Movie } from '../../../types/movie';
import WatchButton from './WatchButton';
import RatingText from './RatingText';

const MovieHeader: React.FC<Movie> = ({
    id,
    title,
    backdrop_path: backdropPath,
    poster_path: posterPath,
    release_dates: releaseDates,
    release_date: releaseDate,
    overview,
    runtime,
    genres,
    videos,
}) => {
    const { favouriteMovies } = useSelector((state: any) => ({
        favouriteMovies: state.movies.favouriteMovies,
    }));

    const [showTrailer, setShowTrailer] = useState(false);
    const [showVeriff, setShowVeriff] = useState(false);

    const dispatch = useDispatch();

    const backgroundImageUrl = `http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdropPath}`;
    const posterImageUrl = `http://image.tmdb.org/t/p/w300${posterPath}`;
    const justWatchLink = `https://www.themoviedb.org/movie/${id}-${title.replace(/\s+/g, '-').toLowerCase()}/watch`;

    const headerBackgroundStyle = {
        background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
            ),
            url(${backgroundImageUrl})`,
    };

    const favoriteButton = () => {
        if (favouriteMovies.includes(id)) {
            return (
                <div className={styles.HeaderButtonFavouriteOff} onClick={() => dispatch(removeFavouriteMovie(id))}>
                    Remove from favourites
                </div>
            );
        } else {
            return (
                <div className={styles.HeaderButtonFavouriteOn} onClick={() => dispatch(setFavouriteMovie(id))}>
                    Add to favourites
                </div>
            );
        }
    };

    return (
        <section className={styles.Header} style={headerBackgroundStyle}>
            <div className={styles.HeaderContent}>
                <div className={styles.HeaderPoster} style={{ backgroundImage: `url(${posterImageUrl})` }}></div>
                <div className={styles.HeaderText}>
                    <h1>
                        {title} ({dayjs(releaseDate).year()})
                    </h1>
                    <RatingText releaseDates={releaseDates} runtime={runtime} genres={genres} />
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <button className={styles.HeaderButton} onClick={() => setShowTrailer(true)}>
                        ► Play trailer
                    </button>
                    <WatchButton
                        justWatchLink={justWatchLink}
                        releaseDates={releaseDates}
                        onButtonPress={(value) => setShowVeriff(value)}
                    />
                    {favoriteButton()}
                </div>
            </div>

            {!!showTrailer && (
                <MovieTrailer
                    name={title}
                    youtubeKey={videos.results[0].key}
                    id={videos.results[0].id}
                    closeClicked={() => setShowTrailer(false)}
                />
            )}
            {!!showVeriff && (
                <VeriffModal
                    OnSuccess={() => (window.location.href = justWatchLink)}
                    CloseClicked={() => setShowVeriff(false)}
                />
            )}
        </section>
    );
};

export default MovieHeader;
