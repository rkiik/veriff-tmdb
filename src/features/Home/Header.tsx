import React from 'react';
import styles from './Header.module.scss';
import Search from './Search';

interface HeaderProps {
    onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    return (
        <section className={styles.Header}>
            <div className={styles.HeaderContent}>
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now. (Safely)</h3>
                <Search onSearch={onSearch} />
            </div>
        </section>
    );
};

export default Header;
