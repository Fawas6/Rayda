import React from 'react'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import CircleIcon from '@mui/icons-material/Circle'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { fontSize, textAlign } from '@mui/system';
import { Button } from '@mui/material';
import Items from '../redux/Items';

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

      <main>

        <section className='sec_one'>
            <div className='gradient_screen'></div>
            <img className='rayda_logo' src='logo.png' alt='rayda_logo'/>
            <div className='time'>
                <h1>Starts in: 3 days : 2 hours : 3 minutes</h1>
                <span style={{ color: "#b16208", fontSize: '15px', border: '#fffaeb 1px solid', padding: '5px', paddingLeft: '12px', paddingRight: '12px', background: '#fffaeb', borderRadius: '20px' }}><CircleIcon className='dot' sx={{ fontSize: '8px' }} /><b>Not Live</b></span><span style={{ color: "#646464", marginLeft: "10px", fontWeight: "520" }}>Layers Auction</span>
            </div>
            <div className='invite'>
                <Button className='view_auction' variant='outlined' sx={{ color: '#464444', fontSize: '15px', border: '#d4d4d5 1px solid', borderRadius: '7px', fontWeight: 'bolder' }} ><ThumbUpAltOutlinedIcon className='thumb' sx={{ color: '#464444' }} />Accept Invite</Button>
            </div>
        </section>
        <section className='container_sec2_sec3'>
            <section className='sec_two'>
                <div className='sec_two_heading'>
                    <div className='featured_items'><h3>Featured Items</h3></div>
                    <div className='align_left_right'><Button className='view_auction' variant='outlined' sx={{ color: '#464444', fontSize: '15px', border: '#d4d4d5 1px solid', borderRadius: '7px', fontWeight: 'bolder' }} >View Auction</Button></div>
                </div>
                <hr/>
            </section>

            <section className='sec_three'>
                <Items />
            </section>
        </section>
      </main>

    </div>
  )
}
