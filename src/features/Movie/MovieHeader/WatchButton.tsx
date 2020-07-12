import React from 'react';
import { useSelector } from 'react-redux';
import { ReleaseDatesResponse, ReleaseDates } from '../../../types/movie';
import styles from './MovieHeader.module.scss';

interface WatchButtonProps {
    justWatchLink: string;
    releaseDates: ReleaseDatesResponse;
    onButtonPress: (value: boolean) => void;
}

const WatchButton: React.FC<WatchButtonProps> = ({ justWatchLink, releaseDates, onButtonPress }) => {
    const { verifiedAdult } = useSelector((state: any) => ({
        verifiedAdult: state.movies.verifiedAdult,
    }));

    const defaultButton = (
        <a target="_blank" href={justWatchLink} rel="noopener noreferrer">
            <button className={styles.HeaderButton}>► Watch movie</button>
        </a>
    );

    if (verifiedAdult) return defaultButton;

    const release = releaseDates.results.filter((result: ReleaseDates) => result.iso_3166_1 === 'US');

    const rating = release[0].release_dates[0].certification;

    const needsVerifing = ['R', 'NC-17'].includes(rating.toUpperCase());

    if (needsVerifing) {
        return (
            <button className={styles.HeaderButton} onClick={() => onButtonPress(true)}>
                ► Watch Movie
            </button>
        );
    } else {
        return defaultButton;
    }
};

export default WatchButton;
