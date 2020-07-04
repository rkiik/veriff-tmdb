import React from 'react';
import styles from './Header.module.scss';
import Search from './Search/Search';

export default function Header({ ...props }: {
    onSearch: (query: string) => void;
} ) {
    return (
        <section className={styles.Header}>
            <div>
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now. (Safely)</h3>
                <Search {...props}/>
            </div>
        </section>
    );
};
