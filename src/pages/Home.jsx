import React from 'react'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import { fontSize, textAlign } from '@mui/system';

export default function Home() {
  return (
    <div className='body'>

      <header>
        <div>
            <div className='page_headertext'>
             <div><h1>Welcome</h1></div>
             <div className='notify_icon'><h1><NotificationsIcon sx={{ fontSize: '30px' }} /></h1></div>
            </div>
            <div className='page_description'>Your current sales auction and activity.</div>
            <hr/>
        </div>
      </header>

      <body>

        <section>
            <div className='gradient_screen'></div>
            <img className='rayda_logo' src='logo.png' alt='rayda_logo'/>
        </section>

      </body>

    </div>
  )
}
