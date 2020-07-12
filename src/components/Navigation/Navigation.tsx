import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const CastCard: React.FC = () => {
    return (
        <div className={styles.Navigation}>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <h3>
                    <span role="img" aria-label="home">
                        🏠
                    </span>{' '}
                    Movie database
                </h3>
            </Link>
        </div>
    );
};

export default CastCard;
