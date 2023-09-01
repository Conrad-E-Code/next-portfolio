"use client";
import React from 'react'
import BlogListItem from "./BlogListItem"
import {Context} from "/context/Context"
import { useContext, useEffect } from 'react'

const BlogList = () => {
  const {serverBlogs, setServerBlogs} = useContext(Context)
  useEffect(() => {
    fetch("/api/blogs")
    .then(
        r => r.ok ? r.json() : console.log(r))
    .catch(err => console.log(err))
    .then(data => {setServerBlogs(data)
      console.log(data)})
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
    <div>
      <span>
        <div
          className="relative"
          style={{
            height: "auto",
            opacity: 1,
          }}
        >
          <div
            className="sticky top-0 z-16"
            style={{ opacity: 1, height: "auto" }}
          >
            <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900">
              Today
            </h3>
          </div>
          {/* BEGIN LIST OF BLOGS HERE */}
          <ol>{/* Map Today BLogs Here */}
          {serverBlogs && serverBlogs.length > 0 ? serverBlogs.reverse().map((blog) => {
            return(
              <BlogListItem key={`BLI-${blog._id}`} title={blog.title} blogId={blog._id} />
            )
          }) : <li>Loading Previous Blogs</li>}
          </ol>
        </div>
        <div
          className="relative"
          style={{
            height: "auto",
            opacity: 1,
          }}
        >
          <div
            className="sticky top-0 z-16"
            style={{ opacity: 1, height: "auto" }}
          >
            <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900">
              Yesterday
            </h3>
          </div>
          {/* BEGIN LIST OF BLOGS HERE */}
          <ol>{/* Map Today BLogs Here */}
          {/* {serverBlogs && serverBlogs.length > 0 ? serverBlogs.map((blog) => {
            return(
              <BlogListItem  title={blog.title} blogId={blog._id} />
            )
          }) : <li>Loading Previous Blogs</li>} */}
          </ol>
        </div>
      </span>
    </div>
    
  </div>
  )
}

export default BlogList