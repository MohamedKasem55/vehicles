import { IconConfig } from '@/components/atoms/icon'
import IconWrapper from '@/components/atoms/iconWrapper'
import { IPageConfig } from '@/types/page'
import React from 'react'

function PageTitle({pageTitle,pageTitleIconConfig}:Partial<IPageConfig>) {
  return (
    <div className='flex-1 w-full bg-white rounded-t-2xl p-3 gap-3 flex flex-row items-center' dir='rtl'>
        <IconWrapper iconConfig={pageTitleIconConfig!} customClasses='bg-[#F0FDFA] rounded-[12px] w-10 h-10 text-[#0D9488]' />
        <span className='font-inter font-bold text-[17px] leading-7 tracking-normal align-middle'>{pageTitle!}</span>
    </div>
  )
}

export default PageTitle