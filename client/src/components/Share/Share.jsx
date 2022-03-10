import React from 'react';
import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import './share.css';

const Share = () => {
  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
                  <input placeholder='Whats in your mind' type="text" className="shareInput" />
              </div>
              <hr className="shareHr" />

              <div className="shareBottom">
                  <div className="shareOptions">
                  <div className="shareOption">
                      <PermMedia htmlColor="green" className="shareIcon" />
                      <span className='shareOptionText'>Photo or Video</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor="yellow" className="shareIcon" />
                      <span className='shareOptionText'>Location</span>
                  </div>
                  <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon" />
                      <span className='shareOptionText'>Tags</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor="goldenrod"className="shareIcon" />
                      <span className='shareOptionText'>Tags</span>
                  </div>
                  </div>
                  <button className="shareButton">Share</button>
                  
              </div>
          </div>
      </div>
  )
}

export default Share