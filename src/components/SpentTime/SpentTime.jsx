import React from 'react';

const SpentTime = ({ readTime }) => {
    return (
        <div>
            <h1 className='text-bg-primary bg-violet-100 p-7 border-violet-600'><span className='font-bold'>Spent Time On Read:</span> {readTime} min</h1>
        </div>
    );
};

export default SpentTime;