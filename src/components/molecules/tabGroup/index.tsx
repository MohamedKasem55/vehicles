import React from 'react'

export interface ITab {
  id: string
  label: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface ITabGroup {
  tabs: ITab[]
  activeTabId: string
  onTabChange: (id: string) => void
}

function TabGroup({ tabs, activeTabId, onTabChange }: ITabGroup) {
  return (
    <div className='flex flex-row w-full h-[46px]' dir='rtl'>
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = tab.id === activeTabId
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              background: isActive ? 'rgba(240, 253, 250, 0.94)' : 'transparent',
              color: isActive ? '#0F766E' : '#6B7280',
              borderBottom: isActive ? '2px solid #0D9488' : 'none',
            }}
            className='hover:border-t-transparent! hover:border-x-transparent! hover:opacity-60 outline-none! rounded-none! flex flex-row items-center gap-2 px-4 h-full cursor-pointer transition-colors'
          >
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11.9px', lineHeight: '20px', letterSpacing: 0, textAlign: 'center', verticalAlign: 'middle' }}>
              {tab.label}
            </span>
            <Icon width={18} height={18} />
          </button>
        )
      })}
    </div>
  )
}

export default TabGroup
