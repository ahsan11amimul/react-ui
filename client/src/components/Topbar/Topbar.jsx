import React from 'react';
import {Search, Person,Chat,Notifications} from '@material-ui/icons'
import './topbar.css';

const Topbar = () => {
  return (
      <div className='topbarContainer'>
          <div className="topbarLeft">
              <span className='logo'>Social Media</span>
          </div>
          <div className="topbarCenter">
              <div className="searchbar">
                  <Search className="searchIcon" />
                  <input placeholder='Serach here..' className='searchInput' />
              </div>
          </div>
          <div className="topbarRight">
              <div className="topbarLinks">
                  <span className="topbarLink">HomePage</span>
                  <span className="topbarLink">TimeLine</span>
              </div>
              <div className="topbarIcons">
                  <div className="topbarIconItem">
                      <Person />
                      <div className="topbarIconBadge">11</div>
                  </div>
                  <div className="topbarIconItem">
                      <Chat />
                      <div className="topbarIconBadge">11</div>
                  </div>
                  <div className="topbarIconItem">
                      <Notifications />
                      <div className="topbarIconBadge">11</div>
                  </div>
              </div>
              <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>
      </div>
  )
}

export default Topbar