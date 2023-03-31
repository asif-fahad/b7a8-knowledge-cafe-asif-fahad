import React from 'react';
import SpentTime from '../SpentTime/SpentTime';

const Sideblog = ({ bookmark, readTime }) => {
    return (
        <div>
            <div>
                <SpentTime readTime={readTime}></SpentTime>
            </div>
            <h1 className='bg-indigo-500 mt-2 p-7 '><span className='font-bold'>Bookmarked Blogs:</span> {bookmark.length} {
                bookmark.map(bk => < div className='bg-indigo-100 mt-2 p-7' >

                    {bk.blogTitle} </div>)
            } </h1>
        </div >
    );
};

export default Sideblog;