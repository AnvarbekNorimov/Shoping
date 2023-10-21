/* eslint-disable react/prop-types */
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
// import { Link, NavLink } from 'react-router-dom';

function Article( {plus}) {
  const [open, setOpen] = useState(false);
  const [openBrand, setOpenbrand] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
    <>
    <div className='article'>
        <div>
            <span
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='Article-button btn'
      >
        Category
      </span>
      <Collapse in={open}>
        <div className='article-btn' id="example-collapse-text">
                <span onClick={plus}    className='Article-button'>Mobile accessory</span>
                <span className='Article-button' onClick={plus}  >Electronics</span>
                <span className='Article-button' onClick={plus}  >Smartphones</span>
                <span className='Article-button' onClick={plus}  >Modern tech</span>
                <span className='Article-button' onClick={()=>setOpen(!open)}  >See all</span>
        </div>
      </Collapse>
        </div>
        <div>
            <span
        onClick={() => setOpenbrand(!openBrand)}

        aria-expanded={openBrand}
        className='Article-button btn'
      >
        Brands
      </span>
      <Collapse in={openBrand}>
        <div className='article-btn' >
                <span className='Article-button' onClick={plus}>      
               <Form.Check aria-label="option 1"/>
               Samsung
                </span>
    <span className="Article-button" onClick={plus}>
      <Form.Check aria-label="option 1"  />
      Apple
    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    Huawei
                    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    Pocco
                    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    Lenovo
                    </span>
                    <span onClick={() => setOpenbrand(!openBrand)} className='Article-button'>See all </span>
        </div>
      </Collapse>
        </div>
        <div>
            <span
        onClick={() => setOpenFeatures(!openFeatures)}

        aria-expanded={openFeatures}
        className='Article-button btn'
      >
        Features
      </span>
      <Collapse in={openFeatures}>
        <div className='article-btn' >
                <span className='Article-button' onClick={plus}>      
               <Form.Check aria-label="option 1" />
               Metallic
                </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    Plastic cover
                    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    8GB Ram
                    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1" />
                    Super power
                    </span>
                <span className='Article-button' onClick={plus}>
                    <Form.Check aria-label="option 1"/>
                    Large Memory
                    </span>
                    <span className='Article-button' onClick={() => setOpenFeatures(!openFeatures)}>See all </span>
        </div>
      </Collapse>
        </div>
    </div>
    </>
  );
}

export default Article;




// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
// function Article() {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="hhh">
//       <ul className="list-unstyled ps-0">
//         <li className="mb-1">
//           <span
//             className="btn btn-toggle d-flex align-items-center rounded border-0 collapsed"
//             data-bs-toggle="collapse"
//             data-bs-target="#home-collapse"
//             aria-expanded={!isCollapsed}
//             onClick={toggleCollapse}
//           >
//             Home
//           </span>
//           <div id="home-collapse" className={`collapse ${isCollapsed ? '' : 'show'}`}>
//             <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//               <li className="link-body-emphasis d-flex text-decoration-none rounded text-slate-950">
//                 <a href="#">Overview ihbbhu</a>
//               </li>
//               <li>
//                 <a href="#" className="link-body-emphasis d-flex text-decoration-none rounded">
//                   Updates
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="link-body-emphasis d-flex text-decoration-none rounded">
//                   Reports
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Article;