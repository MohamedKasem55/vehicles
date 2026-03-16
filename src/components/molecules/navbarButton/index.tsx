import React from 'react'
import IconWrapper from '../../atoms/iconWrapper'

export interface INavbarButton{
  id:string,
  text:string,
  icon: React.FC<React.SVGProps<SVGSVGElement>> 
  clickHandler : (id:string)=> void
}
function NavbarButton({id,text,icon:Icon,clickHandler}:INavbarButton) {
  return (
    <div className='flex flex-row gap-2 items-center justify-center cursor-pointer hover:opacity-70' onClick={()=>clickHandler(id)}>
      <span className="font-semibold text-center leading-5 tracking-normal align-middle text-[11.9px]">
     {text}
      </span>
      <IconWrapper iconConfig={{ icon: Icon, width: 18, height: 18 }} customClasses={'bg-[#E6EDEB] w-8 h-8 rounded-full'} />
    </div>
  )
}

export default NavbarButton