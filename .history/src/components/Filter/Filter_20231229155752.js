import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [featuredSelected, setFeaturedSelected] = useState(false);

    const handleFilterChange = () => {
        () => onFilterChange('all')
    }

    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <button onClick={[setFeaturedSelected(true)]} className={`lws-filter-btn ${featuredSelected && "active-filter"
                    }`}>All</button>
                <button onClick={() => onFilterChange('featured')} className="lws-filter-btn">Featured</button>
            </div>
        </div >
    );
};

export default Filter;