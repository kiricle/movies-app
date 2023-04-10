import { Htag } from '@/components';
import { SearchResults } from '@/interfaces/SearchResults.interface';
import { baseImageURL } from '@/utils/baseImageURL';
import axios from 'axios';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Exit from './exit.svg';
import Search from './search.svg';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.props';

export const SearchBar = ({ ...props }: SearchBarProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResults>({
        results: [],
    });

    const handleSearchIconClick = () => {
        setOpen(() => true);
    };

    const handleExitIconClick = () => {
        setOpen(() => false);
        setValue(() => '');
        setSearchResults(() => ({ results: [] }));
    };

    useEffect(() => {
        if (value !== '') {
            const timer = setTimeout(() => {
                const url = new URL(
                    `${process.env.NEXT_PUBLIC_DOMAIN}/search/movie`
                );
                axios
                    .get<SearchResults>(url.toString(), {
                        params: {
                            api_key: process.env.NEXT_PUBLIC_API_KEY,
                            query: value,
                        },
                    })
                    .then((res) => {
                        if (res.status !== 200) return;
                        setSearchResults(() => {
                            res.data.results = res.data.results.slice(0, 5);
                            return res.data;
                        });
                    });
            }, 500);

            return () => clearTimeout(timer);
        }

        setSearchResults(() => ({ results: [] }));
    }, [value]);

    return (
        <div className={styles.search_bar}>
            <div
                className={cn(styles.input_box, {
                    [styles.open]: open,
                })}
            >
                <input
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.input}
                    type="text"
                    placeholder="Search..."
                    value={value}
                />
                <span
                    onClick={handleSearchIconClick}
                    className={styles.search}
                >
                    <Search className={styles.search_icon} />
                </span>
                <Exit
                    onClick={handleExitIconClick}
                    className={styles.close_icon}
                />
            </div>
            <ul className={cn(styles.list, {
                [styles.list_open]: open,
            })}>
                {searchResults.results.length > 0 &&
                    searchResults.results.map((r) => (
                        <li onClick={handleExitIconClick} key={r.id} className={styles.list_item}>
                            <Link href={`/movies/${r.id}`}>
                                <Image
                                    src={baseImageURL + r.poster_path}
                                    width={50}
                                    height={50}
                                    alt={r.title}
                                />
                                <Htag tag="h3">{r.title}</Htag>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
