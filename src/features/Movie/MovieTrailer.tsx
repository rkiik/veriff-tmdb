import React from 'react';
import styles from './MovieTrailer.module.scss';
import { Video } from '../../types/movie';

interface MovieTrailerProps extends Omit<Video, 'key'> {
    closeClicked: () => void;
    youtubeKey: string;
}

const MovieTrailer: React.FC<MovieTrailerProps> = ({ name, youtubeKey, closeClicked }) => {
    const videoURL = `https://www.youtube.com/embed/${youtubeKey}`;
    console.log(videoURL);
    return (
        <div className={styles.MovieTrailer}>
            <span onClick={() => closeClicked()} className={styles.MovieTrailerClose} />
            <iframe title={name} width="1229" height="690" src={videoURL} frameBorder="0" allowFullScreen></iframe>
        </div>
    );
};

export default MovieTrailer;
