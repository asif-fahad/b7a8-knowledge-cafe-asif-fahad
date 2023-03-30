import React from 'react';
import SpentTime from '../SpentTime/SpentTime';

const Sideblog = () => {
    return (
        <div>
            <div>
                <SpentTime></SpentTime>
            </div>
            <h1 className='bg-indigo-100 mt-2 p-7'>Bookmarked Blogs: </h1>
        </div>
    );
};

export default Sideblog;