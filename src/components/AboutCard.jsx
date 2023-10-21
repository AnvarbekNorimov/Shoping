import { IconSert, Iconstarts } from '../assets/img/IconProject'

import { NavLink } from 'react-router-dom'
import img13 from "../assets/img/iphone13.png"

const AboutCard = () => {
  return (
    <div  className="About-box">        
        <NavLink to='/SIngleCard' style={{ textDecoration: 'none' }}>
        <div className="About-card">
        <div className="About-card__img">
          <img className="About-card__imgage" src={img13} alt="img13" />
        </div>
              <div className="About-subcard">
          <div className="About-title">
            <span className="About-title__subtitle">$99.50 <s className="About-title__check">$1128.00</s></span>
            <span className="About-title__text"><Iconstarts/><span className="About-title__fit">7.5</span></span>
            <span className="About-title__textera">GoPro HERO6 4K Action Camera - Black</span>
          </div>
          <span className='About-subcard-image'>
            <IconSert className='About-subcard-image'/>
          </span>
        </div>
        </div>
        </NavLink>
        <NavLink to='/SIngleCard' style={{ textDecoration: 'none' }}>
        <div className="About-card">
        <div className="About-card__img">
          <img className="About-card__imgage" src={img13} alt="img13" />
        </div>
              <div className="About-subcard">
          <div className="About-title">
            <span className="About-title__subtitle">$99.50 <s className="About-title__check">$1128.00</s></span>
            <span className="About-title__text"><Iconstarts/><span className="About-title__fit">7.5</span></span>
            <span className="About-title__textera">GoPro HERO6 4K Action Camera - Black</span>
          </div>
          <span className='About-subcard-image'>
            <IconSert className='About-subcard-image'/>
          </span>
        </div>
        </div>
        </NavLink>
        <NavLink to='/SIngleCard' style={{ textDecoration: 'none' }}>
        <div className="About-card">
        <div className="About-card__img">
          <img className="About-card__imgage" src={img13} alt="img13" />
        </div>
              <div className="About-subcard">
          <div className="About-title">
            <span className="About-title__subtitle">$99.50 <s className="About-title__check">$1128.00</s></span>
            <span className="About-title__text"><Iconstarts/><span className="About-title__fit">7.5</span></span>
            <span className="About-title__textera">GoPro HERO6 4K Action Camera - Black</span>
          </div>
          <span className='About-subcard-image'>
            <IconSert className='About-subcard-image'/>
          </span>
        </div>
        </div>
        </NavLink>
        <NavLink to='/SIngleCard' style={{ textDecoration: 'none' }}>
        <div className="About-card">
        <div className="About-card__img">
          <img className="About-card__imgage" src={img13} alt="img13" />
        </div>
              <div className="About-subcard">
          <div className="About-title">
            <span className="About-title__subtitle">$99.50 <s className="About-title__check">$1128.00</s></span>
            <span className="About-title__text"><Iconstarts/><span className="About-title__fit">7.5</span></span>
            <span className="About-title__textera">GoPro HERO6 4K Action Camera - Black</span>
          </div>
          <span className='About-subcard-image'>
            <IconSert className='About-subcard-image'/>
          </span>
        </div>
        </div>
        </NavLink>
    </div>
  )
}

export default AboutCard