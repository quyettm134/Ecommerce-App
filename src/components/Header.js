import KissPNG from '../assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png';
import JBLTune220TWS1 from '../assets/images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png';
import JBLJR310BT from '../assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png';
import JBLHorizon001 from '../assets/images/JBLHorizon_001_dvHAMaster.png';
import { BiBell, BiUserCircle, BiCart, BiChevronDown, BiX, BiMenu, BiSearchAlt } from 'react-icons/bi';

export default function Header() {
    return (
        <header>
            <div className="mobile-menu bg-second">
                <a href="/#" className="mb-logo">ABELO</a>
                <span className="mb-menu-toggle" id="mb-menu-toggle">
                    <BiMenu />
                </span>
            </div>

            <div className="header-wrapper" id="header-wrapper">
                <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                    <BiX />
                </span>
                <div className="bg-second">
                    <div className="top-header container">
                        <ul className="devided">
                            <li>
                                <a href="/#">+840123456789</a>
                            </li>
                            <li>
                                <a href="/#">abelo@mail.com</a>
                            </li>
                        </ul>
                        <ul className="devided">
                            <li className="dropdown">
                                <a href="/#">USD</a>
                                <BiChevronDown />
                                <ul className="dropdown-content">
                                    <li><a href="/#">VND</a></li>
                                    <li><a href="/#">JPY</a></li>
                                    <li><a href="/#">EUR</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="/#">ENGLISH</a>
                                <BiChevronDown />
                                <ul className="dropdown-content">
                                    <li><a href="/#">VIETNAMESE</a></li>
                                    <li><a href="/#">JAPANESE</a></li>
                                    <li><a href="/#">FRENCH</a></li>
                                    <li><a href="/#">SPANISH</a></li>
                                </ul>
                            </li>
                            <li><a href="/#">ORDER TRACKING</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-main">
                    <div className="mid-header container">
                        <a href="/#" className="logo">ABELO</a>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <BiSearchAlt style={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                right: "20px",
                                cursor: "pointer",
                                fontSize: "25px"
                            }}/>
                        </div>
                        <ul className="user-menu">
                            <li><a href="/#"><BiBell /></a></li>
                            <li><a href="/#"><BiUserCircle /></a></li>
                            <li><a href="/#"><BiCart /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-second">
                    <div className="bottom-header container">
                        <ul className="main-menu">
                            <li><a href="/#">Home</a></li>

                            <li className="mega-dropdown">
                                <a href="/#">Shop<BiChevronDown /></a>
                                <div className="mega-content">
                                    <div className="row">
                                        <div className="col-3 col-md-12">
                                            <div className="box">
                                                <h3>Categories</h3>
                                                <ul>
                                                    <li><a href="/#">Wireless</a></li>
                                                    <li><a href="/#">Inear headphone</a></li>
                                                    <li><a href="/#">Overear headphone</a></li>
                                                    <li><a href="/#">sport headphone</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-12">
                                            <div className="box">
                                                <h3>Categories</h3>
                                                <ul>
                                                    <li><a href="/#">Wireless</a></li>
                                                    <li><a href="/#">Inear headphone</a></li>
                                                    <li><a href="/#">Overear headphone</a></li>
                                                    <li><a href="/#">sport headphone</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-12">
                                            <div className="box">
                                                <h3>Categories</h3>
                                                <ul>
                                                    <li><a href="/#">Wireless</a></li>
                                                    <li><a href="/#">Inear headphone</a></li>
                                                    <li><a href="/#">Overear headphone</a></li>
                                                    <li><a href="/#">sport headphone</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-12">
                                            <div className="box">
                                                <h3>Categories</h3>
                                                <ul>
                                                    <li><a href="/#">Wireless</a></li>
                                                    <li><a href="/#">Inear headphone</a></li>
                                                    <li><a href="/#">Overear headphone</a></li>
                                                    <li><a href="/#">sport headphone</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row img-row">
                                        <div className="col-3">
                                            <div className="box">
                                                <img src={KissPNG} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src={JBLTune220TWS1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src={JBLJR310BT} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="box">
                                                <img src={JBLHorizon001} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/#">blog</a></li>
                            <li><a href="/#">contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}