import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


export default function Searchbar({ getSearchValue }) {
    const [query, setQuery] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            toast('Your query is empty');
            return;
        }

        getSearchValue(query);
        setQuery('');
    };

    const handleInputChange = e => {
        setQuery(e.target.value.toLowerCase());
    };

        return (
            <header className={s.Searchbar}>
                <form
                    onSubmit={handleSubmit}
                    className={s.SearchForm}
                >
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButton__label}>Search</span>
                    </button>

                    <input
                        className={s.SearchForm__input}
                        type="text"
                        value={query}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleInputChange}
                    />
                </form>
             </header>
        )
};

