import React, { useEffect } from 'react';
import BookCard from './BookCard';
import { useDeleteBookMutation, useGetBooksQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import Success from '../ui/Success';

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const [deleteVideo, { isSuccess: success }] = useDeleteBookMutation();

    console.log(success);

    useEffect(() => {
        if (success) {
            console.log(success);
        }
    }, [success])
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
            {success && <Success message="Item Deleted Successfully!"></Success>}
        </div>
    );
};

export default Books;