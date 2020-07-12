import React from 'react';
import styles from './CastCard.module.scss';

interface CastCardProps {
    profile_path: string;
    name: string;
    character: string;
}

const CastCard: React.FC<CastCardProps> = ({ profile_path, name, character }) => {
    const backgroundImageUrl = `http://image.tmdb.org/t/p/w200${profile_path}`;

    return (
        <div className={styles.CastCard}>
            <div className={styles.ActorPicture} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
            <p className={styles.ActorName}>{name}</p>
            <p>{character}</p>
        </div>
    );
};

export default CastCard;
