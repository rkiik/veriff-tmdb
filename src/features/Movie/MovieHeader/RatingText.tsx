import React from 'react';
import dayjs from 'dayjs';
import { Genre, ReleaseDatesResponse, ReleaseDates } from '../../../types/movie';
import styles from './RatingText.module.scss';

interface RatingTextProps {
    releaseDates: ReleaseDatesResponse;
    runtime: number;
    genres: Genre[];
}

const timeConvert = (n: number): string => {
    const hours = n / 60;
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);
    return `${roundedHours}h${roundedMinutes}m`;
};

const RatingText: React.FC<RatingTextProps> = ({ releaseDates, runtime, genres }) => {
    if (releaseDates) {
        const release = releaseDates.results.filter((us: ReleaseDates) => us.iso_3166_1 === 'US');
        const rating = release[0].release_dates[0].certification;
        const releaseDate = release[0].release_dates[0].release_date;
        const parsedDate = dayjs(releaseDate);
        const parsedRuntime = timeConvert(runtime);
        const genresCommaSeparated = genres.map((genre: Genre) => genre.name).join(', ');
        return (
            <span>
                <span className={styles.Rating}>{rating}</span>
                <span>
                    {' '}
                    {parsedDate.format('DD/MM/YYYY')} <span>•</span> {genresCommaSeparated} <span>•</span>{' '}
                    {parsedRuntime}
                </span>
            </span>
        );
    }

    return null;
};

export default RatingText;
