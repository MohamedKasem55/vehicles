import IconWrapper from '@/components/atoms/iconWrapper'
import { IPageConfig } from '@/types/page'
import React from 'react'

function PageTitle({pageTitle,pageTitleIcon}:Partial<IPageConfig>) {
  return (
    <div className=' w-full bg-white rounded-t-2xl p-3 gap-3 flex flex-row items-center border-[#E5E7EB] border-2' dir='rtl'>
        <IconWrapper iconConfig={{ icon: pageTitleIcon!, width: 24, height: 24, strokeWidth: 4 }} customClasses='bg-[#F0FDFA] rounded-[12px] w-10 h-10 text-[#0D9488]' />
        <span className='font-inter font-bold text-[17px] leading-7 tracking-normal align-middle'>{pageTitle!}</span>
    </div>
  )
}

export default PageTitle