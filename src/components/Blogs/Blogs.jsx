import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogs, handleBookMark, handleReadMin }) => {



    return (
        <div>
            <div>
                {
                    blogs.map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                            handleBookMark={handleBookMark}
                            handleReadMin={handleReadMin}
                        ></Blog>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;