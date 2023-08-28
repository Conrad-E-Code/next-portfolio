import React from 'react'

const BlogList = () => {
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
          <ol>{/* Map Today BLogs Here */}</ol>
        </div>
      </span>
    </div>
  </div>
  )
}

export default BlogList