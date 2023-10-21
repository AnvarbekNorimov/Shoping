/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { IconClear, IconLeft, IconMore, IconRight, } from "../assets/img/IconProject"
import AboutCard from "./AboutCard";

const About = ({count}) => {  
  console.log(count , 'count');
  
  return (
    <section className="about">
      <div className="about-filter">
          {count.map((item,index)=>(
        <div className="about-fil">
           <span className="about-fil__title" key={index}>
            {item}
        <span className="about-fil__btn">
          <IconClear/>
        </span>
          </span>
       </div>
          ))}
       <span className="about-fil__clear" onClick={count=[0]}>Clear all filter</span>
      </div>
      <div>
        <AboutCard/>
      </div>
      <div className="About-box__subbtn">
        <span className="About-box__shbtn">
          Show 10 
          <IconMore/>
        </span>
        <span>
          <span className="About-box__leftbtn"><IconLeft/></span>
          <span className="About-box__morebt" >1</span>
          <span className="About-box__morebt">2</span>
          <span className="About-box__morebt">3</span>
          <span className="About-box__rightbtn"><IconRight/> </span>
        </span>
      </div>
    </section>
  )
}

export default About