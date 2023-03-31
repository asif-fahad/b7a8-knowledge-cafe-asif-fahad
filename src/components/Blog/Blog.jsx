import React from 'react';

const Blog = ({ blog, handleBookMark, handleReadMin }) => {


    return (
        <div>
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                <figure><img src={blog.blogImage} alt="Shoes" className='w-full h-80' /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img src={blog.authorImage} alt="" className="w-10 rounded-full" />
                            <div className='flex flex-col'>
                                <h3 className='font-bold'>{blog.author}</h3>
                                <p>{blog.publishedDate}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p>{blog.readTime} min read </p>
                            <button onClick={handleBookMark}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <h2 className="card-title">{blog.blogTitle}</h2>
                    <p>#beginners #programming </p>
                    <div className="card-actions">
                        <button onClick={handleReadMin} className="text-blue-600 underline">Marks as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;