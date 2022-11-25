import React from 'react'
import { NavLink } from 'react-router-dom';
const Latest = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <div>
    <div className='box1'>
      <NavLink
        state = {{
          titleHead: props.titleText,
          imageDisplay: props.img,
          descriptionContent: props.des,
        }}
        to="/Extension"
      >
      <img src={props.img} alt="not found" />
      <div className='latestLowerData'>
        <p style={{fontSize: "1.4rem",color: "black",fontFamily: 'Oswald'}}>{props.titleText}</p>
        <p style={{fontSize: "1.1rem",color: "#908D8D"}}>{props.des}...</p>
        <p><b style={{fontSize: "1.1rem",color: "#908D8D"}}>{date}</b></p>
      </div>
      </NavLink>
    </div>
    </div>
  )
}

export default Latest

