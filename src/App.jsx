import React from 'react';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Sideblog from './components/Sideblog/Sideblog';


const App = () => {
  return (
    <div>
      <div className='mx-auto'>
        <Header></Header>
      </div>
      <div className='w-full mx-auto flex gap-4'>
        <div>
          <Blogs></Blogs>
        </div>
        <div>
          <Sideblog></Sideblog>
        </div>
      </div>
    </div>
  );
};

export default App;