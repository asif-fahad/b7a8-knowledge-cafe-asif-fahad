import React from 'react';

const Blog = (props) => {
    console.log(props);

    const { author, authorImage, blogImage, blogTitle, publishedDate, readTime, id } = props.blog;

    return (
        <div>
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                <figure><img src={blogImage} alt="Shoes" className='w-full h-80' /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img src={authorImage} alt="" className="w-10 rounded-full" />
                            <h3>{author}
                                <br />
                                {publishedDate}
                            </h3>
                        </div>
                        <div className='flex'>
                            <p>{readTime} min read </p>
                            <label className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </label>
                        </div>
                    </div>
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;