// BlogCard.js

import React from "react";

const BlogCard = ({ blog, handleEdit, handleDelete }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-md relative">
      <div className="h-40 overflow-hidden">
        {/* Display blog image */}
        <img
          src={blog.image}
          alt="Selected Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">
          {blog.content.substring(0, 100)}...
        </p>
        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex show-button">
          {/* Edit button */}
          <button
            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 hide-button"
            onClick={() => handleEdit(blog)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="edit"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </button>
          {/* Delete button */}
          <button
            className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hide-button"
            onClick={() => handleDelete(blog.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              id="delete"
            >
              <path
                fill="#000"
                d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z"
              ></path>
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
