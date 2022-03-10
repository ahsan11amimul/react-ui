import React from 'react';
import './rightbar.css';

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster </b> and<b>3 others friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img src="/assets/person/1.jpeg" className='rightbarImg' alt="" />
              <span className="online"></span>
            </div>
            <span className="rightbarUsername">Aaaaa</span>
          </li>
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">
          User Information
        </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Bogura</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">
          User Friends
        </h4>
        <div className="followings">
          <div className="following">
            <img src="/assets/person/1.jpeg" alt="" className="followingImg" />
            <span className="followingName">Jhon Doe</span>
          </div>
        </div>
      </>
    )
  }
  return (
      <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile?<ProfileRightbar />:<HomeRightbar />}
      </div>
      </div>
  )
}

export default Rightbar