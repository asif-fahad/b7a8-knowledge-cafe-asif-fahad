import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark, handleReadMin }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [])


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