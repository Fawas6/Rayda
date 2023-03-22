import React from 'react'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import CircleIcon from '@mui/icons-material/Circle'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { fontSize, textAlign } from '@mui/system';
import { Button } from '@mui/material';

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

        <section className='sec_one'>
            <div className='gradient_screen'></div>
            <img className='rayda_logo' src='logo.png' alt='rayda_logo'/>
            <div className='time'>
                <h1>Starts in: 3 days : 2 hours : 3 minutes</h1>
                <span style={{ color: "#b16208", fontSize: '15px', border: '#fffaeb 1px solid', padding: '5px', paddingLeft: '12px', paddingRight: '12px', background: '#fffaeb', borderRadius: '20px' }}><CircleIcon className='dot' sx={{ fontSize: '8px' }} /><b>Not Live</b></span><span style={{ color: "#646464", marginLeft: "10px", fontWeight: "520" }}>Layers Auction</span>
            </div>
            <div className='invite'>
                <span style={{ color: '#464444', fontSize: '15px', border: '#d4d4d5 1px solid', padding: '10px', borderRadius: '7px', fontWeight: 'bolder' }}><ThumbUpAltOutlinedIcon className='thumb' sx={{ color: '#464444' }} />Accept Invite</span>
            </div>
        </section>

        <section className='sec_two'>
            <div className='sec_two_heading'>
                <div className='featured_items'><h3>Featured Items</h3></div>
                {/*<span className='view_auction' style={{ color: '#464444', fontSize: '15px', border: '#d4d4d5 1px solid', padding: '10px', borderRadius: '7px', fontWeight: 'bolder' }}>View Auction</span>*/}
                <div className='align_left_right'><Button className='view_auction' variant='outlined' sx={{ color: '#464444', fontSize: '15px', border: '#d4d4d5 1px solid', borderRadius: '7px', fontWeight: 'bolder' }} >View Auction</Button></div>
            </div>
        </section>

      </body>

    </div>
  )
}
