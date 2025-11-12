import React from 'react';
import { useParams } from 'react-router-dom';

const Accommodation = () => {
    const { id } = useParams();

    // Placeholder for fetching accommodation data by id
    // You can replace this with actual data fetching logic
    // Example: const accommodation = accommodations.find(item => item.id === id);

    return (
        <div>
            <h1>Accommodation Details</h1>
            <p>Accommodation ID: {id}</p>
            {/* Render accommodation details here */}
        </div>
    );
};

export default Accommodation;