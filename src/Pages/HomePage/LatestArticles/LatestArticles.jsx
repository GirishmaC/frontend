import React from 'react'
import { NavLink } from 'react-router-dom';
const LatestArticles = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <div className='a1'>
         <NavLink
         state = {{
           titleHead: props.titleText,
           imageDisplay: props.img,
           descriptionContent: props.des,
         }}
         to="/Extension"
       >
      <div className='a' style={{color: "#565673"}}>
        <div className='aa'>
          <img src={props.img} alt="not found" width={"99%"} height={"300px"}/>
        </div>
        <div className='bb'>
          <div className='cc'>
            <div className='cc1'>{props.titleText}</div>
            <div className='cc2'>{props.des}...</div>
            <div className='cc3'><b>{date}</b></div>
          </div>
        </div>
      </div>
      </NavLink>
      <hr style={{marginTop: "10px"}}/>
    </div>
  )
}

export default LatestArticles