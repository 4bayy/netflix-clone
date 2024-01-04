import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import requests from '../Requests';

const Row = (props) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w400';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log('call reached');
        try {
            axios.get(requests.mostPopular).then((response) => {
                // console.log(response.data.results);
                setMovies(response.data.results);
                console.log(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log(movies);
    return (
        <>
            <div>
                <h2 className="text-white text-left text-xl mb-4 mt-3">
                    {props.title}
                </h2>
            </div>
            {movies.map((items) => (
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4	">
                    <div>
                        <img
                            class="h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400${items.backdrop_path}`}
                            alt=""
                        />
                    </div>
                </div>
                    ))}
        </>
    );
};

export default Row;
