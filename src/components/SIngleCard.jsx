import img13 from "../assets/img/iphone13.png"
import {IconChat, IconSert, IconShop, IconTrue, Iconstarts} from "../assets/img/IconProject"
const SIngleCard = () => {
  return (
    <div className="Single">
    <div className="container Single-bg">
        <div className="Single-card">
            <div className="Single-card__left">
                <div >
                    <img className="Single-card__img" src={img13} alt="nn" />
                </div>
                <span className="Single-card__pngicon">
                  <img className="Single-card__icon" src={img13} alt="nn" />
                  <img className="Single-card__icon" src={img13} alt="nn" />
                  <img className="Single-card__icon" src={img13} alt="bn" />
                  <img className="Single-card__icon" src={img13} alt="nn" />
                  <img className="Single-card__icon" src={img13} alt="nkjn" />
                </span>
            </div>
            <div className="Single-card__right">
                <div className="Single-card__title">
                    <span className="Single-card__titleleft"> <IconTrue/> In stock</span>
                    <span className="Single-card__titleright"><IconSert/> Save for later</span>
                </div>
                <span className="Single-card__subtitle">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</span>
                <div className="Single-card__fil">
                    <span className="Single-card__filtitle"><Iconstarts/>9.3</span>
                    <span className="Single-card__filtext"><IconChat/>32 reviews</span>
                    <span className="Single-card__filsubtext"><IconShop/>154 sold</span>
                </div>
                <div className="Single-card__sum">
                    <div className="">
                        <span className="Single-card__summa1">$98.00</span>
                        <span>50-100 pcs</span>
                        <span className="single-card__Sumborder"></span>
                    </div>
                    <div className="w-[50px]">
                        <span className="Single-card__summa2">$90.00</span>
                        <span>100-700 pcs</span>
                    </div>
                    <div className="w-[50px]">
                        <span className="Single-card__summa2">$78.00</span>
                        <span>700+ pcs</span>
                    </div>
                </div>
                <div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Price:</span>
                        <span  className="Single-Card__infosubtitle">Negotiable</span>
                    </div>
                        <div className="single-card__infoborder"></div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Type:</span>
                        <span className="Single-Card__infosubtitle">Classic  shoes</span>
                    </div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Material: </span>
                        <span className="Single-Card__infosubtitle">Plastic material</span>
                    </div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Design: </span>
                        <span className="Single-Card__infosubtitle">Modern nice</span>
                    </div>
                     <div className="single-card__infoborder"></div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Customization: </span>
                        <span className="Single-Card__infosubtitle">Customized logo and design custom packages</span>
                    </div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Protection: </span>
                        <span className="Single-Card__infosubtitle">Refund Policy</span>
                    </div>
                    <div className="Single-Card__info">
                        <span className="Single-Card__infotitle">Warranty: </span>
                        <span className="Single-Card__infosubtitle">2 years full warranty </span>
                    </div>
                     <div className="single-card__infoborder"></div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default SIngleCard