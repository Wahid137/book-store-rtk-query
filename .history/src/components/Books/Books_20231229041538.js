import React from 'react';
import BookCard from './BookCard';
import { useDeleteBookMutation, useGetBooksQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const [deleteVideo, { isSuccess }] = useDeleteBookMutation();

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <p>Loading...!</p>
    }
    if (!isLoading && isError) {
        content = <Error message="There was an error" />
    }
    if (!isLoading && !isError && books.length === 0) {
        content = <Error message="No videos Found!" />
    }
    if (!isLoading && !isError && books?.length > 0) {
        content = books.map((book) => <BookCard key={book.id} book={book} />)
    }

    return (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
        </div>
    );
};

export default Books;