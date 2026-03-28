import React from 'react'

interface SpinnerProps {
  size?: 'sm' | 'md'
}

function Spinner({ size = 'md' }: SpinnerProps) {
  if (size === 'sm')
    return (
      <div className="w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" />
    )

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 rounded-full border-[3px] border-[#E5E7EB] border-t-[#0D9488] animate-spin" />
    </div>
  )
}

export default Spinner
