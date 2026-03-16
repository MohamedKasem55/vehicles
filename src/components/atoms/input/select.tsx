import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import RightChevronIcon from '@/components/atoms/icons/RightChevronIcon'

export interface SelectOption {
  value: string | number
  label: string
}

interface SelectProps {
  label: string
  registration: UseFormRegisterReturn
  options: SelectOption[]
}

function Select({ label, registration, options }: SelectProps) {
  return (
    <div className="flex flex-col gap-2 flex-1" dir="rtl">
      <label className="font-inter font-medium text-[13.6px] leading-6 text-[#374151]">
        {label}
      </label>
      <div className="relative">
        <select
          {...registration}
          className="w-full h-[50px] pr-[17px] pl-[41px] bg-white border border-[#E5E7EB] rounded-[8px] outline-none text-right font-inter text-[13.6px] text-[#111827] appearance-none cursor-pointer focus:border-[#348C68] transition-colors"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <RightChevronIcon width={16} height={16} style={{ transform: 'rotate(90deg)' }} />
        </div>
      </div>
    </div>
  )
}

export default Select
