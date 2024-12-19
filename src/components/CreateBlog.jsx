import React, { useState, useContext } from 'react';
import { BlogContext } from '../BlogContext';
import { useNavigate, Link } from 'react-router-dom';
import '../index.css';

const CreateBlog = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Access blogs and addBlog function from BlogContext
  const { blogs, addBlog } = useContext(BlogContext);  
  // Code for navigating to a different route
  const navigate = useNavigate();

  const handleSubmit = (el) => {
    el.preventDefault();
    if (title && description) {
      // Create a new blog object with a new ID
      const newBlog = { id: blogs.length + 1, title, description };      
      // Add the new blog
      addBlog(newBlog);      
      // Navigate back to the home page
      navigate('/');
    }
  };

  return (
    <div className='createBlogDiv'>
      {/* Link to navigate back to the home page */}
      <Link to="/" className='goBack'>Go Back</Link>
      <h1 className='createBlogTitle'>Create New Blog</h1>
      <form onSubmit={handleSubmit} className='createBlogForm'>

        <input 
          type="text"
          placeholder="Title"
          onChange={(el) => setTitle(el.target.value)}          
          className='createBlogInput'
        />
        <br />
        <textarea
          placeholder="Description"
          onChange={(el) => setDescription(el.target.value)}          
          className='createBlogTextarea'
        />
        <br />        
        <button className='createBlog'>Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
