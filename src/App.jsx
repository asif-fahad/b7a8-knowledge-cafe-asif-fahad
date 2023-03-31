import React, { useEffect, useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Sideblog from './components/Sideblog/Sideblog';

import './App.css'


const App = () => {

  const handleBookMark = (bookmarkid) => {
    console.log("bookmark", bookmarkid);
  };

  const handleReadMin = (readid) => {
    console.log("read min", readid)
  }

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));

  }, [])


  return (
    <div>
      <div className='mx-auto'>
        <Header></Header>
      </div>
      <div className='container mx-auto flex md:flex-col lg:flex-row gap-4 '>

        <Blogs blogs={blogs} handleBookMark={handleBookMark} handleReadMin={handleReadMin}></Blogs>


        <Sideblog ></Sideblog>

      </div>
    </div>
  );
};

export default App;