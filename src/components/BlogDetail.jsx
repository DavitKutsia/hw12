import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../BlogContext';
import '../index.css';

const BlogDetail = () => {
  // Access the blogs array from BlogContext
  const { blogs } = useContext(BlogContext);
  
  // Get the blog ID from the URL parameters
  const { id } = useParams();
  
  // Find the blog that matches the ID
  const blog = blogs.find((blog) => blog.id === Number(id));

  return (
    <div className='blogDetailDiv'>
      {/* Link to navigate back to the home page */}
      <Link to="/" className='goBack'>Go Back</Link>

      <h2 className='blogDetailTitle'>{blog.title}</h2>
      <p className='blogDetailText'>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
