import React, { useState } from 'react';
import styles from './Search.module.scss';
import { getSearch } from '../../api/tmdbClient';
import { AxiosResponse } from 'axios';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (query.length) {
            const search: AxiosResponse = await getSearch(query);
            onSearch(search.data.results);
        }
    };

    return (
        <section className={styles.Search}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    placeholder="Search for a movie..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default Search;
