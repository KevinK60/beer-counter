/*
  Task: Rename all references to 'blog' across the project.
*/

import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:3002/api/all-blogs'); // Update the URL to match your backend route

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs !" />}
    </div>
  );
}

export default Home;