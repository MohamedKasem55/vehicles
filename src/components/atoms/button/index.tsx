import React from 'react'
import Spinner from '@/components/atoms/spinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: React.ReactNode
  loading?: boolean
}

function Button({ label, icon, loading = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`flex flex-row items-center gap-2 rounded-[8px] h-[48px] px-6 transition-opacity font-inter font-medium text-[13.6px] leading-6 ${loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'} ${props.className ?? ''}`}
    >
      {loading ? <Spinner size="sm" /> : icon}
      <span>{label}</span>
    </button>
  )
}

export default Button
