import React from 'react';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './profile.css';

function Profile() {
  return (
     <>
      <Topbar /> 
      <div className="profile">
              <Sidebar />
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                      <img src="/assets/post/3.jpeg" alt="" className="coverImg" />
                      <img src="/assets/person/3.jpeg" alt="" className="profileImg" />
                      </div>
                      <div className="profileInfo">
                          <h4 className='profileName'>Amimul Ahsan</h4>
                          <span className="profileDesc">Hey Guys</span>
                      </div>
                     
                  </div>
                  <div className="profileRightBottom">
                      <Feed />
                      <Rightbar profile />
                  </div>
              </div>
       
      </div>
    </>
  )
}

export default Profile