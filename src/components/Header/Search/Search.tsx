import React, { useState } from 'react';
import styles from './Search.module.scss';
import { getSearch } from '../../../api/tmdbClient';

export default function Search({ onSearch }: {
    onSearch: (query: string) => void;
} ){
    const [query, setQuery] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const search: any = await getSearch(query);
        onSearch(search.data.results)
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className={styles.inputSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
};
