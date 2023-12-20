import React, { useState, useEffect } from "react";
import "./Blogpage.css";

const BlogsPage = () => {
  // states for blogs
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [blogs, setBlogs] = useState(() => {
    try {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
      return storedBlogs || [];
    } catch (error) {
      console.error("Error parsing blogs from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewBlog({ ...newBlog, image: reader.result });
    };
    reader.readAsDataURL(imageFile);
  };

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content && newBlog.image) {
      const id = blogs.length + 1;
      setBlogs([...blogs, { ...newBlog, id }]);
      setNewBlog({ title: "", content: "", image: null });
      setShowAddBlog(false);
    }
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleEditBlog = (blogToEdit) => {
    setSelectedBlog(blogToEdit); // Set selectedBlog with the blog details to edit
    setShowAddBlog(true); // Show the edit blog section
    setNewBlog({
      title: blogToEdit.title,
      content: blogToEdit.content,
      image: blogToEdit.image,
    });

    // Functionality for Saving Changes
    const saveChanges = () => {
      if (selectedBlog && selectedBlog.title && selectedBlog.content) {
        const updatedBlogs = blogs.map((blog) =>
          blog.id === selectedBlog.id ? selectedBlog : blog
        );
        setBlogs(updatedBlogs);
        setSelectedBlog(null);
        setShowAddBlog(false);
        setNewBlog({ title: "", content: "", image: null });
      }
    };

    return saveChanges;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-8 px-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold mb-6">All Blogs</h2>
        <div className="relative">
          <div className=" top-4 right-4">
            <button
              onClick={() => setShowAddBlog(!showAddBlog)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {showAddBlog ? "Cancel" : "Add Blog"}
            </button>
          </div>

          {showAddBlog && (
            <div className="mt-8 top-16 right-4">
              <h2 className="text-3xl font-semibold mb-6">Add/Edit Blog</h2>
              <input
                type="text"
                value={selectedBlog ? selectedBlog.title : newBlog.title}
                onChange={(e) =>
                  selectedBlog
                    ? setSelectedBlog({
                        ...selectedBlog,
                        title: e.target.value,
                      })
                    : setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="border rounded p-2 mb-4 w-full"
              />
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*" // This restricts selection to only image files
                className="border rounded p-2 mb-4 w-full"
              />

              <textarea
                value={selectedBlog ? selectedBlog.content : newBlog.content}
                onChange={(e) =>
                  selectedBlog
                    ? setSelectedBlog({
                        ...selectedBlog,
                        content: e.target.value,
                      })
                    : setNewBlog({ ...newBlog, content: e.target.value })
                }
                className="border rounded p-2 mb-4 w-full"
                rows="4"
              />

              {selectedBlog ? (
                <button
                  onClick={(editedBlog) => {
                    const saveChangesFunction = handleEditBlog(editedBlog);
                    saveChangesFunction();
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={handleAddBlog}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Add Blog
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-md overflow-hidden shadow-md relative"
          >
            <div className="h-40 overflow-hidden">
              {/* Half-section reserved for image */}
              <img
                src={blog.image} // Render the Base64 image directly
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
                {/* Small circular icons for buttons */}
                <button
                  className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 hide-button"
                  onClick={() => handleEditBlog(blog)}
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
                <button
                  className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hide-button"
                  onClick={() => handleDeleteBlog(blog.id)}
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
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
