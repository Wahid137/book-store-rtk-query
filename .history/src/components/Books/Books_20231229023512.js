import React from 'react';
import BookCard from './BookCard';
import { useGetBooksQuery } from '../../features/api/apiSlice';

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    //decide what to do
    let content

    return (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BookCard />
        </div>
    );
};

export default Books;