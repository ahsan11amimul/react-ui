import { Bookmark, HelpOutline, RssFeed,Group,Event,Chat } from '@material-ui/icons';
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <RssFeed className='sidebarListIcon' />
                      <span className="sidebarListText">
                          Feed
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <Chat className='sidebarListIcon' />
                      <span className="sidebarListText">
                          Chat
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <Group className='sidebarListIcon' />
                      <span className="sidebarListText">
                          Groups
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <Bookmark className='sidebarListIcon' />
                      <span className="sidebarListText">
                          BookMarks
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <HelpOutline className='sidebarListIcon' />
                      <span className="sidebarListText">
                          Questions
                      </span>
                  </li>
                  <li className="sidebarListItem">
                      <Event className='sidebarListIcon' />
                      <span className="sidebarListText">
                          Events
                      </span>
                  </li>
              </ul>
              <button className='sidebarButton'>Show More</button>
              <hr className="sidebarHr" />
              <ul className="sidebarFriendList">
                  <li className="sidebarFriend">
                      <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                      <span className='sidebarFriendName'>Joane Doe</span>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Sidebar