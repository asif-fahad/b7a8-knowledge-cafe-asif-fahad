import React from 'react';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Sideblog from './components/Sideblog/Sideblog';

import './App.css'


const App = () => {

  const handleBookMark = () => {
    console.log("aaaa");
  };

  const handleReadMin = () => {
    console.log("bbbbb")
  }



  return (
    <div>
      <div className='mx-auto'>
        <Header></Header>
      </div>
      <div className='container mx-auto flex md:flex-col lg:flex-row gap-4 '>

        <Blogs handleBookMark={handleBookMark} handleReadMin={handleReadMin}></Blogs>


        <Sideblog ></Sideblog>

      </div>
    </div>
  );
};

export default App;