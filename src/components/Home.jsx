import React, { useContext } from 'react';
import { BlogContext } from '../BlogContext';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
  // Access the blogs array from context
  const { blogs } = useContext(BlogContext);

  return (
    <div className='homeDiv'>
      <h1 className='homeTitle'>Blogs</h1>      
      <div className='blogText'>
        {/* Map through the blogs and display each blog */}
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2 className='homeH2'>{blog.title}</h2>
            <p className='homeP'>{blog.description}</p>
            <Link to={`/blog/${blog.id}`}>
              <button className='homeButton'>Show more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
