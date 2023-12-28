import React from 'react';
import BookCard from './BookCard';
import { useGetBooksQuery } from '../../features/api/apiSlice';

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    // decide what to render
    let content = null;
    if (isLoading) {
        content = (
            <>
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
            </>
        )
    }
    if (!isLoading && isError) {
        content = <Error message="There was an error" />
    }
    if (!isLoading && !isError && videos.length === 0) {
        content = <Error message="No videos Found!" />
    }
    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <Video key={video.id} video={video} />)
    }

    return (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BookCard />
        </div>
    );
};

export default Books;