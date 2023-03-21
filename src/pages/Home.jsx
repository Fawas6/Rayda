import React from 'react'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import { textAlign } from '@mui/system';

export default function Home() {
  return (
    <div className='body'>

      <header>
        <div>
            <div className='page_headertext'>
             <div><h1>Welcome</h1></div>
             <div className='notify_icon'><h1><NotificationsIcon /></h1></div>
            </div>
            <div className='page_description'>Your current sales auction and activity.</div>
            <hr/>
        </div>
      </header>

    </div>
  )
}
