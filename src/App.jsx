import React, { useEffect, useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Sideblog from './components/Sideblog/Sideblog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Questions from './components/Questions/Questions';


const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([])
  const [readTime, setReadTime] = useState(0);

  const handleBookMark = (id) => {

    let markedItem = [];
    const exist = bookmark.find((marked) => marked.id === id);
    if (exist) {
      notify();
    }
    else {
      const bookmarkItem = blogs.find((item) => item.id === id);
      markedItem = [...bookmark, bookmarkItem];
      setBookmark(markedItem);
    }

    console.log(markedItem);
  };

  const handleReadMin = (id) => {
    const item = blogs.find((b) => b.id === id);
    let totalTime = JSON.parse(readTime + item.readTime);
    setReadTime(totalTime);
    console.log(totalTime);
  }



  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));

  }, [])

  const notify = () => {
    toast.error("You Have Already Bookmarked This Blog");
  }


  return (
    <div>
      <div className='mx-auto'>
        <Header></Header>
      </div>
      <div className='container mx-auto flex md:flex-col lg:flex-row gap-4 '>

        <Blogs blogs={blogs} handleBookMark={handleBookMark} handleReadMin={handleReadMin}></Blogs>


        <Sideblog bookmark={bookmark} readTime={readTime} ></Sideblog>

      </div>
      <div className='container mx-auto mt-5'>
        <Questions ></Questions>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;