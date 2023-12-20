import React, { useState } from "react";

// const BlogsPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [newBlog, setNewBlog] = useState({ title: "", content: "" });

//   const handleAddBlog = () => {
//     if (newBlog.title && newBlog.content) {
//       const id = blogs.length + 1;
//       setBlogs([...blogs, { ...newBlog, id }]);
//       setNewBlog({ title: "", content: "" });
//     }
//   };

//   const handleDeleteBlog = (id) => {
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);
//   };

//   const handleEditBlog = () => {
//     if (selectedBlog && selectedBlog.title && selectedBlog.content) {
//       const updatedBlogs = blogs.map((blog) =>
//         blog.id === selectedBlog.id ? selectedBlog : blog
//       );
//       setBlogs(updatedBlogs);
//       setSelectedBlog(null);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen py-8 px-4">
//       <h2 className="text-3xl font-semibold mb-6">All Blogs</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id} className="border-b py-4">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//               <p className="text-gray-600 mb-2">{blog.content}</p>
//               <button
//                 className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
//                 onClick={() => setSelectedBlog(blog)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="px-3 py-1 bg-red-500 text-white rounded"
//                 onClick={() => handleDeleteBlog(blog.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8">
//         <h2 className="text-3xl font-semibold mb-6">Add/Edit Blog</h2>
//         <input
//           type="text"
//           value={selectedBlog ? selectedBlog.title : newBlog.title}
//           onChange={(e) =>
//             selectedBlog
//               ? setSelectedBlog({ ...selectedBlog, title: e.target.value })
//               : setNewBlog({ ...newBlog, title: e.target.value })
//           }
//           className="border rounded p-2 mb-4 w-full"
//         />
//         <textarea
//           value={selectedBlog ? selectedBlog.content : newBlog.content}
//           onChange={(e) =>
//             selectedBlog
//               ? setSelectedBlog({ ...selectedBlog, content: e.target.value })
//               : setNewBlog({ ...newBlog, content: e.target.value })
//           }
//           className="border rounded p-2 mb-4 w-full"
//           rows="4"
//         />
//         {selectedBlog ? (
//           <button
//             onClick={handleEditBlog}
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleAddBlog}
//             className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Add Blog
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

// /////////////////////////////////////////////////////////////////////////////////////////////////////
