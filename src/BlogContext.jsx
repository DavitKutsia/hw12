import React, { createContext, useState } from 'react';

// Create the BlogContext
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // State the list of blogs
  const [blogs, setBlogs] = useState([]);

  // Function to add a new blog
  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    // Provides blogs and the addBlog function to all children components
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
