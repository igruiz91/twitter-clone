import React, { useState } from 'react'
import '../css/Sidebar.css';
import {  BookmarkBorderOutlined,   Home, List, ListAlt, MailOutline, MoreHoriz, PermIdentity, Search, Twitter } from '@material-ui/icons';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {

  const [active, setActive] = useState(false)

  return (
    <div className='sidebar'>
      <Twitter className='sidebar__twitterIcon' />
      <SidebarOption active text='Home' Icon={Home} />
      <SidebarOption text='Explore' Icon={Search} />
      <SidebarOption text='Notification' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Messages' Icon={MailOutline} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorderOutlined} />
      <SidebarOption text='List' Icon={ListAlt} />
      <SidebarOption text='Profile' Icon={PermIdentity} />
      <SidebarOption text='More' Icon={MoreHoriz} />
      <Button className='sidebar__tweet' variant='outlined'>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar
