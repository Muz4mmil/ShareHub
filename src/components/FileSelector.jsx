import React from 'react'

const FileSelector = () => {
  return (
    <div className='file-selector relative bg-slate-100 h-32 max-sm:h-40 rounded-lg border-dashed border-2 border-slate-400 overflow-hidden'>
      <label htmlFor="files" className='absolute h-full w-full grid place-items-center text-slate-600 text-lg cursor-pointer hover:bg-slate-200'>Select or Drag & drop your files here</label>
      <input type="file" name="files" id="files" className='hidden'/>
    </div>
  )
}

export default FileSelector