import React from 'react'
import FileItem from './FileItem'

const FileList = () => {
  return (
    <div className='file-list my-4 h-full'>
      <p className='font-semibold'>Your Files:</p>
      <div className="files">
        <FileItem />
        <FileItem />
        <FileItem />
        <FileItem />
      </div>
    </div>
  )
}

export default FileList