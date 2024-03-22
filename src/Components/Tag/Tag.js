import React from 'react';

const Tag = ({ tags }) => {
  return (
    <div className='tagsContainer'>
      {tags.map((tag, index) => (
        <button key={index} className='tags'>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tag;
