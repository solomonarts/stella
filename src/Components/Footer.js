import React from 'react'
import leavesbg from "../Assets/images/bg/leaves-01.png"
import downbg from "../Assets/images/bg/down-bg-01-01.png"

function Footer() {
  return (
	<div className='footer__container'>
		<footer>
        <img src={downbg} className="background" />
        <img src={leavesbg} className="foreground" />
       <div>
		content
	   </div>
      </footer>
	</div>
  )
}

export default Footer