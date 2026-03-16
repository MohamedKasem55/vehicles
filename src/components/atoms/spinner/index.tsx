import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div
        className='w-8 h-8 rounded-full border-[3px] border-[#E5E7EB] border-t-[#0D9488] animate-spin'
      />
    </div>
  )
}

export default Spinner
