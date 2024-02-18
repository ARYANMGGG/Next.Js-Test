// components/PostCard.js
import React from 'react';

const PostCard = ({ title, content }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;
