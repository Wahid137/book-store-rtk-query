import React from 'react';
import BookCard from './BookCard';
import { useGetBooksQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';

const Books = ({ filter, searchItem }) => {
    const { data: books, isLoading, isError } = useGetBooksQuery();


    const searchedBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    const filteredBooks =
        filter === 'featured' ? books.filter((book) => book.featured) : books;


    const filteredAndSearchedBooks = filteredBooks.filter((book) =>
        book.name.toLowerCase().includes(searchItem.toLowerCase())
    );

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
        content = filteredAndSearchedBooks.map((book) => <BookCard key={book.id} book={book} />)
    }

    return (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
        </div>
    );
};

export default Books;