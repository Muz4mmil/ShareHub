import React from 'react'

const FileItem = () => {
  return (
    <div className='my-2 flex justify-between items-center rounded bg-slate-100 hover:bg-slate-200 min-lg:cursor-pointer'>
      <i class="fa-solid fa-arrow-down h-full px-4 rounded-sm text-slate-600"></i>
      <p className="file-name w-full py-3 max-sm:py-4  font-semibold text-slate-800">File_ka_naam</p>
      <p className="file-size w-20 text-sm text-slate-500">2.4 MB</p>
    </div>
  )
}

export default FileItem