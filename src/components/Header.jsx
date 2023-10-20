import {IconLogo,IconProject, Iconshop} from "../assets/img/IconProject"


const Header = () => {
  return (
    <>
    <nav className="container">
     <div className="header d-flex">
       <div className="Header-nav d-flex">
            <span className="d-flex  Header-Logo">
                <IconProject/>
                <IconLogo/>
            </span>
            <form className="Header-form d-flex">
                <input className="Header-form__input " type="search" placeholder="Search" />
                <span className="Header-form__button ">search</span>
            </form>
        </div>
        <div className="Header-order ">
                <span  className='Header-order-icon'><Iconshop/></span>
            <span className="Header-order-text">
                Orders
            </span>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Header