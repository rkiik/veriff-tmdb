import React from 'react';
import CastCard from '../../components/Movie/CastCard';
import styles from './CastSlider.module.scss';
import { creditsResponse } from '../../types/movieCredits';

const CastSlider: React.FC<creditsResponse> = ({ cast }) => (
    <>
        <div className={`${styles.Cast}`}>
            {cast.map((actor) => (
                <CastCard key={actor.cast_id} {...actor} />
            ))}
        </div>
    </>
);

export default CastSlider;
