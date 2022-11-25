import React from 'react'
import { NavLink } from 'react-router-dom';
const SideArticles = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <div className='p1'>
         <NavLink
         state = {{
           titleHead: props.titleText,
           imageDisplay: props.img,
           descriptionContent: props.des,
         }}
         to="/Extension"
       >
      <div className='p' style={{color: "#565673"}}>
        <div className='pp'>
          <img src={props.img} alt="not found" width={"99%"} height={"150px"}/>
        </div>
        <div className='qq'>
          <div className='rr'>
            <div className='rr1'>{props.titleText}</div>
            <div className='rr3'><b>{date}</b></div>
          </div>
        </div>
      </div>
      </NavLink>
      <hr style={{marginTop: "10px"}}/>
    </div>
  )
}

export default SideArticles