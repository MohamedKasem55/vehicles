import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function SettingsMainPage() {
    let {pathname} = useLocation()
  return (
    <div>
        {pathname.split("/")}
    </div>
  )
}

export default SettingsMainPage